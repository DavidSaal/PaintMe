import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Canvas from "./Canvas";
import ServerImages from "./ServerImages";
import ColorPicker from "./ColorPicker";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [brushColor, setBrushColor] = useState({
    red: 0,
    green: 0,
    blue: 0,
    alpha: 1,
  });

  const [bgColor, setBgColor] = useState({
    red: 255,
    green: 255,
    blue: 255,
    alpha: 1,
  });

  const rgbBrushColor =
    brushColor.alpha === 1
      ? `rgb(${brushColor.red}, ${brushColor.green}, ${brushColor.blue})`
      : `rgba(${brushColor.red}, ${brushColor.green}, ${brushColor.blue}, ${brushColor.alpha})`;

  const rgbBgColor =
    bgColor.alpha === 1
      ? `rgb(${bgColor.red}, ${bgColor.green}, ${bgColor.blue})`
      : `rgba(${bgColor.red}, ${bgColor.green}, ${bgColor.blue}, ${bgColor.alpha})`;

  const [brushSize, setBrushSize] = useState(5);
  const [offset, setOffset] = useState({
    x: 0,
    y: 0,
  });

  const [fileName, setFileName] = useState("");
  const [images, setImages] = useState([]);
  const [expandCanvas, setExpandCanvas] = useState(false);
  const [loader, setLoader] = useState(true);

  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const inputRef = useRef(null);

  const resizeHandler = (_) => {
    const canvas = canvasRef.current;
    canvas.width = inputRef.current.getBoundingClientRect().width - 25;
  };
  useEffect(() => {
    window.addEventListener("resize", resizeHandler, true);
    return () => {
      window.removeEventListener("resize", resizeHandler, true);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = inputRef.current.getBoundingClientRect().width - 25;
  }, [expandCanvas]);

  const prepareCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = inputRef.current.getBoundingClientRect().width - 25;
    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.strokeStyle = rgbBrushColor;
    context.lineWidth = brushSize;
    contextRef.current = context;
  };

  const fetchData = async () => {
    const res = await fetch("https://paintmee.herokuapp.com");
    const images = await res.json();
    return images;
  };

  useEffect(() => {
    prepareCanvas();
    fetchData().then((images) => {
      setLoader(false);
      setImages(images);
    });
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.strokeStyle = rgbBrushColor;
    context.lineWidth = brushSize;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    setOffset({ x: offsetX, y: offsetY });
  };

  const clearCanvas = () => {
    setFileName("");
    setOffset({ x: 0, y: 0 });
    setBgColor({ red: 255, green: 255, blue: 255, alpha: 1 });
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = `rgba(255, 255, 255, 1)`;
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  const changeBrushColor = (event) => {
    const { name, value } = event.target;
    setBrushColor({ ...brushColor, [name]: value });
  };

  const changeBgColor = (event) => {
    const { name, value } = event.target;
    setBgColor({ ...bgColor, [name]: value });
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = rgbBgColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  const handleFiles = (event) => {
    if (event.target.files.length) {
      const file = event.target.files[0];
      setFileName(file.name);
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      var img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = function () {
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
    }
  };

  const b64toBlob = (b64Data, contentType = "image/png", sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  };

  const loadImage = (event) => {
    setFileName("");
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = `rgba(255, 255, 255, 1)`;
    context.fillRect(0, 0, canvas.width, canvas.height);
    var b64Data = event.target.src.split(",")[1].trim();
    var blob = b64toBlob(b64Data);
    var img = new Image();
    img.src = URL.createObjectURL(blob);
    img.onload = function () {
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  };

  const saveImage = async () => {
    setLoader(true);
    const canvas = canvasRef.current;
    var imageUrl = canvas.toDataURL();
    const res = await fetch("https://paintmee.herokuapp.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ src: imageUrl }),
    });
    const savedImage = await res.json();
    if (res.status === 200) {
      setImages([...images, savedImage]);
    } else {
      res.status === 401 && alert("Error reading from database.");
      res.status === 402 &&
        alert("Server reached max limit, please delete images.");
      res.status === 403 && alert("Error with image src pattern.");
      res.status === 404 && alert("Error saving image to database.");
    }
    setLoader(false);
  };

  const deleteImage = async (event) => {
    setLoader(true);
    const res = await fetch("https://paintmee.herokuapp.com/deleteImage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: event.target.id }),
    });
    if (res.status === 200) {
      setImages(images.filter((image) => image._id !== event.target.id));
    } else {
      res.status === 405 && alert("Error deleting images.");
    }
    setLoader(false);
  };

  const deleteAll = async () => {
    setLoader(true);
    const res = await fetch("https://paintmee.herokuapp.com", {
      method: "DELETE",
    });
    if (res.status === 200) {
      setImages([]);
    } else {
      res.status === 405 && alert("Error deleting images.");
    }
    setLoader(false);
  };

  return (
    <div className="wrapper pt-4">
      <div className={expandCanvas ? "col-11 col-lg-11" : "col-10"}>
        <Header
          brushSize={brushSize}
          setBrushSize={setBrushSize}
          offset={offset}
          saveImage={saveImage}
          deleteAll={deleteAll}
          images={images}
          loadImage={loadImage}
          expandCanvas={expandCanvas}
          setExpandCanvas={setExpandCanvas}
        />
        <div className="row pt-4">
          <div className="col pb-5 pb-xl-0" id="colorPicker1">
            <ColorPicker
              title="Brush Color"
              color={brushColor}
              changeColor={changeBrushColor}
              rgbColor={rgbBrushColor}
            />
          </div>
          <div
            ref={inputRef}
            className={
              expandCanvas
                ? "col-12 col-lg-6 col-xl-7 pb-4 pb-lg-0"
                : "col-12 col-lg-5 col-xl-6 pb-4 pb-lg-0"
            }
            id="canvas"
          >
            <Canvas
              startDrawing={startDrawing}
              finishDrawing={finishDrawing}
              draw={draw}
              canvasRef={canvasRef}
            />
            <Container
              fileName={fileName}
              handleFiles={handleFiles}
              clearCanvas={clearCanvas}
            />
            <ServerImages
              saveImage={saveImage}
              deleteAll={deleteAll}
              images={images}
              loadImage={loadImage}
              deleteImage={deleteImage}
              loader={loader}
            />
          </div>
          <div className="col pb-5 pb-xl-0" id="colorPicker2">
            <ColorPicker
              title="Background Color"
              color={bgColor}
              changeColor={changeBgColor}
              rgbColor={rgbBgColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
