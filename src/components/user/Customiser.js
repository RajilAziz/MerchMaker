import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fabric } from "fabric";
import Swal from "sweetalert2";
import app_config from "../../config";
const Customiser = () => {
  const fonts = [
    "Tangerine",
    "Potta One",
    "Montserrat",
    "Anton",
    "Dancing Script",
  ];
  const merchandise = [
    {
      name: "Sport Shoe",
      images: [
        "images/shoe600.png",
        "images/shoe600.png",
        "images/shoe600.png",
        // "https://assetscdn1.paytm.com/images/catalog/product/F/FO/FOOBRUNO-MANETTBRUN212022782A40D/1564608935172_1..jpg",
      ],
      price: 2500,
    },
  ];
  const [selectedMerch, setSelectedMerch] = useState(null);
  const [features, setFeatures] = useState([
    {
      name: "color_filter",
      enabled: true,
      image: "/features/color_filter.png",
    },
    { name: "Add Text", enabled: false, image: "/features/add_text.png" },
    { name: "stickers", enabled: false, image: "/features/sticker.png" },
    { name: "Free Draw", enabled: false, image: "/features/free_draw.png" },
  ]);

  const [text, setText] = useState("");

  const [selFeature, setSelFeature] = useState({
    name: "color_filter",
    enabled: true,
    image: "/features/color_filter.png",
  });

  const [selColor, setSelColor] = useState("#fff");
  const [canvas, setCanvas] = useState(null);

  const [imgObjects, setImgObjects] = useState([]);
  const [selObj, setSelObj] = useState(null);
  const [selFont, setSelFont] = useState("");

  const stickers = [
    // "/stickers/digipodium_w.png",
    "/stickers/facebook.png",
    "/stickers/google.png",
    "/stickers/monster.png",
    "/stickers/superman.png",
    "/stickers/gamer.png",
    "/stickers/digipodium_b.png",
  ];
  const [addedImages, setAddedImages] = useState([]);
  const min_zoom = 1;
  const max_zoom = 10;
  const [zoom, setZoom] = useState(null);
  const [finalImage, setFinalImage] = useState(null);

  // const { merch } = useParams();
  const merch = "Sport Shoe";

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const navigate = useNavigate();

  const initCanvas = () => {
    let can = new fabric.Canvas("editor", {
      width: 600,
      height: 600,
      // selectionColor: 'red',
      selectionLineWidth: 2,
      // isDrawingMode: true
    });
    setZoom(can.getZoom());
    return can;
  };

  const url = app_config.backend_url;

  const addImage = (img_name, can, cb) => {
    return new Promise((resolve, reject) => {
      fabric.Image.fromURL(
        img_name,
        (img) => {
          img.selectable = false;
          img.set({
            left: 0,
            top: 0,
            width: can.width,
            height: can.height,
          });
          // img.scale();
          // objArr.push(img);
          // img_obj = img;
          resolve(img);
          can.add(img);
          console.log(img);
          // setImgObjects([...imgObjects, img]);
          setSelObj(img);
        },
        { crossOrigin: "anonymous" }
      );
      setCanvas(can);
    });
    // let img_obj = null;

    // return img_obj;
    // return objArr;
  };

  useEffect(() => {
    let mer = merchandise.filter((m) => m.name === merch)[0];
    console.log(mer);
    setSelectedMerch(mer);

    console.log(selectedMerch);
    let can = initCanvas();
    setCanvas(can);
    console.log(mer);
    let objArr = [];
    mer.images.forEach((img) => {
      addImage(img, can).then((img) => objArr.push(img));
      console.log(objArr);
    });
    setTimeout(setImgObjects(objArr), 500);
    // console.log(objArr);
  }, []);

  const toggleFeature = (index) => {
    let feat = features;
    feat.forEach((f) => (f.enabled = false));
    console.log(feat);
    setFeatures([...feat]);
    setSelFeature(features[index]);
    console.log(features[index]);
    if (features[index].name === "Free Draw") {
      console.log("free draw selected");
      canvas.isDrawingMode = true;
    } else {
      canvas.isDrawingMode = false;
    }
    console.log(canvas.isDrawingMode);
    setCanvas(canvas);
  };

  const showSelFeature = () => {
    if (features === undefined) return;
    if (selFeature.name === features[0].name) {
      return (
        <div className="card" class="mt-4" status="primary">
          <div className="card-header">Choose Color</div>
          <div className="card-body">
            <div class="row">
              <div
                class="col palete-choice"
                style={{
                  background:
                    "url(" + url + "/images/color_ph.png) center no-repeat",
                  backgroundSize: "contain",
                }}
                onClick={(e) => setColor("default")}
              ></div>
              {[
                "#001485",
                "#b1b1b1",
                "#1eff00",
                "#ff00ff",
                "#d38888",
                "#b941ff",
                "#e1ff7f",
              ].map((color) => (
                <div
                  class="col palete-choice"
                  style={{ backgroundColor: color }}
                  onClick={(e) => setColor(color)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (selFeature.name === features[1].name) {
      return (
        <div className="card" status="primary">
          <div className="header">Add Text</div>
          <div class="card-body">
            <div class="row mb-5 mb-5">
              {fonts.map((font, i) => (
                <div class="col">
                  <button
                    className={
                      selFont === font
                        ? "btn btn-success btn-lg"
                        : "btn btn-outline-success btn-lg"
                    }
                    style={{ fontFamily: font }}
                    onClick={(e) => {
                      setFont(font);
                      setSelFont(font);
                    }}
                  >
                    Font
                    {i + 1}
                  </button>
                </div>
              ))}
            </div>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <div class="input-append">
                <button
                  onClick={(e) => addText(text)}
                  className="btn btn-success"
                >
                  Add Text
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (selFeature.name === features[2].name) {
      return (
        <div className="card" status="primary">
          <div className="card-header">
            <span className="h4">Click to Add Stickers</span>
            <span className="fw-bold">OR</span>

            <label className="btn btn-outline-dark" for="upload-sticker">
              Upload an Sticker
            </label>
            <input
              type="file"
              className="hidden"
              id="upload-sticker"
              onChange={uploadSticker}
            />
          </div>
          <div class="card-body">
            <div class="row">
              {stickers.map((sticker) => (
                <div class="col-2">
                  <div
                    class="sticker-choice"
                    onClick={(e) => addSticker(sticker)}
                  >
                    <img
                      src={url + "/images" + sticker}
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (selFeature.name === features[3].name) {
      return (
        <div className="card" status="primary">
          <div className="header">Free Hand Drawing</div>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <p class="h3">Set Pen Width</p>
                {/* <mat-slider thumbLabel value="1" [min]="1" [max]="50" #width (change)="setPenWidth(width.value)">
                      </mat-slider> */}
              </div>
              <div class="col">
                <p class="h3">Set Pen Color</p>
                <input
                  type="color"
                  class="form-control"
                  onChange={(e) => setPenColor(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  const setZoomLevel = () => {
    console.log(this.zoom_level * 0.1 + 1);
    this.canvas.setZoom(this.zoom_level * 0.1 + 1);
  };

  const applyFilter = (img, col) => {
    console.log(img);
    var filter = new fabric.Image.filters.BlendColor({
      color: col,
      mode: "tint",
      alpha: 0.5,
    });
    img.filters = [filter];
    img.applyFilters();
  };

  const removeFilters = (obj) => {
    obj.filters = [];
    obj.applyFilters();
  };

  const setColor = (col) => {
    if (col === "default") {
      removeFilters(selObj);
      console.log("removed");
    } else {
      setSelColor(col);
      applyFilter(selObj, col);
    }
    let can = canvas;
    can.renderAll();
    setCanvas(can);
  };

  const uploadSticker = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (f) {
      var data = f.target.result;
      let can = canvas;
      fabric.Image.fromURL(data, (img) => {
        img.set({
          left: 100,
          top: 100,
        });
        img.scale(0.7);

        can.add(img);
        setAddedImages([...addedImages, img]);

        setCanvas(can);
      });
    };
    reader.readAsDataURL(file);
  };

  const addSticker = (name) => {
    let can = canvas;
    fabric.Image.fromURL(url + "/images" + name, (img) => {
      img.set({
        left: 100,
        top: 100,
      });
      img.scale(0.7);

      can.add(img);
      setAddedImages([...addedImages, img]);

      setCanvas(can);
      // this.selected_sticker = img;
    });
  };

  const setObject = (index) => {
    console.log(imgObjects);
    setSelObj(imgObjects[index]);
    // this.selected_object = this.img_objects[index];
    console.log("selected ", index);
    console.log(imgObjects[index]);
  };

  const addPattern = (target) => {
    fabric.Image.fromURL("/assets/stickers/digipodium_w.png", (img) => {
      img.scale(0.7);
      target.filters = [img];
      target.applyFilters();
    });

    this.canvas.renderAll();
  };

  const removeSticker = () => {
    let can = canvas;
    const sticker = can.getActiveObject();
    if (sticker) {
      can.remove(sticker);
    }
    setCanvas(can);
  };

  const addText = (text) => {
    var comicSansText = new fabric.IText(text, {
      fontFamily: "Arial",
    });
    let can = canvas;
    can.add(comicSansText);
    setCanvas(can);
  };

  const setFont = (font) => {
    canvas.getActiveObject().set("fontFamily", font);
    canvas.requestRenderAll();
    setCanvas(canvas);
  };

  const setPenWidth = (width) => {
    console.log(width);
    this.canvas.freeDrawingBrush.width = width;
  };

  const setPenColor = (color) => {
    console.log(color);
    canvas.freeDrawingBrush.color = color;
  };

  const finalize = () => {
    if (currentUser === null) {
      Swal.fire({
        icon: "error",
        title: "you need to Signin to Checkout",
      });
      return;
    }
    let merchData = JSON.parse(sessionStorage.getItem("selectedMerch"));

    let merchImageName = "finalMerch_" + new Date().toString();
    const img = new Image();
    img.src = canvas.toDataURL("image/png");
    console.log(img);
    sessionStorage.setItem("final_merch", img.src);
    setFinalImage(img);

    sessionStorage.setItem(
      "order",
      JSON.stringify({
        user: currentUser._id,
        data: {
          merchImage: merchImageName,
          merchName: selectedMerch.name,
          price: selectedMerch.price,
        },
      })
    );

    navigate("/main/checkout");
  };

  const showFeatures = () => {
    if (features !== undefined) {
      return features.map((feature, i) => (
        <div class="l-side-item">
          <img
            class="img-fluid"
            src={url + "/images" + feature.image}
            alt=""
            onClick={(e) => toggleFeature(i)}
          />
        </div>
      ));
    }
  };

  const showSelImages = () => {
    if (selectedMerch !== null) {
      return selectedMerch.images.map((item, i) => (
        <div class="r-side-item" onClick={(e) => setObject(i)}>
          <img
            class="img-fluid"
            src={url + "/images" + item}
            alt=""
            crossorigin="anonymous"
          />
        </div>
      ));
    }
  };

  const designOptions = () => {
    return (
      <div className="card" style={{ overflow: "auto", height: "100%" }}>
        <div className="card-body">
          <div className="block p-2">
            <img
              className="img-fluid"
              src="https://cdn2.iconfinder.com/data/icons/flat-style-svg-icons-part-1/512/design_graphic_sign_icon_symbol-512.png"
            />
            <h4 className="text-center mt-2">Color</h4>
          </div>
          <div className="block p-2">
            <img
              className="img-fluid"
              src="https://images.vexels.com/media/users/3/134436/isolated/lists/2e785703627785742a3e2afe96e9e07c-calm-emoji-emoticon.png"
            />
            <h4 className="text-center mt-2">Sticker</h4>
          </div>
          <div className="block p-2">
            <img
              className="img-fluid"
              src="data:image/png;base64,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"
            />
            <h4 className="text-center mt-2">Draw</h4>
          </div>
          <div className="block p-2">
            <img
              className="img-fluid"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7eR_UybSFlR6Np6z3aH9tvXn3GCi5P0j2QNEYLBV9_BNbGLdqyli7pwGc8Ww10m9XzBY&usqp=CAU"
            />
            <h4 className="text-center mt-2">Text</h4>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div class="section">
      <div class="container-fluid">
        <h3>CUSTOMISER HEADER</h3>
        <div class="row">
          <div class="col-3">{showFeatures()}</div>
          <div class="col-6">
            <div class="card">
              <div class="card-body">
                <canvas id="editor" style={{ width: "100%" }}></canvas>
              </div>
            </div>
          </div>
          <div class="col-3">{showSelImages()}</div>
        </div>
        <div class="">CUSTOMISER FOOTER</div>
      </div>
    </div>
  );
};

export default Customiser;
