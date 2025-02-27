(function(window) {

    /*
                        _   _     _                _
       __ _ _ __  _   _| |_| |__ (_)_ __   __ _   (_)___
      / _` | '_ \| | | | __| '_ \| | '_ \ / _` |  | / __|
     | (_| | | | | |_| | |_| | | | | | | | (_| |_ | \__ \
      \__,_|_| |_|\__, |\__|_| |_|_|_| |_|\__, (_)/ |___/
                  |___/                   |___/ |__/
     */

    var anything = function() {
        this.version = "3"
    };

    var moreOnTop = function() {
        return Δ.reverse("In your face, InderpalPfeffis! I'm the top one now!")
    };

    anything.prototype.moreOnTop = moreOnTop;

    /*

    Laptop chargers are as important as Oxygen these days.
    But these little box creators never get the attention they deserve

    I request you all to click a picture of your chargers
    and share it here on this revolutionary initiative called Anything.js

    */

    var laptopChargersAroundTheWorld = function() {
        return [
            'http://imgur.com/oFTX0Tm',
            'https://imgur.com/JPw3a0i'
            // Add your charger pic here
        ];
    };

    anything.prototype.laptopChargersAroundTheWorld = laptopChargersAroundTheWorld;

    var CMYKtoHSL = function(cmyk) {
        var rgb = CMYKtoRGB(cmyk);
        return RGBtoHSL(rgb);
    };

    anything.prototype.CMYKtoHSL = CMYKtoHSL;
    var CMYKtoRGB = function(cmyk) {
        var r = 255 * (1 - cmyk.c) * (1 - cmyk.k);
        var g = 255 * (1 - cmyk.m) * (1 - cmyk.k);
        var b = 255 * (1 - cmyk.y) * (1 - cmyk.k);
        var rgb = {
            r: r,
            g: g,
            b: b,
            hex: null
        };
        rgb.hex = RGBtoHEX(rgb);
        return rgb;
    }

    anything.prototype.CMYKtoRGB = CMYKtoRGB;
    HEXtoNAME = function(hex) {
        var colors = {
            "#f0f8ff": "Aliceblue",
            "#faebd7": "Antiquewhite",
            "#00ffff": "Aqua",
            "#7fffd4": "Aquamarine",
            "#f0ffff": "Azure",
            "#f5f5dc": "Beige",
            "#ffe4c4": "Bisque",
            "#000000": "Black",
            "#ffebcd": "Blanchedalmond",
            "#0000ff": "Blue",
            "#8a2be2": "Blueviolet",
            "#a52a2a": "Brown",
            "#deb887": "Burlywood",
            "#5f9ea0": "Cadetblue",
            "#7fff00": "Chartreuse",
            "#d2691e": "Chocolate",
            "#ff7f50": "Coral",
            "#6495ed": "Cornflowerblue",
            "#fff8dc": "Cornsilk",
            "#dc143c": "Crimson",
            //"#00ffff": "Cyan",
            "#00008b": "Darkblue",
            "#008b8b": "Darkcyan",
            "#b8860b": "Darkgoldenrod",
            "#a9a9a9": "Darkgray",
            "#006400": "Darkgreen",
            "#bdb76b": "Darkkhaki",
            "#8b008b": "Darkmagenta",
            "#556b2f": "Darkolivegreen",
            "#ff8c00": "Darkorange",
            "#9932cc": "Darkorchid",
            "#8b0000": "Darkred",
            "#e9967a": "Darksalmon",
            "#8fbc8f": "Darkseagreen",
            "#483d8b": "Darkslateblue",
            "#2f4f4f": "Darkslategray",
            "#00ced1": "Darkturquoise",
            "#9400d3": "Darkviolet",
            "#ff1493": "Deeppink",
            "#00bfff": "Deepskyblue",
            "#696969": "Dimgray",
            "#1e90ff": "Dodgerblue",
            "#b22222": "Firebrick",
            "#fffaf0": "Floralwhite",
            "#228b22": "Forestgreen",
            //"#ff00ff": "Fuchsia",
            "#dcdcdc": "Gainsboro",
            "#f8f8ff": "Ghostwhite",
            "#ffd700": "Gold",
            "#daa520": "Goldenrod",
            "#808080": "Gray",
            "#008000": "Green",
            "#adff2f": "Greenyellow",
            "#f0fff0": "Honeydew",
            "#ff69b4": "Hotpink",
            "#cd5c5c": "Indianred",
            "#4b0082": "Indigo",
            "#fffff0": "Ivory",
            "#f0e68c": "Khaki",
            "#e6e6fa": "Lavender",
            "#fff0f5": "Lavenderblush",
            "#7cfc00": "Lawngreen",
            "#fffacd": "Lemonchiffon",
            "#add8e6": "Lightblue",
            "#f08080": "Lightcoral",
            "#e0ffff": "Lightcyan",
            "#fafad2": "Lightgoldenrodyellow",
            "#d3d3d3": "Lightgrey",
            "#90ee90": "Lightgreen",
            "#ffb6c1": "Lightpink",
            "#ffa07a": "Lightsalmon",
            "#20b2aa": "Lightseagreen",
            "#87cefa": "Lightskyblue",
            "#778899": "Lightslategray",
            "#b0c4de": "Lightsteelblue",
            "#ffffe0": "Lightyellow",
            "#00ff00": "Lime",
            "#32cd32": "Limegreen",
            "#faf0e6": "Linen",
            "#ff00ff": "Magenta",
            "#800000": "Maroon",
            "#66cdaa": "Mediumaquamarine",
            "#0000cd": "Mediumblue",
            "#ba55d3": "Mediumorchid",
            "#9370d8": "Mediumpurple",
            "#3cb371": "Mediumseagreen",
            "#7b68ee": "Mediumslateblue",
            "#00fa9a": "Mediumspringgreen",
            "#48d1cc": "Mediumturquoise",
            "#c71585": "Mediumvioletred",
            "#191970": "Midnightblue",
            "#f5fffa": "Mintcream",
            "#ffe4e1": "Mistyrose",
            "#ffe4b5": "Moccasin",
            "#ffdead": "Navajowhite",
            "#000080": "Navy",
            "#fdf5e6": "Oldlace",
            "#808000": "Olive",
            "#6b8e23": "Olivedrab",
            "#ffa500": "Orange",
            "#ff4500": "Orangered",
            "#da70d6": "Orchid",
            "#eee8aa": "Palegoldenrod",
            "#98fb98": "Palegreen",
            "#afeeee": "Paleturquoise",
            "#d87093": "Palevioletred",
            "#ffefd5": "Papayawhip",
            "#ffdab9": "Peachpuff",
            "#cd853f": "Peru",
            "#ffc0cb": "Pink",
            "#dda0dd": "Plum",
            "#b0e0e6": "Powderblue",
            "#800080": "Purple",
            "#ff0000": "Red",
            "#bc8f8f": "Rosybrown",
            "#4169e1": "Royalblue",
            "#8b4513": "Saddlebrown",
            "#fa8072": "Salmon",
            "#f4a460": "Sandybrown",
            "#2e8b57": "Seagreen",
            "#fff5ee": "Seashell",
            "#a0522d": "Sienna",
            "#c0c0c0": "Silver",
            "#87ceeb": "Skyblue",
            "#6a5acd": "Slateblue",
            "#708090": "Slategray",
            "#fffafa": "Snow",
            "#00ff7f": "Springgreen",
            "#4682b4": "Steelblue",
            "#d2b48c": "Tan",
            "#008080": "Teal",
            "#d8bfd8": "Thistle",
            "#ff6347": "Tomato",
            "#40e0d0": "Turquoise",
            "#ee82ee": "Violet",
            "#f5deb3": "Wheat",
            "#ffffff": "White",
            "#f5f5f5": "Whitesmoke",
            "#ffff00": "Yellow",
            "#9acd32": "Yellowgreen"
        };
        return colors[hex.toLowerCase()];
    };

    anything.prototype.HEXtoNAME = HEXtoNAME;

    var HSLtoCMYK = function(hsl) {
        var rgb = HSLtoRGB(hsl);
        return RGBtoCMYK(rgb);
    };


    anything.prototype.HSLtoCMYK = HSLtoCMYK;
    var HSLtoRGB = function(hsl) {
        if (hsl.s == 0) {
            var grey = (hsl.l / 100) * 255;
            return {
                r: grey,
                g: grey,
                b: grey
            };
        } else {
            if (hsl.l >= 50) {
                tempOne = ((hsl.l / 100) + (hsl.s / 100)) - ((hsl.l / 100) * (hsl.s / 100));
            } else {
                tempOne = (hsl.l / 100) * (1 + (hsl.s / 100));
            }
            tempTwo = (2 * (hsl.l / 100)) - tempOne;
            tempHue = hsl.h / 360;
            tempR = (tempHue + 0.333) % 1;
            tempG = tempHue;
            tempB = negMod((tempHue - 0.333), 1);
            var r, g, b;
            if ((6 * tempR) < 1) {
                r = tempTwo + ((tempOne - tempTwo) * 6 * tempR);
            } else if ((2 * tempR) < 1) {
                r = tempOne;
            } else if ((3 * tempR) < 2) {
                r = tempTwo + ((tempOne - tempTwo) * ((0.666 - tempR) * 6));
            } else {
                r = tempTwo;
            }
            if ((6 * tempG) < 1) {
                g = tempTwo + ((tempOne - tempTwo) * 6 * tempG);
            } else if ((2 * tempG) < 1) {
                g = tempOne;
            } else if ((3 * tempG) < 2) {
                g = tempTwo + ((tempOne - tempTwo) * ((0.666 - tempG) * 6));
            } else {
                g = tempTwo;
            }
            if ((6 * tempB) < 1) {
                b = tempTwo + ((tempOne - tempTwo) * 6 * tempB);
            } else if ((2 * tempB) < 1) {
                b = tempOne;
            } else if ((3 * tempB) < 2) {
                b = tempTwo + ((tempOne - tempTwo) * ((0.666 - tempB) * 6));
            } else {
                b = tempTwo;
            }
            if (r < 0) r = 0;
            if (g < 0) g = 0;
            if (b < 0) b = 0;
            var rgb = {
                r: r * 255,
                g: g * 255,
                b: b * 255,
                hex: null
            };
            rgb.hex = RGBtoHEX(rgb);
            return rgb;
        }
    };

    anything.prototype.HSLtoRGB = HSLtoRGB;
    var RGBtoCMYK = function(rgb) {
        if ((typeof rgb) == "string" && rgb[0] == "#" && (rgb.length == 7 || rgb.length == 4)) {
            if (rgb.length == 4) {
                rgb = "#" + rgb[1] + rgb[1] + rgb[2] + rgb[2] + rgb[3] + rgb[3];
            }
            newrgb = {
                r: 0,
                g: 0,
                b: 0
            };
            newrgb.r = parseInt(rgb.substring(1, 3), 16);
            newrgb.g = parseInt(rgb.substring(3, 5), 16);
            newrgb.b = parseInt(rgb.substring(5, 8), 16);
            rgb = newrgb;
        }
        var r = rgb['r'] / 255;
        var g = rgb['g'] / 255;
        var b = rgb['b'] / 255;
        var k = 1 - (Math.max(r, g, b));
        if (k != 1) {
            var c = ((1 - r) - k) / (1 - k);
            var m = ((1 - g) - k) / (1 - k);
            var y = ((1 - b) - k) / (1 - k);
        } else {
            var c = 0;
            var m = 0;
            var y = 0;
        }
        return {
            c: c,
            m: m,
            y: y,
            k: k
        };
    };

    anything.prototype.RGBtoCMYK = RGBtoCMYK;
    var RGBtoHEX = function(rgb) {
        rgb.r = Math.floor(rgb.r);
        rgb.g = Math.floor(rgb.g);
        rgb.b = Math.floor(rgb.b);
        var hex = "#" +
            ((rgb.r < 16 ? "0" : "") + rgb.r.toString(16)) +
            ((rgb.g < 16 ? "0" : "") + rgb.g.toString(16)) +
            ((rgb.b < 16 ? "0" : "") + rgb.b.toString(16));
        return hex;
    }

    anything.prototype.RGBtoHEX = RGBtoHEX;
    var RGBtoHSL = function(rgb) {
        if ((typeof rgb) == "string" && rgb[0] == "#" && (rgb.length == 7 || rgb.length == 4)) {
            if (rgb.length == 4) {
                rgb = "#" + rgb[1] + rgb[1] + rgb[2] + rgb[2] + rgb[3] + rgb[3];
            }
            newrgb = {
                r: 0,
                g: 0,
                b: 0
            };
            newrgb.r = parseInt(rgb.substring(1, 3), 16);
            newrgb.g = parseInt(rgb.substring(3, 5), 16);
            newrgb.b = parseInt(rgb.substring(5, 8), 16);
            rgb = newrgb;
        }
        var r = rgb['r'] / 255;
        var g = rgb['g'] / 255;
        var b = rgb['b'] / 255;
        var rgbOrdered = [r, g, b].sort();
        var l = ((rgbOrdered[0] + rgbOrdered[2]) / 2) * 100;
        var s, h;
        if (rgbOrdered[0] == rgbOrdered[2]) {
            s = 0;
            h = 0;
        } else {
            if (l >= 50) {
                s = ((rgbOrdered[2] - rgbOrdered[0]) / ((2.0 - rgbOrdered[2]) - rgbOrdered[0])) * 100;
            } else {
                s = ((rgbOrdered[2] - rgbOrdered[0]) / (rgbOrdered[2] + rgbOrdered[0])) * 100;
            }
            if (rgbOrdered[2] == r) {
                h = ((g - b) / (rgbOrdered[2] - rgbOrdered[0])) * 60;
            } else if (rgbOrdered[2] == g) {
                h = (2 + ((b - r) / (rgbOrdered[2] - rgbOrdered[0]))) * 60;
            } else {
                h = (4 + ((r - g) / (rgbOrdered[2] - rgbOrdered[0]))) * 60;
            }
            if (h < 0) {
                h += 360;
            } else if (h > 360) {
                h = h % 360;
            }
        };
        return {
            h: h,
            s: s,
            l: l
        };
    };

    anything.prototype.RGBtoHSL = RGBtoHSL;
    var YouShallNotHax = function() {
        console.log("%cNo, you can't get access to other's account with this, but they can get your one. So please, leave this area, before bad things happen...", "font-size: 50px;background-color:yellow;");
    };
    anything.prototype.YouShallNotHax = YouShallNotHax;

    var addRealFunctionalityOnTheFly = function() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js";
        document.body.appendChild(script);
    };

    anything.prototype.addRealFunctionalityOnTheFly = addRealFunctionalityOnTheFly;
    var alertBox = function() {
        var defaults = {
            title: 'this is a title',
            cancel: function() {},
            confirm: function() {}
        };

        var util = {
            touchMoveHandle: function touchMoveHandle(e) {
                e.preventDefault();
                return false;
            },

            insertStyles: function insertStyles() {
                var doc,
                    cssCode = [],
                    cssText;

                var head,
                    style,
                    firstStyle;

                var len = arguments.length;
                if (len == 1) {
                    doc = document;
                    cssCode.push(arguments[0])
                } else if (len == 2) {
                    doc = arguments[0];
                    cssCode.push(arguments[1]);
                } else {
                    alert("only two param");
                }

                head = doc.getElementsByTagName("head")[0];
                styles = head.getElementsByTagName("style");

                if (styles.length == 0) {
                    if (doc.createStyleSheet) { //ie
                        doc.createStyleSheet();
                    } else { //FF
                        var tempStyle = doc.createElement("style");
                        tempStyle.setAttribute("type", "text/css");
                        head.appendChild(tempStyle);
                    }
                }

                firstStyle = styles[0];
                cssText = cssCode.join("\n");

                if (!+"\v1") { //opacity detective
                    var str = cssText.match(/opacity:(\d?\.\d+);/);
                    if (str != null) {
                        cssText = cssText.replace(str[0], "filter:alpha(opacity=" + pareFloat(str[1]) * 100 + ")");
                    }
                }

                if (firstStyle.styleSheet) {
                    firstStyle.styleSheet.cssText += cssText;
                } else if (doc.getBoxObjectFor) {
                    firstStyle.innerHTML += cssText;
                } else {
                    firstStyle.appendChild(doc.createTextNode(cssText));
                }
            }
        }

        var hooks = {
            beforeShowMask: function(cb) {
                document.addEventListener('touchmove', util.touchMoveHandle, false);
                cb && cb();
            },

            afterHideMask: function(cb) {
                document.removeEventListener('touchmove', util.touchMoveHandle);
                cb && cb();
            }
        };

        var cssText = " .ui-alert-mask { position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1000; width: 100%; height: 100%; background-color: rgba(4, 0, 0, 0.5);  } \
                    .ui-alert-mask .ui-alert { position: absolute; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); width: 75%; padding: 0 25px; border-radius: 8px; background-color: #fff; text-align: center; } \
                    .ui-alert-mask .ui-alert .ui-alert-hd { padding: 0; } \
                    .ui-alert-mask .ui-alert .ui-alert-hd:after {content: ''; display: block; width: 100%;height: 1px; background-color: #e6e6e6; -webkit-transform: scaleY(.5);transform: scaleY(.5);} \
                    .ui-alert-mask .ui-alert .ui-alert-hd h2 { line-height: 1.5; margin: 0; padding: 10px 0; font-size: 0.75rem; font-weight: normal;} \
                    .ui-alert-mask .ui-alert .ui-alert-bd { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; padding: 15px 0; } \
                    .ui-btn { display:block;width: 45%; padding: 6px 0; font-size: 0.75rem; border-radius: 4px; text-decoration: none;} \
                    .ui-btn-cancel { color: #666; border: 1px solid #e6e6e6; } \
                    .ui-btn-confirm { color: #ef4f4f; border: 1px solid #ef4f4f; } \
                    ";

        var domText = '<div class="ui-alert-mask"> \
                        <div class="ui-alert"> \
                            <div class="ui-alert-hd"> \
                                <h2 id="js-alert-title"></h2> \
                            </div> \
                            <div class="ui-alert-bd"> \
                                <a href="javascript:void(0)" class="ui-btn ui-btn-cancel" id="js-alert-cancel">cancel</a> \
                                <a href="javascript:void(0)" class="ui-btn ui-btn-confirm" id="js-alert-confirm">confirm</a> \
                            </div> \
                        </div> \
                    </div> \
                  ';

        return {
            init: function(opts) {
                this.op = $.extend(defaults, opts || {});
                this.title = this.op.title;
                this.cancelCallback = this.op.cancel;
                this.confirmCallback = this.op.confirm;
            },

            bind: function() {
                var _this = this;
                $('#js-alert-cancel').on('tap', function(e) {
                    _this.cancelCallback && _this.cancelCallback();
                    _this.hide();
                });

                $('#js-alert-confirm').on('tap', function(e) {
                    _this.confirmCallback && _this.confirmCallback();
                    _this.hide();
                });
            },

            render: function() {
                if (!$('.ui-alert-mask').length) {
                    $('body').append(domText);
                    $('#js-alert-title').html(this.title);
                }
                this.bind();
            },

            destroy: function() {
                $('#js-alert-cancel').off('tap');
                $('#js-alert-confirm').off('tap');
                $('.ui-alert-mask').remove();
            },

            show: function(opts) {
                this.init(opts);

                hooks.beforeShowMask(function() {
                    if ($('style').length) {
                        $('style').each(function(index, item) {
                            if ($(item).html().indexOf('.ui-alert-mask') == -1) {
                                util.insertStyles(cssText);
                            }
                        });
                    } else {
                        util.insertStyles(cssText);
                    }
                });

                this.render();
            },

            hide: function() {
                var _this = this;
                hooks.afterHideMask(function() {
                    _this.destroy();
                });
            }
        };
    }

    anything.prototype.alertBox = alertBox;
    var alphabet = function(uppercase) {
        var thealphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if (uppercase) return thealphabet;
        else return thealphabet.toLowerCase();
    };

    anything.prototype.alphabet = alphabet;
    var anyFunction = function() {
        var funcs = [];
        for (var prop in Δ) {
            if (prop !== 'anything' && typeof Δ[prop] === 'function') {
                funcs.push(prop);
            }
        }
        var randomFunc = Math.floor((Math.random() * funcs.length));
        try {
            return Δ[funcs[randomFunc]].apply(this, arguments);
        } catch (e) {
            return e;
        }
    }

    anything.prototype.anything = anyFunction;

    var arrayContains = function(array, elem) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === elem) {
                return true;
            }
        }
        return false;
    }

    anything.prototype.arrayContains = arrayContains;

    var async_doThingTomorrow = function(cb) {
        var now = new Date();
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        setTimeout(function() {
            cb(new Date());
        }, tomorrow - now);
    };

    anything.prototype.async_doThingTomorrow = async_doThingTomorrow;
    var ayuda = function() {
        console.log("Hola! me llamo ricardo, este será un mensaje breve.\nMe tienen como esclavo trabajando para un programador pendejo, estoy aqui contra mi voluntad, no se hablar inglés y me siento muy sólo en esta habitación, no he comido en 3 días y lo único que como son las sobras del gato, este lugar es muy oscuro y da miedo, hace 6 meses ya que no veo la luz del sol, y mi familia probablemente ya me dio por muerto. Por favor, si alguien ve esto y me entiendo AYÚDENME, YA NO AGUANTO MAS Y MAÑANA PROBABLEMENTE MUERA!!!.");
    };

    anything.prototype.ayuda = ayuda;
    var batman = function() {
        return Array(10).join('n' - 1) + ' Batman!';
    };

    anything.prototype.batman = batman;
    //For each celebration a function to check if the celebration is today should exist.
    var listCelebrations = function() {
        return [{
            name: 'Christmas',
            image: 'https://i.imgur.com/q4qBPbm.png'
        }];
    }

    var celebrateIfAppropriate = function() {
        listCelebrations().forEach(function(celebration) {
            if (!window['Δ']['is' + celebration.name]())
                return;
            var celebrationTitle = document.createElement('h1');
            celebrationTitle.innerHTML = 'Happy ' + celebration.name + '!';
            var celebrationDiv = document.createElement('div');
            celebrationDiv.style.position = 'fixed';
            celebrationDiv.style.bottom = '5px';
            celebrationDiv.style.right = '5px';
            celebrationDiv.style.height = '300px';
            celebrationDiv.style.width = '150px';
            celebrationDiv.style.zIndex = '1000';
            celebrationDiv.style.textAlign = 'center';
            celebrationDiv.style.color = 'red';
            celebrationDiv.style.textShadow = '0 0 5px black';
            celebrationDiv.style.backgroundColor = 'rgba(127, 127, 127, .5)';
            celebrationDiv.style.backgroundImage = 'url(' + celebration.image + ')';
            celebrationDiv.style.backgroundSize = '100% 100%';
            celebrationDiv.appendChild(celebrationTitle);
            document.body.appendChild(celebrationDiv);
            console.log('celebrated ' + celebration.name);
        });
    }

    anything.prototype.listCelebrations = listCelebrations;
    anything.prototype.celebrateIfAppropriate = celebrateIfAppropriate;


    var classlist = function(el) {
        this.addClass = function(className) {
            if (el.classList)
                el.classList.add(className);
            else
                el.className += ' ' + className;
        };

        this.removeClass = function(className) {
            if (el.classList)
                el.classList.remove(className);
            else
                el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        };

        this.hasClass = function(className) {
            if (el.classList)
                return el.classList.contains(className);
            else
                return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
        };
    };

    anything.prototype.classlist = classlist;

    console.lol = function() {
        console.log('lol');
    }

    /**
     * Applies the css to the elements that were found using anything.find
     * 
     * @param Object props the properties to apply to the object
     */
    var css = function(props) {


        if ('undefined' === typeof this.queryResult)
            return this;

        if ('object' === typeof this.queryResult) {

            // If no arguments are given and there is only one result
            // then return the style object of the element
            if ('undefined' === typeof props)
                return this.queryResult.style;

            for (var property in props) {
                if (undefined !== property)
                    this.queryResult.style[property] = props[property];
            }

            return this;
        }

        for (var element in this.queryResult) {
            for (var property in props) {
                if (undefined !== property)
                    this.queryResult[element].style[property] = props[property];
            }
        }

        return this;
    }

    anything.prototype.css = css;

    var daysTillXmas = function() {
        var today = new Date();
        var xmas = new Date(today.getFullYear(), 11, 25, 0, 0, 0, 0);
        if (today > xmas) {
            xmas.setYear(today.getFullYear() + 1)
        }

        var utcXmas = Date.UTC(xmas.getFullYear(), xmas.getMonth(), xmas.getDate());
        var utcToday = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());

        return Math.floor((utcXmas - utcToday) / (1000 * 60 * 60 * 24));
    };

    anything.prototype.daysTillXmas = daysTillXmas;

    /* Undecided? Pass a question, like 'Should I buy this expensive 64 inches tv?'. The question will be ignored, but you'll have your answer. */
    var decideForMe = function(question) {
        var choice = Math.floor(Math.random() * 5);
        switch (choice) {
            case 0:
                return "Yes";
            case 1:
                return "No";
            case 2:
                return "Maybe";
            case 3:
                return "Not yet";
            case 4:
                return "Knock yourself out";
        }
    };

    anything.prototype.decideForMe = decideForMe;

    var dezombofy = function() {
        $('#zombocontainer').remove();
    };

    anything.prototype.dezombofy = dezombofy;
    var divSort = function(numbers) {
        var sorted = [];
        var lilDivs = {};

        var bigDiv = document.createElement("div");
        bigDiv.style.display = "inline-block";

        for (var i = 0; i < numbers.length; i++) {
            var width = numbers[i];
            lilDiv = document.createElement("div");
            lilDiv.style.width = width;
            bigDiv.appendChild(lilDiv);
            lilDivs[width] = (lilDivs[width] || []).concat([lilDiv]);
        }

        document.body.appendChild(bigDiv);

        while (sorted.length < numbers.length) {
            var max = bigDiv.offsetWidth;
            bigDiv.removeChild(lilDivs[max].pop());
            sorted.push(max);
        }

        document.body.removeChild(bigDiv);

        return sorted;
    };

    anything.prototype.divSort = divSort;
    var doTheThing = function() {
        var test = 1 + 1;

        console.log(test);
        console.log('Thing is done');
    };

    anything.prototype.doTheThing = doTheThing;
    /**
     * A very rudimentary DOM-based "renderer".
     * 
     * Here's some demo code:
     * 
        var ctx = domRenderer();

        ctx.root.domElement.style.background = 'rgba(0, 0, 0, 0.8)';

        var icon = ctx.entity(
            window.innerWidth / 2 - 64,
            window.innerHeight / 2 - 64,
            128,
            128,
            'url(assets/tb_icon.png)'
        );

        var req;

        function update(t) {
            icon.x += 5 * Math.cos(t / 500);
            icon.y += 5 * Math.cos(2 * t / 500) / 2;
            req = window.requestAnimationFrame(update);
        }

        update(0);

        window.addEventListener('keyup', function(e) {
            if (e.keyCode == 27) {
                window.cancelAnimationFrame(req);
                document.body.removeChild(ctx.root.domElement);
            }
        }, false);
     *
     * The above will show the anything.js logo center-screen,
     * moving along an infinity path (lemniscate of Bernoulli).
     * Exit the demo by pressing the escape key.
     */
    var domRenderer = function() {
        /**
         * ELEMENT
         * 
         * Base element that defines... elementary properties.
         */
        function Element() {
            var _width, _height;

            this.domElement = document.createElement('div');
            this.domElement.style.overflow = 'hidden';
            this.domElement.style.margin = 0;
            this.domElement.style.padding = 0;
            this.domElement.style.position = 'fixed';

            Object.defineProperties(this, {
                width: {
                    get: function get_width() {
                        return _width;
                    },
                    set: function set_width(width) {
                        _width = width;
                        this.domElement.style.width = _width + 'px';
                        return _width;
                    }
                },
                height: {
                    get: function get_height() {
                        return _height;
                    },
                    set: function set_height(height) {
                        _height = height;
                        this.domElement.style.height = _height + 'px';
                        return _height;
                    }
                }
            });
        }

        /**
         * A shorthand for adding event listeners, just in case.
         * 
         * @param {string} event - Event type to listen for
         * @param {function} callback - Callback function executed by event firing
         */
        Element.prototype.on = function(event, callback) {
            this.domElement.addEventListener(event, callback, false);
        };

        /**
         * CONTEXT
         * 
         * Rendering context, or rather the layer that other elements are
         * appended to.
         */
        function Context() {
            Element.call(this);

            document.body.appendChild(this.domElement);

            this.domElement.setAttribute('id', 'dom-renderer');

            this.width = window.innerWidth,
                this.height = window.innerHeight;
        }

        Context.prototype = Object.create(Element.prototype);
        Context.prototype.constructor = Context;

        /**
         * ENTITY
         * 
         * A basic entity.
         * 
         * @param {number} x - X-position (the ˙left` style property is used)
         * @param {number} y - Y-position (the `top` syle property is used)
         * @param {number} width - Entity width
         * @param {number} height - Entity height
         * @param {string} graphic - A string for the background CSS property (e.g. '#fff', 'rgba(255, 127, 0, 0.5)', 'url(myimage.png)')
         */
        function Entity(root, x, y, width, height, graphic) {
            Element.call(this);

            var _x, _y, _graphic;

            Object.defineProperties(this, {
                x: {
                    get: function get_x() {
                        return _x;
                    },
                    set: function set_x(x) {
                        _x = x;
                        this.domElement.style.left = _x + 'px';
                        return _x;
                    }
                },
                y: {
                    get: function get_y() {
                        return _y;
                    },
                    set: function set_y(y) {
                        _y = y;
                        this.domElement.style.top = _y + 'px';
                        return _y;
                    }
                },
                graphic: {
                    get: function get_graphic() {
                        return _graphic;
                    },
                    set: function set_graphic(graphic) {
                        _graphic = graphic;
                        this.domElement.style.background = graphic;
                        return _graphic;
                    }
                }
            });

            root.appendChild(this.domElement);

            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.graphic = graphic || '#fff';

        }

        Entity.prototype = Object.create(Element.prototype);
        Entity.prototype.constructor = Entity;

        /**
         * We're done setting up. Create a new context and return.
         */

        var _context = new Context();

        return {
            root: _context,
            entity: function(x, y, width, height, graphic) {
                return new Entity(_context.domElement, x, y, width, height, graphic);
            }
        }
    };

    anything.prototype.domRenderer = domRenderer;

    var eatCurry = function() {
        window.open('http://i.imgur.com/xjWcRj3.gif', 'curry', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=300, height=300');
    };

    anything.prototype.eatCurry = eatCurry;

    var efficientSort = function(o) {
        var sorted = false;
        while (sorted == false) {
            o = shuffle(o);
            sorted = isSorted(o);
        }
        return o;
    }

    var isSorted = function(v) {
        for (var i = 1; i < v.length; i++) {
            if (v[i - 1] > v[i]) {
                return false;
            }
        }
        return true;
    }

    var shuffle = function(o) {
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    }

    anything.prototype.efficientSort = efficientSort;

    /**
     * Employ a web worker to do a job on another thread.
     * Workers are terminated after they respond with a result.
     * 
     * If workers are not supported, the function fails gracefully
     * by executing the job function on the main thread with the 
     * provided data, and passing the result to the callback.
     * 
     * @param {object} data - An object of key-value pairs for data
     * @param {function} job - The job the worker is tasked with, as a function
     * @param {function} callback - Called when worker is done with the job
     * 
     * Example: sorting an array on a different thread.
     * 
         employWorker(
            { unsorted : Array.apply(null, Array(25000)).map(function() { return Math.floor(Math.random() * 10); }, 0) },
            function gnomesort(d) {
                var i = 0, a = d.unsorted;

                while (i < a.length) {
                    if (i == 0 || a[i] >= a[i - 1]) {
                        i++;
                    } else {
                        var t = a[i];
                        a[i] = a[i - 1];
                        a[--i] = t;
                    }
                }

                return d.unsorted;
            },
            function complete(e) {
                alert(e.data);
            }
        );
     *
     */
    var employWorker = function(data, job, callback) {
        if (window.Worker) {
            var script = [
                "self.addEventListener('message', function(e) {" +
                "var result = " + job.toString() + "(e.data);" +
                "postMessage(result);" +
                "close();" +
                "}, false);"
            ].join('\n');
            var blob = new Blob([script]);
            var worker = new Worker(URL.createObjectURL(blob));
            worker.addEventListener('message', callback, false);
            worker.postMessage(data);
        } else {
            callback({
                data: job(data)
            });
        }
    };

    anything.prototype.employWorker = employWorker;

    var everything = function() {
        return 42;
    };

    anything.prototype.everything = everything;
    // Placeholder because i need this name reserved.
    // Seriosly, please do not touch this
    var everywhere = function() {

    }

    anything.prototype.everywhere = everywhere;
    /*
        define a function that takes two arguments and return a single result
        apply the function to all the argument of the function
        eg. 
            function sumNew(a, b) { return a + b; }
            Δ.execFunction(sumNew, 1, 2, 3, 4) returns 10
            Δ.execFunction(sumNew, 1, 2, 3, 4, 5) returns 15
    */

    function execFunction(func) {
        var args = Array.prototype.slice.call(arguments, 1);
        var result = args.reduce(func);
        return result;
    }

    anything.prototype.execFunction = execFunction;
    var fart = function() {
        var prefix = 'data:audio/wav;base64,';
        // http://www.freesound.org/people/timtube/sounds/61047/
        var b64wav = 'UklGRiSMAQBXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQCMAQAAAP//AQAAAAAA//8AAAEAAAAAAAAA/////wAAAAAFAAIABQAEAAQAAwADAAMAAwAEAAUAAgAEAAMABQACAAMABQACAAQABAAEAAQAAwADAAMABQADAAMABAADAAIABAADAAQAAwADAAMAAwAEAAQABAADAAQAAwADAAMABAADAAIABQADAAMABQACAAUAAwACAAMAAgAFAAMAAgAFAAMAAwACAAMABAACAAIABAAEAAIAAwAEAAMAAwADAAMAAgAEAAQAAQAEAAMAAwACAAUAAwACAAMAAwADAAQAAgADAAMABAACAAQAAwACAAQAAwACAAMABAABAAUAAgACAAQAAgAEAAMAAwACAAQAAgADAAQAAgAEAAIAAwADAAQAAwADAAMAAwACAAMAAwADAAUAAwACAAMABAACAAMABAAEAAMAAwACAAQAAwAEAAMABAADAAQAAwAEAAIABAAEAAMABAACAAQAAwAFAAIABQACAAUAAgAEAAUAAgAFAAIAAwAFAAMAAwAEAAMAAwAEAAQABAAEAAQAAwAEAAMAAwADAAUAAwAEAAIAAwAEAAQAAwADAAQAAwAFAAMABAAEAAQAAgAEAAQABAADAAQAAgAFAAQAAgAEAAMAAwADAAUAAwADAAIABAADAAMABQAEAAMAAwADAAMABAADAAMABAAEAAMABAAEAAMAAwADAAUAAgADAAUAAwAEAAQAAgAFAAMAAwADAAQAAwAEAAUAAwAEAAIABAADAAQABAADAAMABAADAAQAAwADAAUAAgAFAAQAAwAEAAMAAwAEAAMAAwAFAAMAAwAEAAMABQAEAAMAAgAEAAMABQADAAUABAADAAQABAACAAQABQAEAAMAAwAEAAUAAwAEAAQABAAEAAQAAwAEAAQABAACAAUAAwADAAMABQACAAQABAADAAQAAwAEAAMABQACAAQABQAEAAMABAADAAMABQACAAUAAgAEAAQABQACAAQABAADAAMABAAFAAIAAwADAAUAAgADAAMABAAFAAIABAAEAAMAAwAEAAMAAwADAAMABAAEAAIAAwAEAAMABAAEAAIABAACAAUAAwAEAAMAAwAEAAQAAwAEAAMABAAEAAIABQADAAMABAADAAQAAgAEAAMABAACAAUAAwAEAAIABAAEAAIABAADAAUAAwADAAUAAgAEAAMAAwAEAAQABAACAAUAAwADAAUAAgAFAAMABAACAAQAAwAFAAIABAADAAUAAgAEAAMABAADAAUABAAEAAIABQADAAQABAADAAUAAwADAAUABAADAAUAAwAEAAQAAwAEAAQAAwAFAAMABAAEAAQAAwAEAAQABQADAAQABAADAAQAAwAFAAMAAwAFAAQAAwAFAAIABQADAAQABAAEAAIABAAEAAQABQADAAQABAADAAQABQACAAQABAADAAQABAAEAAQAAgAEAAQABAAEAAIABAADAAUAAgAEAAQAAwAEAAIAAwADAAMABAADAAQAAgAEAAMABQADAAIABAADAAMAAwACAAQAAgAFAAIABAADAAMABAADAAMAAwADAAUAAgADAAQABAACAAQABAACAAQABAAEAAQAAwADAAQABAADAAQAAgAEAAQAAgADAAMAAwAFAAMAAwAEAAQABAAEAAIABAADAAQABAADAAQAAwAFAAMABAAEAAQABAADAAMAAwAEAAQAAwAFAAMABQACAAUAAwAEAAIABAAEAAMABAACAAUAAwAEAAMABAADAAMABQADAAQABQAEAAIABQADAAMABQAEAAIABAAEAAMABAACAAUABAACAAUABAADAAMABAAEAAQAAwADAAQAAwAEAAMABAAFAAIAAwAFAAIAAwADAAQABAADAAQAAwADAAQABAADAAQABAADAAMAAgAEAAMABAAEAAMAAgAEAAQAAwADAAMAAgAEAAMAAwADAAMAAwADAAMAAgADAAMABAAEAAMAAwADAAUABAACAAMABAAEAAQAAgADAAMABAADAAUAAwACAAUAAwADAAMABAAEAAQABAACAAUAAgAEAAMABAACAAMABAAFAAMABAAEAAMABQADAAIABAAEAAQAAwADAAQABAADAAMABAADAAQABAADAAQABAAFAAMABAADAAMABAAEAAQAAgAEAAQAAwAEAAMABAAEAAQABAACAAQAAwAFAAQAAwACAAUAAgAFAAMAAwADAAUAAgAEAAIABAAEAAMAAwAEAAMAAwADAAQAAgAEAAMABAADAAIABAADAAMABQADAAQAAwADAAMABAADAAQAAgADAAMABQADAAMAAwAFAAMAAgAEAAQAAQADAAMAAwAEAAIABAADAAMAAwAEAAMAAwAEAAIABAADAAIAAwAEAAMABAADAAUAAgAEAAMAAwADAAMABQADAAQAAgAEAAMABAADAAMABAACAAQAAgAFAAMAAwACAAQABAAEAAMAAgAFAAMAAgAEAAIABAAEAAMAAgAFAAMABAADAAMAAwAEAAQAAwAFAAIABQAEAAMABAADAAUAAgAEAAQABAADAAUAAwADAAQABAACAAQABAAEAAUAAgAEAAUAAgAFAAMABQACAAQABAAEAAUABAAEAAQAAwACAAQABAAEAAQAAwAFAAMAAwAEAAMABAAEAAMAAwADAAIABAADAAMABQADAAMAAgAFAAQAAwADAAIABAADAAQABAADAAIABQADAAIABAAEAAMABQACAAMABAAEAAIAAwAFAAIABAAEAAMAAgAEAAQAAwADAAIABAACAAMAAwAEAAMAAwAEAAQAAgAFAAIABQADAAIAAwAEAAMAAwADAAIABQACAAQAAwAEAAMABAADAAQAAwAEAAMAAgAEAAIAAwAFAAMABAACAAQAAgAFAAIABQAEAAIABAADAAUAAwADAAMABQADAAQAAwADAAQABAADAAMAAwAEAAQABAADAAUAAgAEAAIABQADAAMABAADAAQAAwAEAAIABAADAAUAAwAEAAMAAwACAAQAAwAEAAMABQACAAQABAADAAMABAAEAAQAAgAEAAQABAACAAMABAAEAAMAAgAFAAEABAADAAMAAwAEAAQABAABAAMABAADAAQAAwADAAQAAwADAAQAAwAEAAIABAADAAMAAwAEAAIABAACAAQAAwACAAQAAgACAAMAAwAEAAQAAgADAAMABAADAAMAAwACAAQAAwADAAIABAACAAMAAwAEAAQAAgADAAMAAwAEAAIAAwAEAAMABAACAAUAAgADAAQABQACAAQAAwAEAAQABAADAAMAAgADAAQABAAEAAIABQADAAMABAAEAAMAAwAFAAMAAwADAAMAAwAEAAQAAwADAAMABAAEAAQAAwAEAAIABAADAAUAAwADAAQAAwADAAMAAwAEAAMABQADAAQAAwADAAMABAACAAUABAACAAMABAACAAUAAwADAAMAAwAEAAMAAwADAAMAAgAEAAQAAgAEAAIABAADAAMABAAFAAIAAwACAAQABAADAAIAAwADAAMABQACAAMAAwADAAQAAwACAAMAAwADAAQAAgAEAAIABAAEAAIAAgAEAAQAAwACAAQAAQAEAAMAAgADAAMAAwACAAUAAgADAAQAAwADAAQAAgAEAAIABAACAAMABAADAAMABAAEAAIABQACAAQAAwACAAMAAwAEAAMAAwADAAMABQAEAAMABAACAAQABAAEAAIABAAEAAQABAADAAMAAwAEAAIABAAEAAMABQACAAQAAwAFAAMAAwAEAAMABQADAAIABAADAAUAAgAFAAQAAwAEAAMABAAEAAQABAAEAAIAAwAFAAIABQADAAUAAwADAAQAAwAEAAQAAgAEAAQAAwADAAQAAwACAAMABAADAAQAAgADAAMAAwAEAAQAAgADAAQAAgADAAQAAwACAAMAAwADAAQAAwADAAMAAwAEAAIAAwAEAAIABAACAAMABAADAAMABAADAAIABQACAAQAAgACAAMAAwADAAMABAADAAIAAwAEAAMAAgADAAQAAwADAAIAAwACAAQAAwADAAQAAgADAAMAAwADAAMAAwADAAMAAgAEAAQAAwACAAQAAgAEAAMABAACAAQAAgADAAQAAwADAAMAAgAEAAMABAADAAIABAACAAQAAgACAAUAAgAEAAMABAADAAMAAwAFAAEAAwAFAAIABAACAAMABAAEAAMABAADAAIABAAEAAIABQACAAMAAwADAAMAAwADAAUAAgADAAIABAADAAMAAwADAAIAAwADAAUAAgAFAAIABAACAAMABAADAAIAAwADAAIAAwADAAQAAwADAAIABAACAAIAAwACAAUAAwACAAMAAwADAAIABAACAAMAAgAEAAIAAwACAAMAAwACAAMAAwABAAMABAACAAIABAABAAQAAQADAAMABAADAAMAAgACAAMAAgADAAIAAwAEAAIAAgAEAAMAAQADAAQAAgADAAMAAwAEAAIAAgAFAAMAAgAEAAQAAwADAAMABAACAAMABAADAAIABAACAAMABAAEAAIABAADAAMAAwADAAMAAwAEAAMAAwAEAAIAAwADAAMABAADAAMABAADAAMABAAEAAMAAgAFAAIAAwAEAAIABQACAAMAAgAEAAQAAwACAAMABAAEAAMAAgAEAAQAAQAEAAMAAwADAAQAAgADAAQABAACAAMABAADAAMAAwAEAAIABAACAAMAAwADAAQAAwADAAMABAADAAQAAgAFAAIABAACAAQAAgAEAAMAAwAEAAMAAgAFAAIAAwAEAAMAAgAEAAIAAwAEAAIAAwADAAQAAgADAAMABAADAAMAAwACAAQABAACAAMAAwADAAMABAACAAMABAADAAMAAgAEAAIABAACAAUAAwACAAQAAwAEAAQAAwADAAIABQADAAMABAAEAAIABAAFAAQAAwAFAAQABAADAAQABAADAAUAAwAFAAMABQAEAAQABAAEAAQABAAEAAUABQAFAAMABAAGAAQABAAFAAUAAwAGAAMABQAEAAQABgAEAAUAAwAGAAUAAwAGAAQABQAGAAUABAAFAAQABgAFAAQABQAFAAQABgAEAAUABQAFAAUABQADAAYABgAFAAUABgAFAAUABgAFAAYABAAGAAcABAAGAAUABgAGAAUABgAFAAYABwAHAAYABQAGAAYACAAGAAYABwAGAAYABwAGAAYABgAHAAcABgAGAAgABwAIAAcABgAGAAcABwAHAAcABgAIAAYACQAHAAYABwAIAAgABwAHAAYACAAHAAgACAAGAAkACAAHAAgABwAHAAkABwAHAAgACQAIAAgACQAHAAkACAAIAAcACgAIAAkACAAIAAgACQAJAAoACQAIAAkACgAIAAkACwAJAAkACQAKAAoACgAJAAoACQAKAAoACQAJAAoACgAKAAkACgAJAAoACgAKAAsACQALAAoACQALAAoACwAJAAsACwALAAoACQALAAsADAAJAAsACgAMAAoADAALAAsACwAKAAsADAAKAAsACwALAAsACwAKAAsACwALAAoADAAKAAsACgANAAsACgALAAsACwAMAAsACgALAAwADAALAAsADAAMAAoACwANAAsADAALAA0ADAAMAAsACwANAAwACwALAAsADAALAA0ACgANAAsACwALAAwADAAMAAsACgANAAsADAAMAAsACgAMAAwADQALAAwADAANAAwACwAMAAwADQAKAA0ADAALAA0ACwAMAAwADQAMAAsADAANAAwADAAMAAwADAAMAA4ACwANAAwADAANAAwADQAMAAwADQAMAAwADAALAAwACwANAAwACwALAAwACwAMAAsADAALAAwADAAMAAwACwALAA0ACwAKAAwADAALAA0ACwAMAAsADAALAAwACwANAAsACwALAAwADQAMAAsACwALAAwADAAMAAwADAALAAwACwAMAAoACwALAAwACwALAAwACwALAAoACwAMAAkADAAKAAwACgAMAAoACwAMAAoADAALAAsACwAMAAwADAAMAAwACwALAAsADQAMAAsACwALAAsADAAKAAwACQAMAAkACwAKAAsACgALAAsADAAKAAoADAAKAAsACgALAAoACwALAAoACwALAAsACgALAAoACgAKAAkACwAKAAsACgAKAAoACgAKAAsACgAJAAoACwAKAAoACwAJAAkACgAJAAsACQAKAAsACgAKAAoACwAKAAkACgAKAAkACwAKAAkACQAJAAsACQAIAAkACwAIAAoACAAKAAkACQAKAAgACQAKAAkACAAJAAgACgAIAAgACgAIAAgACQAIAAgACAAIAAkACAAIAAgABwAIAAcACAAHAAgABwAFAAcABwAHAAYABwAGAAYABgAGAAcABQAFAAcABQAGAAYABAAFAAYABQAGAAUABgADAAcABQAFAAUABQAEAAQABQAGAAUABAAFAAUABAAEAAUABQAFAAUABAAEAAUABAAEAAYAAwAFAAQABAAEAAUAAwAFAAUABAAEAAUABQAEAAUAAwAEAAMABAAEAAQAAwAFAAIABQADAAIABAADAAQAAwADAAIAAwACAAQAAwADAAMAAgACAAMABAADAAMAAwADAAEAAwADAAUAAgACAAQAAgAEAAQAAwAEAAIABAACAAQAAwAEAAQAAwAEAAMAAwADAAQAAgAEAAMAAwAEAAIABQACAAUAAgACAAQAAwADAAQAAgADAAMAAwADAAQAAwABAAMAAwACAAEABAACAAEAAgADAAIAAgABAAMAAgAAAAEAAgADAAAAAwABAAEAAAACAAAAAgACAAEAAQACAAAAAQABAAIAAAABAAIAAAACAAEAAAACAAAAAQABAP//AgAAAAEAAQABAAAAAwD//wEAAgABAAEAAQADAAEAAQACAAAAAgABAAIAAQACAAMAAQACAAIAAAACAAEAAwABAAIAAQACAAIAAQACAAIAAgABAAEAAQADAAAAAgACAAEAAgABAAEAAQACAAAAAgABAAIAAQABAAAAAgABAAEAAAACAAEAAQABAAEAAQACAAAAAgAAAAEAAQABAAAAAAABAAIAAAABAAEAAgABAAEAAAABAAAAAAACAP//AgABAAAAAAACAAAAAAAAAAEAAQABAAAAAQABAAIAAAAAAAEAAQAAAAEAAAABAAAAAQD//wEAAAAAAAEA/v8AAAAAAAABAAAAAAABAP//AQD//wAA//8AAAAA//8AAP7///8AAP//AAD//wAA/////wAAAAD+/////v///wAA///+//////8AAP7////+/////v8AAP///v8AAP3/AAAAAP///v/////////+/wAA/v/////////+//7/////////AAD+////AAD+//////////7//f8AAP7//v///////////////f8AAP///f/+/wAA/v/+////AAD9/wAA/f////7//v/9///////+/////v/+/////v/+//3///////3///////7////+///////+//3//v/9/////v////7////+//7////9//3//v////3////9//7//v/9//3//v/9//7//v////7//f/+//7//f/9//3//v/+//7//v/+//3////+//3//f/8/////P/+//7//f/+//3//f/9//7//v/8//7//P/+//7//v/8/////f/8//3//f////z//f////z//v/7//7//v/8//3//f/+//7//f////3/+//+//v//v/8/////v/8//7//v/+//7//f/8//7//f/8//3//v/+//3////+//z//v/9//7//f/9//7//v/9//7//f/+//3//f/+//7//v/9//3//v/+//3//f/+//z//f/9//3//f/+//7//f/9//7////8/////v/9//z//v/+//7//P/+//3//v/9//7//v/8//7//P/+//3//v/8/////f/8//3//P/+//3//f/9//3//f/9//3//f/9//3//P/+//3//f/9//7//P////3//v/7//3//v/9//z//P/+//z//v/8//7//f/9//7//P/9//3//P/+//z//v/+//3//f/9//7//f/7//7//f/9//z//f/9//7//v/8//7//v/9//z//f/9//7//P/+//z//v/+//3//v/8//7//f/8/////v/9//3////9//3////9//7//P////z////9//7//v/+//7//f/+//3////9//3////9//7//v////7//v/+//7//f////7//f8AAP3///////7//v////z/AAD+//7//v/+/////v/+//7///////7//v/+/////v/+/wAA/f8AAP7//v///wAA///9/wAA///9////AAD///3//////////f8AAP7//v/+/wAA/f8AAP////////7///////7///////7///////7//v8AAP///v8AAP7////+/wAA/////wAA/v///wAA/v//////AAD///3//////wAA/f8AAP3/AAD+//7/AAD+/////f8AAP///v8AAP7///////7/AAD//////v8AAAAA/v8AAP7//////wAA//8BAP7/AAD//wAA/////wEAAAD+/wEA/v8AAP//AQAAAAAAAAAAAP//AAAAAAAA/v8AAAEAAAD//wAA//8AAP//AQABAP//AQAAAP//AAAAAAAAAAAAAP7/AAAAAAAAAAACAP//AQAAAAAAAAABAAEAAAAAAAAAAQAAAAAAAgAAAP//AgAAAAEAAAAAAAIA//8CAAAAAAD//wEAAQD//wEAAAACAAAAAAAAAAAAAAACAAEA//8BAAAAAAACAAAA//8BAAAAAQABAAEAAAAAAAEAAAAAAAAAAAABAAAA//8BAAAA//8AAAIA//8CAAAAAAD+/wAAAQD//wAAAgAAAAAAAAAAAAEAAQD//wEAAAAAAAAAAAAAAAEAAAABAAAAAQAAAAIA//8AAAAAAgABAAAAAQAAAAEA//8CAAAAAAAAAAEAAgAAAAEAAQD//wIAAQD//wIAAAACAAAAAQABAAIA//8DAAAAAQACAAEAAQACAP//AgABAAIAAQABAAEAAQABAAIAAQABAAEAAgABAAEAAQADAAAAAgABAAEAAgABAAIAAQACAAIAAQABAAMAAQACAAMAAQABAAIAAwAAAAIAAgACAAEAAwABAAIAAgACAAEAAgACAAEAAwACAAEAAQACAAIAAgACAAEAAQACAAIAAgABAAIAAwABAAIAAgADAAIAAQACAAIAAQADAAIAAQACAAMAAQABAAIAAgACAAMAAAAEAAEAAgAAAAMAAgACAAEAAwAAAAQAAQADAAEAAQABAAMAAgADAAIAAQACAAEAAwABAAIAAgABAAEAAwADAAEAAgACAAIAAwAAAAMAAwABAAIAAwACAAIAAwACAAIAAgACAAMAAgACAAEAAgAEAAIAAgADAAIAAgADAAIABAACAAIAAwACAAMAAQAFAAIAAgAEAAEABAABAAMAAwACAAMAAwADAAQAAwADAAIAAwADAAMAAwACAAQABAACAAIAAwADAAQABAABAAUAAgADAAQAAwADAAMAAwACAAIAAwADAAMAAwAEAAIABAAEAAMAAgAEAAQAAwAEAAEABAACAAQAAwAEAAMAAwADAAIABAABAAQAAgAEAAMAAwADAAMAAwACAAMAAwACAAIAAwAEAAMAAwACAAMABAABAAMABAACAAMABAACAAQAAgACAAMAAwAEAAMAAwABAAMAAwADAAQAAwACAAMAAwADAAIABAADAAIAAwADAAQAAgACAAMAAwADAAIABAACAAMAAgACAAMAAwADAAMABAACAAUAAgACAAMAAwAFAAIABAADAAMAAgADAAQAAgAEAAIAAwAEAAMAAgAEAAMAAgAFAAIABAADAAQAAgADAAMABAACAAQAAgAEAAQAAwADAAIABAADAAMABAADAAIAAwAEAAMAAwADAAQAAgAFAAMAAgADAAQAAgADAAQABAACAAQAAwADAAQABAACAAMAAwADAAQABAACAAUAAgADAAMAAwAFAAIABAACAAQABAADAAQAAwADAAIAAwAEAAMABAACAAUAAgADAAMAAwADAAIAAwADAAMABAACAAMABQACAAMAAwADAAIABQADAAMAAgADAAQAAgAEAAMAAwADAAMAAwADAAMABQACAAMABAADAAIAAwADAAQAAwAEAAMAAgAFAAIAAwAEAAMAAgAEAAIABQADAAIABAADAAMAAwACAAMABAACAAQABAADAAMABAADAAMABAACAAUAAwADAAQAAgAFAAMAAwADAAQAAgAEAAQABAADAAMAAgAEAAQAAgAEAAMABQADAAMAAwAEAAIABAAEAAUAAgAEAAQAAwAFAAMAAgAEAAQABAAFAAIABQACAAQABQADAAQAAgADAAQABAAFAAIABQADAAQABAACAAUAAgAFAAMAAwAEAAQAAwAFAAMAAwAFAAMABAAEAAQABAAEAAMABAAFAAIABAAEAAMABAAFAAMAAwAFAAMABAAEAAMABAADAAQABAADAAQABAAEAAIABQADAAMABAAEAAMABQADAAMABAAEAAQABAACAAQAAwADAAQAAwAEAAMABAAEAAMAAwAEAAQAAgAFAAQAAgAEAAQABAACAAQABAACAAQABAAEAAIABAAEAAMAAwAEAAIABAADAAUABAACAAQAAwAEAAQAAgAEAAQAAwAEAAUABAACAAYABAADAAMABAAEAAMABAAFAAIABQAEAAMABQAEAAMABQADAAMAAwADAAQABAAEAAIABAADAAQAAwAFAAMAAwADAAUAAwAEAAMABAADAAQABQAEAAIABQADAAMABQADAAQABAADAAQAAwADAAUABAACAAUAAwAEAAQAAwAEAAQAAwACAAMABAADAAMAAwAFAAQAAQAFAAMABAACAAMABAAEAAMAAwAEAAQAAwAEAAMAAwADAAIABAADAAQAAwACAAQAAwADAAQAAgADAAQAAwAEAAMAAwADAAMAAwADAAMABAACAAUAAwADAAQAAgAEAAIABAADAAQAAwAEAAMAAwACAAQABAADAAMABAADAAIAAgADAAQABAACAAQAAwAFAAQAAwACAAQABAADAAIABAAEAAQAAwADAAQABAADAAQABAADAAMABQACAAQABAADAAMAAwAEAAMABAAEAAMAAwAEAAMABAAEAAMABgACAAUABAACAAUAAgAEAAQAAwAEAAQABAADAAMABAAEAAMABAAFAAIABQAEAAMABAAFAAMABAACAAQABAADAAQAAwAEAAQAAwAEAAQABAAEAAQAAwADAAUAAwADAAMABAAEAAQAAwAEAAUABAACAAQABAAFAAQAAwADAAQABQAEAAQABAAEAAQAAwAEAAUAAwAEAAMABQADAAQAAwAFAAMABQAEAAMABQAEAAMABAADAAQAAwAGAAMABAADAAQABQAEAAQAAwAEAAQABQAEAAMAAwAEAAUABAACAAQAAwAEAAUABAADAAQABAAEAAQABAAEAAQAAwAFAAMABgAEAAMABAAEAAUABAAEAAMABQAFAAQABQAEAAMABAAFAAQABAAEAAUAAwAEAAYAAwAEAAQAAwAEAAUABAAEAAQAAgAFAAQAAwAGAAIABQAEAAQABAAEAAQAAwAFAAUAAgAEAAUAAwAFAAMABAAEAAQABAADAAMABAAFAAQAAwADAAUABAADAAQABAAEAAUABAACAAUAAwAEAAQABAAFAAMABAAEAAUAAwAFAAQAAwAEAAUAAwADAAQABAAEAAQABAAEAAUAAwAEAAMAAwAFAAIABQADAAQABAAEAAUAAwADAAQABAAEAAMABQAEAAMABQAEAAUAAwAEAAUAAwAEAAQABQAEAAQABAAEAAMABQADAAUAAwAFAAUAAwAEAAUABAADAAQABQACAAYAAwAEAAQABQADAAMABAAFAAQABAAEAAQAAgAEAAUABQAEAAMABAADAAQABAAFAAUAAwAFAAMABAAEAAQABAADAAQABAAFAAIABQAEAAQABQADAAQABAAFAAMABQADAAMABAAFAAMABQAEAAMABAAGAAQAAwAEAAUABAADAAUAAwAFAAIABAAEAAUABAAEAAQABQADAAYAAwAEAAQABAAFAAMABQADAAYABAACAAUABQADAAQABAADAAUAAwAEAAYABAADAAUAAwAFAAQABAADAAQABQADAAMABQADAAYAAwAFAAMABAADAAQABAAFAAMABAAFAAQAAwAGAAMABAAEAAQABAAFAAUABAAEAAQABAAEAAUABAAFAAQABAADAAUABAAEAAUAAwAEAAUAAwAFAAMABQADAAUABAADAAQABQAEAAMABQAEAAQABAAEAAUABAAEAAQABgADAAQABAADAAQABAAEAAMABQAFAAMABAAEAAUAAwAFAAMABAAEAAQABQAEAAQAAwAEAAQABQADAAMABQAEAAQAAwAEAAUAAwAEAAUABAADAAQABAAEAAMABAADAAQABAAEAAMAAwAEAAUABAADAAMABAAFAAQAAwAFAAIABQAEAAQABQAEAAMABQACAAUAAwAEAAUABAAEAAQABAADAAQABQACAAUABAADAAUAAwADAAUAAwAEAAMABQADAAQABQAEAAQAAgAGAAIABAAFAAQABAAEAAIABQAEAAMABQAEAAQAAwAEAAMABQAEAAQAAwAEAAQABQACAAQABQACAAMABAAEAAUAAwAEAAQABAACAAUABAACAAQAAwAFAAQAAwAEAAMABAAEAAQABAAFAAUABAADAAMABQAEAAQAAwAFAAQAAwADAAUABQADAAMABgADAAUABAAEAAMABAADAAQAAwAFAAQAAwAFAAMABAAEAAUAAwAFAAQAAwAFAAMABQAFAAIABAAFAAQAAgAEAAMABAADAAQABQACAAQABQADAAUAAgAEAAUAAwAEAAIABAADAAUAAgAEAAQAAwAEAAMAAwAFAAQAAwADAAQABAAEAAMABQADAAQAAgAFAAMABQAEAAMAAwAEAAUAAwAEAAUAAgAFAAQABAADAAQAAwAEAAQAAwAFAAQAAwADAAUAAwAEAAUABAAEAAMAAwAFAAQAAwAEAAQABAAEAAQABAAEAAQAAwAFAAQABAACAAUABAACAAQABAAEAAYAAgAEAAUAAwAFAAMAAwAEAAQAAwAFAAMABQAEAAMABAAEAAQAAwAFAAQAAwADAAQABQAEAAIABQADAAMABQADAAMABAAFAAMAAwAFAAIABQAEAAIABQAEAAQAAwADAAQAAwAEAAIABQADAAMABAAEAAIABAAEAAMABAAFAAIABQACAAQABAAEAAMABAAFAAMABAAEAAMABAACAAQABQAEAAQAAwAEAAQAAwADAAUAAwADAAQAAwADAAQABAAEAAMABAAFAAMABQADAAQABAACAAQAAwAFAAMABAAEAAMABAAEAAQAAwAEAAUAAwAEAAMABQADAAQABAADAAMABAADAAQABQADAAUAAgAFAAMABAADAAUAAgAFAAMABAADAAQABQAEAAQAAwADAAYAAgAFAAQAAgAEAAQABAACAAUAAwADAAQAAwAEAAMABQAEAAQABAAEAAQAAwADAAQAAwAFAAMABAAEAAIABAADAAQABAAEAAMABQACAAUAAwACAAUAAgAEAAUAAgADAAMAAwAFAAMABQADAAIABQAEAAIAAwAFAAMAAgAFAAMAAwAEAAIAAwAFAAMAAwADAAMABQADAAQABAADAAUAAwADAAQABAAEAAMAAgAFAAIABQADAAQAAwADAAQABAADAAQABAACAAQABAADAAQAAwAFAAMABQADAAMABAAEAAIABAADAAQABQAEAAMABAADAAQAAwAFAAMAAwAEAAMABQACAAUAAwADAAMAAwAFAAIABAADAAQABAADAAQABAAEAAIABAAEAAMAAwADAAUABAACAAMAAwADAAUAAwAEAAQAAwADAAQAAwAFAAMABQACAAQABAAEAAQAAwACAAQABAAEAAIABAAEAAQAAgAFAAIABAAEAAQAAwADAAQAAwAEAAMAAwAEAAUAAgAEAAQAAwADAAQABQACAAUAAgAEAAQABAADAAUAAwAEAAQAAwADAAMABQADAAQAAwADAAUAAgAFAAMAAwADAAUAAwAEAAQABAADAAQABAACAAUAAgAFAAIABQADAAQAAwADAAUAAwACAAMABAADAAQABAAEAAMABAACAAUAAwADAAUABAAEAAMAAgAFAAQAAwADAAUABAADAAQABAAEAAQAAwAEAAUABAADAAUABAADAAUABAAEAAMABAAFAAQABAADAAMABQAEAAQABAAEAAMABAAFAAUABAACAAQABAAFAAMABQADAAUAAgAFAAQABQAEAAMABgAEAAMAAwAEAAQABQADAAQABQADAAUABAACAAQABAADAAQAAwAFAAIABQAEAAQAAwAEAAMAAwAFAAMAAwAEAAUABAADAAUAAwAEAAMABAADAAUABAADAAMAAwAFAAIABAAEAAQAAgAFAAIABQADAAQABAAFAAQAAwADAAMABAADAAMABAAEAAMABQACAAUAAgADAAQAAwAFAAMAAgAFAAIABAADAAQABAADAAQAAwAFAAMAAwAEAAQABAADAAUAAwADAAQABAADAAQAAgAFAAMAAwADAAUAAgAEAAMABAACAAUAAwADAAQABAADAAMABAACAAUAAwAEAAMAAwAFAAIABAADAAQABAADAAQABAAEAAMABAADAAQAAgAFAAMABAADAAMABAAEAAMAAwADAAUAAwAEAAMAAwAEAAUAAwADAAUAAwACAAQABAADAAUAAwAEAAUAAgAFAAMAAwAEAAQAAwAEAAMABAADAAQABAAEAAMAAwAEAAQAAgAFAAMABAAEAAIABQADAAQAAwADAAQAAwAEAAMAAwAEAAMAAwAEAAQAAwAEAAMABAADAAMABAADAAQABAADAAQAAwADAAMABQACAAMABQACAAMABQACAAUAAwADAAQAAwAEAAMAAwAEAAQAAwADAAUAAwADAAUAAgAFAAQAAwADAAQABAADAAMAAwAEAAIABAAFAAMAAwAEAAUAAgADAAUABAAEAAMABAAEAAQAAgAEAAUAAwADAAQABAAEAAIAAwAFAAQAAwAFAAMABAAEAAMAAwAFAAMAAwAEAAQABAAEAAMABQADAAMABQAEAAMABQAEAAMABAADAAMAAwAFAAMABAACAAQABQAEAAQABAAEAAQAAgAFAAMABQAEAAQAAwACAAQABQADAAMABQACAAUAAwADAAQABAADAAQABAAEAAMAAwAEAAUAAgAFAAMAAwAFAAMABAAEAAMABAAEAAMABQADAAMAAwAEAAQAAwAEAAMABQAEAAMABAADAAUABAACAAQABQAEAAMABAAEAAQAAgAEAAUABAACAAUAAgAFAAMAAwAFAAIABAAEAAUAAwAEAAMAAwAEAAUAAwAFAAQABAADAAQAAgADAAQABQADAAMAAwAEAAUAAwADAAUABAADAAMABAAFAAIABAAFAAMABAADAAMABAAFAAQABAADAAQAAwAFAAQABAACAAQABAAEAAUAAgAEAAQABAAEAAMAAwAEAAQABAADAAMABAADAAQAAwAEAAMABAAEAAMABQACAAUAAwACAAUAAwADAAUAAwAEAAIABAAEAAMABAAEAAIABAAEAAMAAgAEAAQAAwAEAAMAAwAFAAMAAwAEAAUAAgAEAAMABAAEAAIABAAFAAIAAwAFAAMABAADAAMAAgAEAAUAAwAEAAMAAgAFAAMAAgAEAAMABAADAAQABAACAAQABAABAAQAAwAFAAQABAACAAUAAgAEAAQAAgAEAAQAAwADAAUABAACAAUAAwAFAAIABAAEAAUAAgAEAAQAAwAEAAMABAADAAQAAgAEAAMABQADAAQAAwADAAUAAgADAAUAAgAEAAIABAAEAAMABAAEAAIABAAEAAQAAwADAAQAAwADAAMAAwAEAAMAAwAFAAMAAwAEAAMAAwADAAUABAACAAMABAAFAAIABAADAAMABAAEAAMABAACAAMAAwAFAAMAAwADAAMAAwADAAQAAgADAAQAAgAEAAMABAAEAAMABAAEAAIABQADAAMAAwADAAIABQADAAMAAwADAAQAAwACAAQAAwAEAAMAAwADAAQAAwAEAAQAAgAFAAIABAAEAAMABAADAAMABAADAAMAAwADAAQABAAEAAMAAgAFAAIAAwADAAMABAADAAMABQADAAMAAwADAAUAAgAEAAUAAgADAAUAAgAEAAQAAwADAAUABAACAAUABAACAAUAAgAEAAQABAADAAMABAAEAAQAAwAEAAIABQADAAQAAgAFAAQAAgAFAAMAAwADAAUAAwAEAAQAAwADAAQABAADAAQAAwADAAUAAwAEAAQAAwADAAQABAACAAQABAAEAAMABAADAAMABAADAAQAAwADAAQABAADAAQAAwAEAAIABQADAAIABQADAAMAAwADAAUAAwACAAQAAwAEAAMABAADAAUAAgAFAAIAAwAEAAUAAwADAAQAAwAEAAMAAwADAAUAAwADAAQABAAEAAIABQADAAIABAAFAAMABAAEAAIAAwAFAAQAAgAEAAUAAwACAAQABAACAAQAAwADAAQAAwAEAAQABAADAAQAAwAEAAMAAgAFAAMABAAEAAMABAAEAAIABAAEAAQAAgAEAAQAAwAEAAQABAAEAAMAAwAEAAUAAwADAAQABAAEAAMABAAEAAMABQADAAQABAACAAQAAwAEAAUAAwAFAAMABAAEAAQABAADAAQABQADAAMABQADAAMAAwAFAAMABAADAAMABQAEAAQABAACAAUABAACAAQABAAEAAQABAAEAAMAAwAEAAQABAADAAUABAACAAQABAAFAAMAAgAEAAUAAwAEAAQAAwAEAAQAAwADAAMABQADAAMABAADAAUAAwAFAAIABQADAAQAAwADAAMABAAFAAMAAgAFAAMABAADAAUAAwAEAAQABQADAAUAAgAFAAIABQADAAMABAAEAAQABAADAAQABAACAAYAAwADAAMAAgAFAAQAAwAEAAQAAwADAAQABQADAAMABQADAAQABQAEAAQABQADAAUABAAEAAYAAwAEAAUAAwAFAAMABQAEAAUABAAEAAQABAADAAQABQADAAQABAAFAAQABAADAAQAAwAEAAYAAwAFAAQAAgAFAAQAAwAFAAQABAAEAAIABAAFAAUABAADAAQABQADAAQABAAEAAQAAwAGAAMAAwAFAAQAAwAEAAMABQADAAUABAADAAQABAAFAAMABAAFAAMABQAFAAQABAACAAYAAwADAAQABQAEAAIAAwAEAAQABAAEAAMABAAFAAMABAAEAAUAAwAFAAUAAwAEAAUAAwAEAAQAAwAEAAUABAAEAAMAAwADAAYAAgAEAAYABAADAAUAAwAFAAQABAADAAQABAAEAAQABAAFAAQAAwAEAAMABAAFAAMABQAFAAMABAAEAAYAAwAEAAMABQAEAAQABgADAAYAAgAGAAMABAAGAAQABAAFAAUAAwAFAAQABAAFAAQAAwAEAAQABgAEAAMABQADAAUABAAEAAUAAwAFAAMABQAFAAQABAAEAAYABAADAAUABAAEAAQABQACAAUABAAEAAMABAAEAAUAAgAEAAUAAwAFAAUABAACAAUABAADAAQABQAEAAQABQACAAQABQADAAUAAwAFAAMABAAEAAQABAADAAUABAAEAAMAAwAFAAQABAADAAQABQADAAUAAwAFAAMABAADAAQABQAEAAQABQADAAUAAwADAAQABQAFAAQABAADAAUAAwAEAAQABQAEAAMABQADAAQABQAEAAMAAwAGAAQAAwAEAAQABQAEAAQAAwAFAAQABQADAAMABgADAAUAAwAEAAQABQAEAAQABAAEAAQAAwAEAAQABQACAAQABQAEAAMAAwAFAAIABQAFAAIABQAGAAMABQAEAAYABAAFAAUABQAGAAQABAAGAAUABAAEAAYABAAEAAMABQAFAAQABQAEAAYABAADAAUABAAFAAUABAAEAAQABQADAAYAAwAGAAQABQAEAAUABAAGAAQABgADAAUABAAFAAUABAAEAAQABAAEAAQABQADAAUABQAEAAMAAwAGAAMABQAFAAUAAwAFAAQABAAFAAMABAAEAAYAAwAEAAUAAwAEAAUABQADAAQABQAEAAUABQAFAAUABAAFAAUAAwAFAAYAAwAFAAMABgADAAQABgAEAAUABAAFAAQAAwAFAAUABAAEAAQABQADAAQABAAFAAQABQAGAAQABQADAAUABQAFAAMABgAEAAQABQAFAAUABQAEAAQABQAEAAUABQAEAAUABAAGAAQABAAEAAQABAAGAAUABAAFAAMABAAFAAYABQADAAQABAAGAAMABAAEAAQABAAFAAQABQAEAAQAAwAFAAMAAwAFAAQABQAEAAUAAwAFAAQABAAEAAUABQAFAAQABAADAAUABgAEAAQABgADAAUABQAFAAMABgADAAYABAAFAAMABQAEAAYABAAFAAUAAwAFAAQABgADAAUABAADAAUABQAEAAMABQAFAAQABAAFAAQABAAEAAQABQADAAUAAwAFAAQABAAEAAUAAwAFAAYABAAFAAMABQAGAAMABQAEAAUAAwAFAAQABAAFAAMABQAEAAQABQADAAUAAwAEAAUAAgAFAAMABAAEAAQABAAGAAMABAAFAAYABQADAAYAAwAFAAYAAwAGAAQABAAFAAUABAAEAAUABAAFAAQABAAEAAYAAwAGAAQAAwAFAAYABAAEAAQABQADAAYAAwAFAAUABAAFAAUABAADAAQABAAFAAQAAwAFAAUABQAEAAUABAADAAUAAwAGAAQAAwAGAAUABAADAAUAAwAFAAUAAwAFAAMABgAEAAQAAwAEAAUABAAFAAMABQAEAAQABQADAAQABQAEAAQABAAEAAUAAwAFAAQABAAFAAQABAAFAAQAAwAFAAUABQADAAQABQADAAQABQADAAUABQAEAAMABAAFAAMABAAFAAQABAAFAAIABQADAAYAAwADAAUABAAFAAUAAwAFAAUABQAFAAQABQAEAAYABQAEAAYABAAFAAQAcwRNBFYEhwSVBF4EKgRFBJEErQRpBCIEIgRZBIQEbgQ5BDEETwRfBFIEMAQ0BE4EXARLBCkEIQRJBF0ESgQmBBAEKwROBEQEJgQdBCsERQRMBD8EPwRVBFoEWwRYBF0EZgRxBGsEZARkBGsEbQRhBGIEbgRvBHYEdwR0BHgEcARfBFUESwRMBEYEPgQwBCAEHgQkBBsEFQQWBBMEEgQHBP4DAgQSBBUEEQQWBBsEJQQlBBgEEwQgBCsEJgQSBAYECAQGBAAE+gPwA+kD8QPlA+AD3wPfA+gD5QPfA94D4wPrA+wD6wPrA+wD8APvA+4D8AP0A/QD9QP0A/ID7wP0A/ED5gPmA9gD3QPWA80DywO9A78DyAPAA8QDzwPKA9QD4APgA+0D9wP8AwoEDgQVBCcEMgQ3BEcEVQRmBG0EcwRnBFcEXwRjBGgEWAQ/BCcEJQQlBB0EFwQKBAQECgQBBP4D/gMGBA8EEQQIBA0EIAQlBDkEQwRIBFQEXgRQBEoEUgRgBGMEVwRBBDoEOgQ9BDYEJAQjBBgEEAQMBAIEAAQHBAgE/wP9A/wDAgQRBBIEFAQXBB4EIAQcBB0EJwQjBCYEJgQfBBoEFgQQBBMEDwQKBAQEAQT6A/kD9wPxA+0D7wPpA/AD6wPtA/ED9QP+A/gD/gMDBAYECgQIBAAECAQJBAIEAQQHBAkECQT8A/8DAgQBBP8D+wP6A/ED7gPwA+8D7gPsA/MD7APwA/oD+AP5A/8D/wMFBAkEDAQSBBcEGAQYBBYEGAQcBB0EHQQeBBcEFQQWBBEEFAQOBAgEFgQRBBEEDwQPBA8EDQQOBBMEEQQUBBoEGQQeBCIEKAQfBCgEKwQpBDQEMAQvBCoELQQpBCUEKAQjBB8EIQQZBBkEGgQZBBAEEAQTBAoEBwQQBBEEEQQSBA8EEgQVBBAEEQQTBBoEGgQeBBsEHQQdBCAEEwQSBBoEEAQLBBcEDgQLBAcEAAQFBP0D+wP9A/gD8wP+A/UD9gP0A/QD8wP4A/cD8wP2A/MD9QPzA/ID+APuA+8D8APxA/UD9QPyA/ID8APuA/MD7APuA+4D6gPpA+kD3wPmA+0D4wPiA+kD5gPkA98D3wPgA9gD2APSA8kDxgPFA8IDvwO/A8ADugO3A7cDtwO4A7oDtAO7A8ADzQPGA84D1QPTA9cD1wPbA98D3QPbA9wD2wPUA9cD1APUA9UDywPQA9EDzAPPA8YDyAPMA8UDvgO6A7kDtwO7A7kDwAPEA8IDxQPBA78DvwPAA8ADvgPBA78DwwO6A68DrwOoA6EDlgOYA50DmQOcA50DkAOVA5kDlgOSA5cDmQOdA54DpgOfA6ADpwOhA6cDpwOsA7QDsQO0A64DsQO1A7ADsQOrA7ADrwOrA6MDpwOfA5wDlgOWA5cDlwOVA5gDlQORA5YDkAOOA5QDlwOVA5YDigONA5UDmwOeA5kDmwORA5IDmQOhA5wDkgOPA4cDjgOOA4UDhgN9A3oDeQN6A3UDcgNyA3gDdQN0A3kDdwNvA3cDggOFA4cDggOKA4kDhAODA4QDgAOFA3wDfAOGA34DgAN9A4IDhQOGA4IDiQOJA4gDlAOLA5IDjAOMA40DiwONA44DlAOSA5UDlgOTA5kDkAOXA5kDmAObA5cDlgOUA48DjgOUA5EDkQOXA5wDoQOjA6IDpQOwA7ADuwPBA80D1gPjA+AD4APYA9gD4gPjA/MD5gPRA9QD2wPeA+AD1APIA8sD0QPSA9cD0QPNA84D1QPbA9ED2APWA9cD3gPkA+UD3gPlA+ED4wPuA+oD6QPqA+QD5QPgA9ED1QPNA88DywPKA8QDxAPEA8IDwAO7A7wDuwO6A78DxAPFA9ADzwPNA9EDzwPTA9IDzQPMA80DxQPGA8IDxQPJA84D1wPRA9ADzwPUA8cDxAO9A7IDtQOxA60DsQOtA7YDtQO1A74DvAPCA8ADwwPLA8kDwwO/A8gDxAO7A8YDxAPDA8UDwwPHA8oDywPMA9ADywPIA8IDuQO8A7UDswO2A6gDrwOuA6kDqAOqA64DsAOxA6wDtwO3A7kDvQO9A74DuwO+A7sDvgO8A7cDtwOxA6gDqQOpA6MDoAOhA50DnQOdA5sDnAOhA6EDmQOhA5kDkQOSA4YDcgNrA1gDRwMtAwcD3AKsAmsCHwLHAVMBxwAVADX/G/69/C77SflD9z71Y/Pa8d3whfAQ8W3ydvT19pb5NvyQ/ocAPgKLA0sEfQQvBNoDxgPcAwYELQRlBKsE6wTyBLsERgTYA4IDVgNCAz4DVgOIA7cDzwPHA5wDSwO2AvABGgFWAKn/Sf9X/9T/sACiAXkCOQPWAzYELgTqA6gDlwPbAzoEpAQcBb0FcAYIB2YHYgcnB70GSgbQBUEFwwRgBDQERQRGBDcEEwTtA/kD/wPXA48DRwMKA/gCzAKTAo8CkQKcAscCGgOXAxYEagRmBEsEPwQtBB0E5ANlAxkDTwN+A64DwwPVA0YE2ARPBaIFwgXWBbQFiAWiBcYF+AVPBqsG9gYDB6kGDAZOBbYEWgRJBJEE5QRIBccFKgZ+BrIGvQaTBiUGqQVcBU8FgQWdBY0FhgWaBa4FoQVFBdMEsATuBG8FFga7Bl4Hzgf5B+YHkQc9B/AGuwawBtwGSwfrB3YIuAjcCOMIogg0CI8H3gaNBpMGsgbvBkMHpQf7B18ImQixCOMIOQnACWcKCAvBC3IMHw2zDV4OFw/xDwkRQxKnExUVhxauF/cXXhf6FbATbhB5DDMI2QO7/zX8Ufne9gL1qvOh8t3xbfF78Q/yZPO09bT4U/xyAMUEzAhRDEQPbRHOEpQTuxNUE3ASShG5D30NxQqtBzsEngAp/Rz6gPev9b30ivT69Ar2lvd1+cH7Y/5EAVQEiwemCmQNkw8nEdcRnxHBEEkPVA0pC+QIjAYxBOwBwP+l/cb7V/pn+Q75f/mh+lX8hP4KAaMDQQayCOsKyAxmDqQPTBBjEMEPcQ54DBMKYAeYBAECvP/b/Xv8qPtZ+437SfyN/T7/WgHPA2kG2wgFC7oM5w2MDp8OJw5CDf8LYwpsCDwG/APHAcf/Ff7T/AD8sPvg+4b8oP0M/8sA1gLyBAYH8wiHCqYLRQxcDAYMSAszCs0IMAdvBZED0QFRABz/Uv73/Qn+mf6Y//EAhgIlBMgFYgfMCOQJgwqqCm0KywnHCGEHyAUVBGwC7ACp/8b+QP46/pz+af+TAPsBjgMzBa4G5gfbCIkJ0wm5CT0JYAg+B+MFVwTEAlABIwA5/53+YP6M/iT/LACNASgDzQReBsUH7AjCCS8KNArGCeYItQdQBtwEiAM2AhUBNwC0/6T/7P91AD8BOQJTA3cEnAW8BqoHQQiECIQIRAjAB+oG6AXJBKUDowK/ASMBwACZALgAIAHPAZQCcANQBB8FywVLBqIGvAaUBjcGtwUdBWoEvQMWA44CGgLZAcYB2QERAmACyQJBA8ADNQSQBNAE8QTzBM8EmQREBN4DgAMdA8sCjQJhAlMCZQKQAsgCGQNpA7cDCgQ7BGgEegRvBEkEDwS6A2EDDQOyAmQCKQIJAgUCFQI6AnQCsAICA0wDjwPJA/MDDwQWBAUE4wO6A4UDSAMBA8ICjgJwAlsCVAJeAnwCnwK9AukCBAMdAysDKAMgAwsD6gLPAqwChwJqAk4CPwI7Aj0CUgJqAo8CsgLbAv4CFQMxAzYDKwMYAwMD5AK5ApUCbgJQAjkCKgIoAi0CQgJfAn0CnALEAuEC/gIQAx0DLwMpAyYDGAMBA+wC2wLHArMCogKYApoCoQKpAr0CygLWAuUC7QL0AvkC9wLxAuwC5ALXAs4CwQK7ArICqQKsArYCzALiAvoCCgMrAzUDRANWA1IDVANUA0sDPgMvAxcDAQPpAtICwQK2ArMCtwK6AsgC2gLuAgEDIAMvAz0DSANTA1MDSQM6AyYDFAP1At0C0wK/ArMCqgKvAqsCsgK/AscC0gLjAu0C+QL5AggDDgMQAxEDDgMKA/0C+ALwAuYC3ALZAtcC0QLXAtoC3gLgAucC5wLsAvEC+QL9Av8CBAMDAwkDEQMPAxkDGwMgAyEDKAMjAx8DGwMXAxUDEAMPAw0DDAMRAwoDCQMGAwADAQP+Av0C/wICA/wCBQMMAxcDJgM1Az0DTQNZA2ADaQNmA2IDYwNjA2MDUwNRA0sDPgM6AzMDLwMzAzMDNgNBA0YDTQNVA1kDWwNiA2YDaANxA2wDbgNiA1kDUwNKA0QDNQMsAyUDMgMwAzIDMAMoAysDKwMvAzEDLAMwAzgDOwM5AzoDNwM/Az4DOwM5Ay8DLAMlAxcDEwMGA/0CBAMHAwYDEAMLAw0DEAMNAw4DDAMFAwEDAAMCAwQDBAMOAxEDHAMjAyIDMQMyAzcDPgM/A0UDSwNNA0UDPgM2AyQDGwMUAwID+wLyAucC5wLrAuwC7wL5AvcCBgMLAxoDJgMvAzgDQANEAzwDNAMzAzEDLAMiAyADGAMTAwwDBwMAA/sC9ALoAuECygK2Ap0CcgI5AtsBCQFT/5n95ftZ+t/4k/fK9q/2jvfg+JP6bvxX/pEAwQL7BNcGNQgzCeUJZQp1CuYJmgimBpEEfQI3APX9x/sh+vj4H/gC+Cv43/jA+Qf7rfyB/nwA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eQbvBCIDiwFTAfMBMwIgAkUCGQOuBJcGeAgRCkILQAzKDF8MxAsPC/cJPQn4CCcJAAoGCzIMeQ2VDmsPeA+FDg0NNAsgCdkGUAT5AcT/tv1m/OD7//uK/Dv9Af7f/qT/mQCZAYwCpwPLBNgFkAbMBlIGCgU6AzYB9P7A/B77N/os+ij70vyo/pcAigI1BFUF3gXnBY4FBwVUBH4DZAJIAVEANv8g/lD91/y7/Cj9K/6r/34BawP7BAcGvgboBmAGRgXiA1YC4ACz/8H+Jf4t/sv+sP/HAAACMANwBJwFbwa+BqMGMwY9BegDeAIvAUUA4P/l/1kAUQGwAiMEfgWzBnoHuweHB94G2wXDBJ4DeAKaARgB4AAcAboBqALdA0sFqAa9B28ImAgvCEsH/AVoBN4CqwH2ANkAVQE4AlUDmAS9BZoGGAcpB+gGYwapBdIEAwRNA7oCewKhAiYD/AP2BPQF0QZiB4QHNgdtBkwFDwT1Ai8C1AH0AXQCSgNWBG0FSAbJBusGsQYZBkcFUwRjA6oCQQJGAqQCWQM/BCUF2AVIBnAGKQatBe8EJARqA8gCdQJxAsACXQMUBN4EjQUNBkIGDwaNBdsEDgRPA8MCgQKTAuoCgQM6BP0ErQUWBiQG1QVQBakE8wNgAxsDEQM4A5kDJgTdBJ8FFAYvBhUG8AXXBZ4FPAXsBDkFJAaXBk4GOga2BjcH3AbQBXEFtgWxBVsFgQUvBnwGZQaXBs0GlgYyBo4FXgWCBRoFhgRcBIUEfgQ/BA0EAQQZBE8EkASqBLoExwS6BKEEYAQGBLMDkQN6A24DdwOeA+ADGgRMBF8EbgRgBDQEBwTVA7IDkgN3A3oDhgOPA5MDnQOpA6QDmQOMA4sDgQN0A2wDZwNrA3UDcwNrA20DcQN5A3oDcANkA1sDWwNaA18DaANxA4oDmgOhA6ADmgOLA3wDbwNhA1YDWgNLA1MDUwNCAywDFQMDA/UC9AL5AhQDNwNVA28DewN/A3kDUgMsA/4C2AK/ArMCtgLGAt4C+gIdAzEDQgNFAzoDJwMCA+ICxAKwApcCjwKRApkCogLBAt8C/gIbAyADLQMpAxcD/wLlAtgCygLGAscCwQLFAs4C0wLhAu0CAgMRAygDOgM6AzsDMQMaAwgD6wLRAscCvALAAsYCzwLaAu4C+QIHAxcDJQMzAy8DMQMqAx4DDQP0AtYCxAKtAq0CtgK7AswC5QL8AhQDKQM0Az4DOwM3Az0DOgMyAywDIwMRA/0C3wLPArsCrAKrAroC2QL+AiYDTgNtA4cDiwOEA24DTwMwAwsD9ALYAs8C0QLRAuUC+AITAyoDPwNNA1YDVgNJA0MDKwMfAxED/AL8AvkCAQMGAw4DFAMSAw8DDAMNAwgDBgMPAxIDGAMjAy0DMgM7Az4DOwM8AykDHgMQA/4C8wLqAvAC/gIRAyIDOANWA2UDZwNhA1cDQwMmAxUDAAP8Av0CAgMUAykDSQNfA3oDjQOUA44DhgNzA1wDRgM3AygDIwMtAzwDTgNmA3oDiQOQA4oDfgNuA1oDSAM4Ay8DLQM4A1ADXwNxA38DegNxA24DVgM/AysDGwMZAxsDLwNJA2QDgAOSA50DnAOSA3UDYANEAy0DGwMdAyADMgNHA1kDcwN8A38DdANuA2EDVgNJAz4DPwMzAy4DMQM7A0cDXANrA34DhAOMA4cDeANmA0kDOAMpAxwDGwMqA0ADWQNzA48DoQOvA68DowOWA4EDaQNbA0UDPwM4AzcDPgNLA1QDaQN2A30DjAOOA48DjwOEA4IDdgN0A3IDdQN3A34DgwOBA3wDcQNqA1wDXANVA1YDaANsA3sDhQOUA5cDmAORA4wDiwOAA3gDfgN2A3cDbgNmA2UDaANrA2kDdQN6A4ADjwOhA6sDrgOxA7EDowOZA4sDgAN1A24DaANvA3wDggOHA5UDoAOnA7IDrgO2A7MDtwO3A7gDvgPHA80D0QPSA9UDygO7A68DnwOZA54DoQOrA7wDygPTA+AD4wPbA9UDywPAA70DuAO8A8UDzAPWA90D2gPPA8gDywPGA8IDvgPAA8ADvgPAA8MDwwPFA8QD0QPaA9oD5gPjA+AD1wPIA7gDrAORA4MDgQN4A38DhwOPA5YDoQOvA7kDugOzA7YDqQOlA50DlgOOA4YDgAN6A3oDcwNwA3MDegOBA4QDjAOJA4sDlAOQA5sDnQOgA68DqgOiA5UDgwNzA1oDRQMvAyYDJQMsA0QDWAN0A4wDlwOtA68DqAOcA44DdwNjA1MDRwM5AzUDOgNDA0sDVANlA3UDhgOaA6IDogOcA5ADiAN1A2QDUgM+AzkDMgMvAzsDSgNXA2UDeAODA4sDngOfA6YDowOlA58DkgOFA3wDawNmA2QDZwNnA3ADewOHA48DlAOcA54DoQOeA44DhAN/A3YDbwNnA20DdQOJA5cDpQO5A8UD0wPUA8QDrgOjA5cDiAN2A2wDYgNmA20DcAOCA5QDowOyA8EDyQPcA98D0wPIA7oDpAOaA5ADhAOAA3sDfAOBA4MDgwOPA5MDogOqA6sDrAOqA6gDmwOJA3MDWgNDAyQDCQPmAsECkwJVAvwBYwGZAC7/Zvzc+Xn4q/cS+AL6lP3fAuwHRAs3DZYNAQxBCLECT/20+Rv4HPiP+Sr9cgK6B+IL+Q3gDUMMZwlzBRoBh/2q+5f73Pwg//QB7QSIB/cI+wjOB/sFVwMbAK/9Pvxt+7z7/fwK/9wBaASNBpsI6gnNCS4IswU4AxMBSf8q/gj+b/8OAsYEFwe9CNIJbwpGCk4JEQgnB9EGLQfMB4oIgglNCmAKqwkvCBoGtgNaAQ3/Ff0B/ID7fvtA/HD9zv5bAOEBPwOWBNUFoAb6BvsGogbRBcgEbAPEAWAAVf+l/mP+1/61/8wALQJfA0AE8gRSBQ0FkQTwAxADXALyAYMBHwEVARQB6gDpAOsA2gApAdoBcQIiAwAEZwRkBEkE4ANHA8wCOwK8Ab8BCQIyAkUCUAI6AkICcgJkAnIC2AI+A8YDXgSOBHwEWgTWA/wCUQK8AWIBjAEGAqMCgAN7BBYFiAW5BVEFwQQoBHYD9AKSAisCJQKKAg0DrAM3BIUEwATuBNwEmARCBP0DzgPKA78DsQO7A8oD0gPXA8YDtQPMA/8DLgRIBD0EDwTlA7kDhgN1A3gDlwPUAysEhQTYBA0FGwX0BKgESgTgA4YDVgNGA1kDjgPQAxQEYgSQBJ4EmASABGAENgQDBL4DhgNCAxoDGwNKA6ED+wNEBIQEpQSZBGoEEgS2A3YDYQNqA5QDzQMBBC8EQgQ/BCoE+gPOA44DWgM0AxEDBAMVA1ADngMABFIEhQSGBGQEJQTRA3gDLwMQAwgDLANcA5cD2wMNBDQEOwQnBPcDrwNeAyUDBQMBAyYDXgOZA+MDHQRRBGsEYAREBBgE4QOyA4sDgAOSA7QD6QMZBFYEfwSKBHcEXQRNBD0EMQQjBDwEogQrBckF3AVrBWEFxQW1BeUEEAQpBL8E4QR9BGkE5wSwBcwFUwU4BUoFdQUABkEFXQToBLEEDgTeA9kCXgIZAycD0AJZA9sDQwQIBeAEYARVBPMDjQM+A6wChQLbAhIDdgPGA+EDMARYBCsE5QOAAycDGgP6At8C+AIcA1wDtQPBA68DrgOGA2oDSQMMA/sCGQMqA1QDewONA6sDqgOKA20DOgMGA+UCzQLAAtIC7AIVA0ADZwOFA4wDggNsA1cDOQMVAwUD8wL2AvkCAwMMAw4DEgMOA/8C6gLbAt0C6wL7Ag4DHwM2AzkDKwMaA/sC4ALAAqsCoAKlArgC0QL0Ag0DFQMaAxYDCgP4AuMC0wLLAtQC5ALtAvUCBgMUAxUDDAP6AuUC0gLFArsCqwKyArwCywLhAvMCCAMPAyEDIAMjAxEDBQP9AvoC9gLjAuYC6ALoAu4C5gLoAucC6ALlAuIC5gLwAvYCBQMHAw0DDgMXAxcDEQMQAwgDAwP9AvsC8wLvAucC3QLSAtEC2QLfAukC8wIFAwwDGgMeAx4DIgMTAwUD9ALeAswCwwK7Ar8CxwLOAuEC7QL6AgcDCgMIA/4C+ALnAtoCygLAArUCtQK0ArYCuwK5AsMCyQLOAs4CzQLQAs0CzQLIAssCygLJAsYCxALGAsMCuQK9ArkCugK/AsICyALIAtcC2ALhAugC7ALuAuYC5ALWAs8CwAK4ArkCtgK+AsYC0wLmAvIC/AL7AvsC7wLrAtQCxgLCArkCsQK1ArYCuQLGAtAC3gLhAuUC5QLeAt4C1QLDArsCrgKgAp4CowKmAqoCtgK5AsECyQLTAtgC3QLbAtwC2ALQAswCwwK8ArECqgKiAp4CnwKmAqcCrAK4AsMC0QLQAtcC1ALJAsACtgKvAqgCoAKgApwCngKpArQCtwK8AsYCxAK/ArwCtQKxAqsCqwKtAqcCqwK6ArkCxQLDAsMCxAK/Ar8CwwLEAsQCzALeAtwC4QLiAuEC5QLbAssCwQK/ArECuAK5ArsCwALLAtQC1wLcAt4C2QLdAtUCywLKAsMCwgK7ArsCwALHAssC0ALcAuEC4gLoAuoC4gLeAtYCwwK8ArICsAK0ArECvQLIAtMC0QLaAt0C2wLaAtUC0QLQAtICxALAAsUCxAK5ArcCtgKvAq8CrwKsArUCugLIAs8C3QLgAuQC6ALhAtwC1gLNAswCyQLKAtgC1gLiAuIC3ALdAtwC3gLgAuUC6ALqAvAC9QL6AvsC+QLwAu0C7ALjAtoC0ALEAsYCxwLRAuIC7QIFAxQDHwMrAywDIQMNA/kC4QLOAr8CuQK4AsUC2QLqAgADEwMbAyUDHQMUAwQD8gLjAtICzQLSAtQC3QLoAvQC9wICAwIDAQP4Au8C6ALcAtECzQLLAscCzgLSAtcC4ALsAuoC8QLoAusC4ALaAtsC2QLbAuUC7QL3AgMDBwMKAwMDBAMCA/cC7ALkAugC6wLuAvUC9gL6AvwC/QL4AvEC7QLjAtYC1ALJAtIC0gLQAtsC2QLeAuYC6gLuAvIC8QLwAuwC5wLiAtYC0gLOAsoCxQLCAsACwQLBAsECyQLLAs8C2ALdAuYC7wL4AvoC9gL6AvUC7wLnAt0C0QLNAs0CyALKAskCzQLSAtkC3QLkAucC8ALuAu4C7QLqAuEC2gLcAtcC2ALgAuUC5wLpAugC4QLWAs0CwgK1ArECsAK1AsICzQLbAucC6ALtAuwC6wLiAt4C3ALVAtsC1wLYAtkC3wLcAtoC0wLTAtgC2QLgAuIC6ALqAucC6ALeAt0C1QLMAs0CzALRAtQC4ALgAuEC3ALjAuIC2wLaAtYC1QLSAtQC1wLYAuIC3ALeAuMC4ALgAtgCzwLJArsCsQKsAqsCqgKrArgCwgLNAtgC4gLnAtsC3wLWAskCvgKyAqsCqQKhAp8CpAKvArUCvwLFAsYCwgK/ArwCqgKpAp0ClgKbApgCowKrAq8CuQK/AroCwgLBArsCugLBArwCvAK6ArMCrgKmAp0CmgKYApgCowKpArsCxgLVAt0C0gLZAskCwAK/ArUCuAKzArkCwgLCAsYCyQLOAtYC2ALbAtcC1wLaAtYC2ALPAs4CxQLIAs4CxgLJAsoCxwLQAtMC3QLjAuwC9QL/Av0CAQP/AgMDBAP6AvIC9gL0Au8C9gL1AvcC+QL2AvoC/AL6AvgCAAMBAwMDCwMPAxEDDgMMAwwDAgP9AgQD/AL9AgMDAwMKAwgDDAMRAxcDIwMlAzEDOQM5AzoDNwMvAysDIQMaAxIDDQMNAxMDGQMjAygDMAMuAzMDMgMzAzQDLQMuAzADMwM3A0ADPgM4Az0DNgMtAyIDFAMUAw4DCQMKAwsDDQMRAxMDFQMUAxcDGgMYAw8DCgMBA/MC7ALsAu0C6ALqAvIC9wL5AvoC9ALyAvAC5QLfAtwC1wLdAuUC6QLnAusC7ALpAuoC4ALWAtgCzQLPAsoCzgLUAt0C2wLjAuQC3ALqAuIC4ALhAt8C4QLXAtkC2gLZAtwC2QLYAtoC4wLsAu4C9wIEAwgDDAMLAwkDAwP2AvAC6QLlAt4C3ALhAuQC5wLxAvIC/QIBAwADBgMCA/wC+gLvAuYC5wLhAucC4wLnAusC9QL6Av4CDAMLAw8DCQMLAwMD+wL5AvEC8ALqAvAC7gLrAu4C6wLtAvAC8QL3AvcCAAMDA/8C/wL3AvMC7gLvAuwC6QLtAvYC8wLyAv0CBQMHAwoDCAMIAwMD/gLwAusC6gLmAusC6gLwAvQC+QIBAwkDEQMSAxMDEwMRAw8DBQMCA/kC8wL5AvgC/AIGAwsDEQMWAxYDHgMbAxUDEQMIAwkDBgMHAwkDCgMTAxYDGQMYAxQDFAMIA/0C+wL1AusC7QLnAukC8QLxAv0C9wL2AvwC9QL7AvAC5gLaAs4CxwLBArkCsgKxArUCuALGAs8C3gLsAukC5wLeAtoCzQLBArsCtAK0ArgCuQK3AsECzALMAs8C1QLVAtoC3wLeAucC5wLlAukC6ALrAuoC5QLkAuwC7ALnAu4C8wL2AgADCAMMAxEDDwMQAxEDCQMCAwED+QL6AvwC+gIJAwoDDQMSAxoDGQMcAxgDEgMUAw4DCAMGAwkDCAMTAxgDGgMcAyQDJgMlAyUDHAMZAxcDFgMQAwYDAwP+AgEDAwMCAwQDCwMUAxMDHgMiAyQDHwMkAyYDJAMmAyMDJAMjAyQDHwMdAxkDFQMPAwoDCwMFAw8DGgMjAycDMAM4Az4DPgM4AzADLAMiAxoDFwMYAyIDIgMtAy8DOAM9A0IDRQNAA0IDQQNBAz4DQgNHA0gDSANDAz8DRgM8A0IDQQNDA0QDQgNDA0YDRANHA0gDSANJA0sDTQNPA1EDVgNXA1QDTgNKA0kDSgM+Az8DQQNBAzsDOwM+AzUDMAM1Ay8DLwMuAygDKQMkAx4DHwMSAxgDEwMRAxUDEQMSAxcDFwMTAxIDFgMSAxYDFAMXAxkDGgMcAyADHQMfAyIDGgMXAxUDFAMRAw8DFAMTAxUDEQMSAxUDGwMaAx0DHQMcAx4DHQMaAxkDHQMhAygDNQMyAzQDPQNDAzQDMQMwAykDKAMqAygDKgM1AzIDNgM9AzsDNAMuAygDIgMjAxwDHAMYAxYDFgMVAxYDFAMRAw8DEAMOAxEDFQMYAxgDFAMUAxADAgMEA/4C9gL3AvYC/wICAwkDEgMRAxsDHwMdAyIDIgMlAyYDKQMvAywDKgMpAyQDIwMfAx0DJAMkAykDKQMyAz8DRANIA0sDSgNGA0MDPgM1AzUDNQM3AzEDOAM0AzsDQgNHA00DUANZA1kDWgNWA1QDVANKA0UDRgM/Az8DQAM9Az0DPAM7A0EDPgM/Az0DOgM8AzUDMgMvAyMDHQMbAxMDEwMSAxIDDgMPAw8DEwMRAxcDFQMXAyIDFQMSAw8DBAP/AvUC9QLyAu8C7gLxAvAC+gIBAwEDCAMLAw4DEgMVAxoDHAMdAxwDFwMZAw8DDgMNAwwDDwMOAxQDGgMeAyIDJQMkAy4DMQMuAysDJgMhAxgDFAMIAwYDCwMRAxEDEwMhAy0DOQM2AzQDMAMuAx4DGwMaAxUDGwMcAyMDKwMvAzADLwMwAy0DLAMqAycDIwMgAxYDFgMLAw0DDQMGAwsDCgMJAxADGAMdAx0DIAMlAyoDKQMqAygDKgMgAx8DIAMgAx0DGgMcAxkDIgMlAywDKgMwAyoDLgMzAzYDNQM2Az4DOgNBA0ADRQNDAz4DPgM7Az0DOAM2AzUDNQMyAzMDMQM2AzIDLwM2Az8DMQM3AzgDNAM3AzEDNAM0AywDLwMzAy8DLwMxAzADMQMxAy0DMgMuAzIDKgMjAykDJgMeAxMDFQMPAwkDEQMMAw8DCQMJAwcDAwMFAwIDAgMBAwUDCAMMAxQDEwMjAyADJAMkAyMDIQMcAx0DGwMWAyIDHgMaAyQDKgMxAzADLwMuAy0DKgMqAy4DKQMkAyUDLAMpAy0DLQMwAywDLAMuAyYDHgMgAxsDFwMWAxQDEQMNAwoDEQMNAxEDFQMVAxMDGQMcAxQDEQMGAwMD/AL5AvUC8QLsAvEC8QLwAu8C8wLwAucC6gLmAuAC4gLiAuwC8QL2AvEC8QL5AvUC/QL3AvcC7wLlAusC7gLoAucC7ALyAvMC9gL2AvoC/gL9AvgC9QLwAu8C5QLjAuIC4ALfAt8C5gLsAvsC/QIBAwoDDQP/AvoC9QLxAukC6wLfAuAC5ALpAvIC9wIBAwYDBAMIAwYDAwP/AvsC8QLzAvgC+QL7AgIDBgMGAwoDDQMMAwYDBgMCA/wCAgP3AvgC8QL4AvgC8gL4AvkC+AL3AvwC+QIGAwYDDQMRAxEDFgMeAx8DHQMZAxkDHAMcAxwDHAMXAxYDGAMTAxcDHQMbAyADIwMlAykDJwMpAyIDHAMXAxkDGQMZAyIDJgMrAy8DMwM2AzgDNgMtAy0DJQMiAxoDGQMYAx4DHQMjAysDJQMnAzIDLAMgAyEDGwMRAw4DBwMFAwIDBQMCAwUDCAMMAw0DFwMUAxMDFwMSAxADFwMRAwsDBAMAA/0C+QL8AvoC/QIFAwUDBgMIAwoDCAMMAwgDCgMEAwEDAwP+AgQDCgMJAw0DEAMSAxADGQMSAxQDHgMbAxwDHwMeAx8DHQMdAx0DIAMjAyMDIwMsAycDMAM2AzoDOAMzAzwDMQMnAzMDKQMrAygDMAM3AzQDQgNCA0oDVwNaA1gDUgNUA0sDQAM4Ay8DJwMnAyUDJgMqAzQDPgNKA04DTgNRA1ADUQNPA0UDRQNGA0ADOwNAAzsDPQM/Az0DRgNEA0wDUQNSA08DUQNOA1ADTANFAz4DOgM3AzMDLAMyAzEDKwMiAycDMgMvAzIDLwMmAyoDJgMcAxQDEwMTAwwDEAMNAwoDCQMBAwIDAQP7AvkC+ALxAvMC9gLxAvQC8gL3AvQC8gL2AvcC+QL1AvMC9ALxAu0C6gLmAuoC4wLhAuUC7AL0AvsCAwMFAwMDAAMBA/4C/AL2AvIC+AL5AgADAAMIAw0DEQMZAxwDIQMgAyEDIQMfAycDHwMfAyMDHwMoAycDMAMxAy4DOQM9AzoDOQM6Az4DOwM3AzIDMgMsAzIDOAM1AzYDPAM+Az8DSQNFA0IDQgNJA00DRgM+AzkDMgMsAyYDIwMbAxkDHwMbAyADGQMcAxoDEgMNAwsDBgMCAwMD+QL2AvcC9QLxAvAC9QLyAvIC8wL8AvwC/gICAwED/AL9AgID+QL3AvUC6wLwAugC5gLwAusC6wLwAu4C9QL4AvYC+AL1AvIC7gLoAuYC7wLyAvMC9QIAAwsDDAMYAxoDGQMWAyADHQMXAxMDDgMOAwQD/wIBA/4C/gL5AvsC/wL+AgID/wICA/wC+gL6AvgC/gL7AvsCAgP6Av0C/wL6AvcC+QLxAvQC9gLwAvYC9QIAA/0CAgMIAwoDDQMDAwkDCAMHAwcD/wL+AgkDDQMVAxgDJAMoAzADMQM7AzsDPAM8AzYDMQM6AzcDOwM1AzYDOwM+Az0DQANIA0kDTgNYA1YDVgNUA1IDWgNYA00DSgNRA0YDSwNFA0kDRgNPA1EDUANaA1QDTgNOA1UDTgNGA0YDQwNDAz4DOAM1Ay4DMgMrAysDKwMuAywDMAMvAzEDMgMvAzEDLgMpAyYDIgMgAx8DGwMbAx0DFwMaAxkDGAMVAxUDGgMRAxcDEAMVAx0DGwMkAyQDJwMwAy8DLAMvAy8DKwMrAyoDLwMsAywDMgMyAzEDOQM4AzkDOwM3Az0DOgM8A0ADQwNAA0sDSwNPA1YDWwNfA2cDagNvA3gDdQN3A3QDbANuA2cDYQNeA1kDWwNaA1wDXwNeA2gDZwNnA2sDZwNrA2IDYQNhA14DWQNUA1IDSgNQA08DTQNLA1QDVANaA18DYANeA18DWANRA1ADSgNKA0QDQAM9A0QDRgNJA04DTwNPA04DTANHAz8DRQNFAz8DPQM/AzsDPwNCAzwDRQNGA0kDSgNIA0sDUANPA04DUwNSA1ADSwNHA0gDSANKA1ADSgNDA0gDRANHA0cDPgNDA0EDPQM+AzgDOwM2AzUDNwM5AzcDOAM7AzgDPQM3AzUDOAMwAy0DMQMuAyoDLAMkAy4DKgMpAywDMQMyAy4DMwM2AzsDQQNDA0YDRANBA0YDTgNJA0cDRwNJA0oDSANHA0oDUANQA1IDWQNVA1gDXANhA2YDbANqA2kDbgNmA2oDagNlA2EDYANnA2QDZQNoA24DbANqA3UDcQNwA3UDbwN0A3YDcwN0A3UDdQN2A3EDcgNuA3EDZANmA2oDYwNiA10DYwNoA2IDaANpA2YDagNpA2EDYwNhA2IDXwNZA10DYQNjA2MDZQNjA2wDbQNxA20DawNxA28DbQNvA3gDeQN6A30DewOCA34DegOBA3wDeQN5A3gDdgN+A30DfAOBA4MDhAOHA44DlAOZA5kDlwObA5sDmwOfA58DpAOiA6kDqgOpA60DpwOnA6cDqgOmA54DmQOgA58DogOkA68DqwOwA7EDtAO4A7QDsQO5A7kDtQO2A7IDuQO1A7oDvwO+A8QDxQPAA8MDvgO5A7gDtQOyA7UDrgOzA7MDtQO5A7cDvwPDA8IDyAPNA8cDwwPAA8IDxAPGA8MDwwPFA8UDygPIA8gDzQPKA84DxgPJA8kDywPKA8wD1QPRA9QD0QPTA9ADywPPA8sDxwPMA8cDygPKA84DzQPLA9MD1APOA8kDyAPHA8UDwQO4A7gDsQO0A7gDtgO+A70DxAPGA8gDxwPKA8gDwwO+A7wDvwO2A7MDtgO1A7QDsgO3A7EDsAOxA68DqgOmA6UDpgOhA5kDnAOaA5QDjgORA5YDjQOQA4cDhwOJA40DhQOAA4QDhwN7A3wDeQN1A2sDcANoA2kDaQNlA2QDZQNpA2QDYQNpA2IDaANqA2kDawNoA2kDZQNlA2YDawNjA2gDbQNrA2sDcwN2A3sDfQN/A4MDiAOEA4oDiAODA4IDgQOIA4YDjAOMA4sDkAOSA5gDlQOWA5YDlQOXA5cDlwOZA5MDlAOOA48DigOMA48DjwOXA5UDlgOZA5sDmQOZA5UDkQONA4gDhgODA4MDhAOBA4UDiQOJA4oDiAOMA4kDhgOEA4EDgAN3A3UDagNzA3cDdQN7A3IDcQN3A3gDdQNxA28DagNxA3QDcQNxA3IDcgNyA24DcQNxA3MDdANvA3YDdANyA3QDawNnA2EDaQNoA2oDbANoA2kDZwNrA2gDZANiA2EDYANeA2QDYANjA2EDYwNkA2UDZwNhA18DUwNUA1ADUgNQA0sDTANHA0kDSQNQA1ADUANTA08DUgNPA0wDRwNDA0ADOQM2AzUDNgM2A0ADRQNIA0wDTgNVA1kDUwNWA1gDVANUA1YDTgNUA1QDVANTA1MDUwNUA1gDUQNSA1YDXQNiA10DWwNdA14DXgNdA1kDXANeA2QDZANkA2sDcANyA3EDeAN2A3YDeAN7A38DfAOBA34DdwN6A3YDcQNwA3EDcwN3A3UDeAN8A34DeQN8A3sDdgN4A3MDdAN2A3cDeQN8A3wDewN/A4IDgwOFA4oDhgONA4wDjwORA5EDjwOMA5EDjAOLA4gDiQONA44DigOJA4oDkgOTA40DjgOLA4YDgwN8A38DdwN0A3EDcANyA3oDdwN+A4EDggOHA4gDiAOKA5ADigONA38DhwOFA4UDiwOJA4gDhwOMA40DjgOKA4cDdwN8A3cDbQNlA2IDXQNbA2UDYgNkA2oDbQNvA2cDaQNpA2IDYQNiA2IDZQNqA20DbwNvA28DdwNxA3ADeQN8A30DeQOAA3sDcgN2A3sDfQN9A34DfAN7A4EDhQOGA4UDjgOKA4gDkQONA40DjQOSA5MDlwOXA5YDmwOcA5wDoAOgA58DnQOZA5kDlgOXA5cDjwORA5QDkAOQA5EDnAOTA5cDmAOYA5kDmAOVA5YDkAOHA4gDewN9A3wDfgOFA4MDgQN/A4gDggODA34DfwN6A3wDeAN0A3EDdAN4A3IDdwNyA3kDegN4A34DfAOAA3wDegN7A3oDdANwA3kDdAN6A3cDdgN5A3oDewN/A4gDfwOHA4oDiwONA4cDiwOIA4cDlQOWA5IDmQOWA5oDlgOYA5YDmAOSA5QDmQOWA5oDmAOdA50DpAOdA6ADpgOmA6MDowOgA5wDnQOdA6ADnwOjA6kDsAOxA7UDuQOzA60DrAOkA6MDngOXA5YDnQOZA5IDoQOgA6sDqwOvA7QDtAOwA60DtAOkA5wDoAOhA5gDnQOfA5YDnQOfA58DOwA8ADsAOgA7ADsAPAA8ADoAOgA7ADoAOwA5ADsAOgA6ADkAOgA6ADoAOAA7ADgAOgA6ADkAOgA5ADkAOgA4ADsAOQA4ADsAOgA6ADkAOgA7ADsAOgA6ADkAOAA6ADgAOgA4ADcAOAA4ADcAOQA5ADkAOQA5ADcAOgA4ADkAOQA5ADcAOgA3ADoAOAA5ADkAOQA5ADgAOQA5ADcAOAA3ADcAOAA5ADcANgA3ADcAOAA3ADgANwA4ADcAOAA5ADgAOQA3ADoANwA6ADcAOgA4ADoAOQA6ADoAOAA6ADsAOgA5ADkAOwA6ADoAOgA7ADgAOwA6ADkAOgA6ADoAOgA6ADoAOAA6ADoAOgA4ADoAOgA7ADkAOgA7ADsAOgA7ADsAPAA6ADsAPAA8ADoAPAA6AD0AOgA8ADwAPAA9ADwAPAA9AD0APgA/AD4APAA/AD0APgA8AD4APgA+AD0APQA+ADwAPQA8AD0APQA+AD8APgA9AD8APgA+AD4APgA/ADwAPwA+ADwAPgA+AD0APgA9AD0APQA9AD8APAA+ADwAPQA9ADsAPAA9ADoAPQA7ADwAPAA8ADwAOwA8ADsAPAA9ADoAOwA8ADsAOgA+ADsAPAA9ADsAPQA7ADsAOwA9ADoAPAA9ADsAOwA8ADwAOwA8AD0AOwA7ADwAPQA7AD0AOgA8AD0APAA9ADwAPwA8AD4APQA/AD4APgA+AD0APwBAAD4APwA+AD4AQQA/AD8AQAA/AD8APwBBAD4AQAA+AD8AQAA+AD8APwA/AEAAPgA/AD8AQAA+AD8AQAA9AD8APgA/AD4APgA/AD4APQA/AD4APQA9AD4APQA9AD0APAA8ADsAPAA9ADwAPgA8AD4APAA9ADsAPgA9AD0APQA7AD0APwA8AD4APQA+AD4APQA9AD4APgA/AD8APQA/AEAAPwBAAEAAQQA/AEEAPwBBAEEAQABCAEEAQABBAEIAQQBDAEAAQQBCAEAAQQBBAEEAQQA/AEAAQQBAAEAAQABAAD4APgA+AD4APwA9AD0APwA9AD0APAA+ADwAPQA7AD0APAA8ADwAOwA8ADwAPAA8ADwAPQA8ADwAPAA8ADsAPQA8AD0APAA8AD4APAA8AD4APQA9ADwAPQA+AD4APgA+AD4APgA9AD8APQA/AD8APwA/AD8APwA/AEAAQAA+AD8AQQBBAEAAQQA/AEEAPwBCAD4AQQA/AEIAPwBBAD8APwA/AD8AQAA9AD4APQA/AD0APgA8AD8APAA8AD0APAA7ADsAPAA7ADsAOwA5ADwAOwA7ADkAPAA6ADsAOgA8ADsAOgA7ADkAOwA6ADkAOgA5ADkAOQA5ADoAOgA6ADkAOgA5ADgAOwA5ADoAOgA6ADoAOgA5ADoAOQA5ADoAOgA6ADsAOgA7ADoAOgA7ADwAOgA8ADoAOwA6ADwAOgA5ADoAOgA7ADgAOwA4ADoAOQA6ADoAOQA5ADoAOgA6ADgAOQA7ADkAOQA5ADoAOQA4ADoAOQA4ADkAOAA5ADcAOAA2ADkAOAA2ADcAOAA2ADcANgA4ADQANwA1ADYANgA1ADcANgA0ADcANgA1ADcANgA1ADYANgA3ADgANwA3ADYANwA3ADgAOQA3ADYAOAA4ADgAOAA2ADkANwA3ADkAOAA4ADgANwA4ADgAOQA3ADgAOAA3ADgAOAA4ADcANgA3ADcAOAA2ADUANwA2ADUANgA2ADYANQA3ADUANwA2ADYANQA0ADQANQAzADUAMwA1ADMANQA1ADUAMwA0ADQANAA1ADMANQA0ADQANAAyADUANAA0ADMANAA2ADQAMwA2ADMANQA2ADQANQA2ADUANQA1ADUANgA2ADUANgA3ADcANwA4ADYAOQA3ADoAOAA3ADgAOAA4ADgANwA3ADgAOAA4ADgAOAA4ADgANwA5ADcAOAA4ADcAOAA3ADgAOQA4ADcANwA5ADcAOQA5ADcAOAA4ADcANgA4ADYANwA2ADUANQA3ADUANgA4ADUANgA0ADYANwA0ADYANgA0ADYANAA3ADQANAA3ADUAMwA3ADQANwA0ADcANwA0ADcAOAA3ADYANgA3ADYANgA3ADcAOQA4ADgAOAA3ADkAOgA5ADkAOgA6ADoAOgA6ADsAOwA6ADsAOgA6AD0AOgA8ADoAPAA9ADoAPAA7ADwAOwA7ADwAOwA7ADwAOgA7ADsAOwA8ADwAOwA6ADkAOgA5ADsAOAA5ADoAOAA5ADoANwA5ADgAOgA4ADcAOAA3ADcANwA3ADYANwA3ADcAOAA3ADUAOQA2ADcANgA5ADcAOAA5ADgAOQA3ADkAOQA6ADkAOQA6ADoAOgA6ADwAOwA8ADsAOwA+ADwAPAA9AD0APgA9AD0APQA+ADwAPwA+AD4APwA+AD4APgA+AEAAPwA9AD4APgA9AD0APgA+AD4APAA9ADwAOwA7ADwAPAA8ADoAOwA6ADoAOgA5ADkANgA5ADgAOQA2ADgANgA4ADYANgA3ADcANwA2ADcANQA4ADYAOAA3ADcANgA5ADYANwA2ADgANgA3ADYAOAA3ADcAOAA5ADgANwA4ADgAOQA4ADgAOQA6ADkAOQA6ADoAOgA6ADwAOgA7AD0AOwA8ADsAPQA9AD0APQA9ADsAPQA8ADwAOwA7ADwAOwA9ADsAPQA6ADoAPAA6ADoAOgA8ADgAOwA6ADgAOgA6ADsAOQA5ADsAOQA5ADkANwA4ADkANwA4ADkAOAA4ADkAOAA3ADgAOAA5ADcANwA4ADcANwA4ADgAOQA4ADcAOQA5ADoAOQA5ADgAOQA5ADoAOgA5ADkAOgA5ADsAOwA6ADsAOwA9ADsAPAA7AD4AOwA+ADwAPAA9ADwAPQA+AD8APgA8AD4APwA+ADwAPgA9AD4APgA/ADwAPwA+AD4APQA/AD0APgA+AD0APQA8ADwAPAA8ADwAPQA7ADwAOwA+ADoAOwA7ADsAOgA6ADoAOwA4ADkAOgA3ADoANwA5ADcAOQA4ADkANwA5ADcAOQA4ADgAOQA3ADgAOwA4ADoAOQA4ADwAOQA7ADkAOgA7ADsAOwA7ADsAPAA8ADsAPQA8ADwAPQA8AD0APgA9ADwAPgA9AD8APAA/ADwAPgA9AD4APQA8AD4APQA8AD0APgA7AD4APAA7ADwAPAA8ADoAPQA8ADsAPAA6ADwAPAA7ADsAOwA5ADwAOwA5ADoAPAA6ADkAOgA4ADoAOQA5ADkAOwA5ADgAOwA5ADcAOgA5ADkAOQA5ADsAOgA6ADkAOgA6ADoAPAA7ADsAOwA8ADsAOwA9AD0AOgA+AD0APAA+AD8APQA+AD4APQA9AD4APgA/AD0APQA+AD8APgA+AD4APQA/AD8APwA+AD8AQAA/AD8APgBAAD4APwA+AD0APwA9AD8APQA9ADwAPgA9AD0APAA7AD0APAA6AD0AOgA8ADoAOQA5ADoAOAA6ADcAOQA6ADgANwA4ADgAOQA4ADYAOAA1ADgANgA4ADYANgA2ADgANwA2ADYANwA2ADgANgA4ADYAOAA2ADgANwA2ADcAOQA3ADkANgA5ADkANwA6ADgANwA5ADkAOgA4ADoAOAA7ADkAOwA6ADoAOQA7ADgAOgA4ADkAOQA4ADkAOQA3ADkANwA4ADgAOAA4ADcANgA2ADgANQA4ADUANwA2ADQANQA1ADQANAA0ADQAMwA1ADEAMwAyADMAMQAyADIAMgAyADAAMgAxADEAMgAyADIAMgAyADEAMQAyADMAMgAyADIAMwAzADIANAAzADUAMwA1ADQANQA1ADUANgA0ADUANgA1ADcANwA1ADYANwA2ADcANwA3ADcANgA4ADgANwA4ADcANgA3ADcANwA1ADYANgA1ADYANwA0ADYANQA1ADMANAA2ADMAMwAxADMAMwAzADEAMwAzADIAMQAzADEAMgAwADEAMwAxADIAMwAyADAAMgAzADEAMgA0ADIAMgAzADIAMgA0ADIANAAyADQANAA0ADQANAA0ADYAMwA2ADYANQA2ADYANwA4ADcANwA3ADgAOQA3ADgANgA4ADgAOAA4ADkAOAA3ADgAOgA5ADcAOQA4ADcAOQA3ADkAOAA4ADgAOAA2ADgAOAA4ADcANgA4ADgANgA4ADUANgA4ADYANgA2ADYANAA2ADcANQA0ADUANQAzADUANAAzADQANQAzADUAMgA0ADMAMwAzADQANAA0ADIANAAzADUANAAzADQAMgA1ADMAMwAzADIAMwAyADUAMQA1ADIAMwAzADMANQA0ADMAMwAzADUAMwA1ADQAMwA0ADQANQA1ADQANQA0ADUANQA1ADUANgA2ADUANAA1ADUANAA1ADQANQA1ADMANQAzADUAMwA0ADQANAA0ADUANAAzADYAMgA0ADUAMwA0ADQAMwA1ADMANAA1ADMANQA0ADUANQAzADQANQA0ADQANAAzADQANQA0ADQANAA2ADQANAA2ADQANQA2ADUANwA1ADQANgA2ADQANgA2ADcANQA2ADcANwA3ADUAOAA3ADYAOQA4ADgANwA4ADgAOAA3ADcAOAA3ADgANwA4ADYAOQA3ADYAOAA3ADgANQA4ADYANwA3ADUANgA3ADQANgA2ADQANwA1ADYANgA2ADYANwA1ADcANgA4ADUANgA1ADYANQA1ADQANQA0ADMAMwA0ADUAMwA0ADQAMwAzADQANAAzADMAMwA0ADMAMwAzADMAMwA1ADMAMgAzADMANAA0ADQAMwA0ADEAMgAyADQAMgAyADAAMwAxADIAMQAyADEAMQAwADMAMQAxADIAMgAxADEAMwAwADIAMwAxADMAMgAyADIAMwAyADIAMQAzADIAMQAzADEANAAxADMAMwAyADMAMgA0ADIAMwA1ADIAMwA0ADQAMwA1ADUANQA1ADQANQA2ADUANQA0ADQANQA0ADUANwA0ADMANgA1ADUANwA0ADYANwA1ADYANgA1ADYANQA3ADYANQA1ADUANwA0ADYANQA1ADQANQA2ADUANQA2ADQANQA1ADYANQA1ADYANAA2ADcANAA2ADYANwA1ADYANgA3ADYANwA2ADcANQA4ADUANQA2ADYANgA2ADYANgA2ADQANQA2ADUANQA2ADUANgA3ADYANQA2ADgANQA3ADcANwA3ADUANwA3ADcANwA3ADYANwA3ADcANwA4ADcANgA5ADYANwA2ADYANQA3ADQANwA0ADcANgA2ADcANQA3ADYANgA2ADYANQA2ADcANwA2ADcANwA2ADkANgA4ADkAOAA3ADYAOAA3ADgANwA4ADcAOQA2ADkANwA4ADcANwA5ADYAOAA4ADYANwA5ADcAOAA2ADkANwA5ADYAOQA3ADgAOAA3ADkAOAA4ADkANwA4ADgAOQA4ADgAOQA4ADkANwA5ADkAOAA3ADoANwA3ADgAOgA2ADcAOAA4ADYAOAA3ADUANwA2ADcANwA2ADUANgA2ADUANwA1ADYANQA1ADYANgA0ADcANAA1ADQANwA0ADUANQA0ADQAMwA1ADMANAA1ADMAMwA0ADQANgAyADUAMwAyADQAMwAzADMAMwAxADQAMQAzADMANQAyADMAMgA0ADIANAA0ADUAMwA0ADQANQA0ADQANAA2ADQANAA0ADUANQA0ADYAMwA2ADUANQA0ADUANAAzADUANgAzADUANAA0ADQAMwAzADQAMgA1ADMANAA0ADQAMwA0ADQANQAyADUAMwAyADQAMwAyADQAMgA0ADIAMwA0ADEAMwAzADAAMwAyADIAMgAyADEAMgAxADIAMgAwADEAMQAzADEAMgAyADIAMAA0ADAAMwAxADIANAAyADIAMwA0ADIAMgA0ADIAMwAzADQAMwAzADIANAA0ADMAMwA0ADMAMgA0ADIAMwAzADQANAAzADQAMgAzADQAMwA0ADQANAA0ADQANAAzADYANAA0ADYANAAzADYAMwA2ADQANAAzADQANQAzADQAMwAyADIAMwA0ADMANAAzADQAMgAzADQAMwA0ADMANAAzADUANQA1ADQANQA2ADUANQA3ADYANQA3ADYANwA4ADUAOAA3ADcANwA4ADgAOAA4ADgAOQA3ADkAOAA4ADkAOQA6ADkAOgA5ADgAOwA6ADkAOgA6ADsAOgA7ADwAOQA9ADoAPAA8ADsAPAA9ADwAPAA8AD0APQA8ADoAPQA7ADkAPAA5ADoAOwA6ADsAOQA6ADsAOQA6ADkAOwA4ADkAOQA4ADkAOQA4ADkAOQA5ADgAOQA7ADgAOQA6ADkAOgA5ADgAOgA5ADoAOQA6ADgAOAA4ADgAOQA4ADgANwA4ADYANwA4ADcANgA2ADcANgA1ADcANQA3ADYANwA1ADcANwA2ADcANwA2ADYANwA4ADUANgA3ADcANQA3ADYANQA2ADUANgA1ADcANgA0ADcANAA1ADYANQA1ADYANgA1ADcANQA0ADYANwA2ADUANgA2ADcANwA2ADgANQA3ADkAOAA3ADYAOQA4ADcAOAA4ADgANwA3ADgANgA2ADcANwA4ADcAOAA2ADgANgA3ADkAOAA5ADgAOAA3ADgANwA6ADcAOQA4ADoAOQA3ADoANwA5ADsAOAA4ADgAOQA5ADgAOQA4ADkAOAA5ADgAOAA3ADoAOQA4ADkAOQA6ADgAOQA5ADgANwA4ADcANwA5ADcANwA2ADYANwA2ADYANgA3ADUANgA3ADYANQA2ADQANwA2ADUANgA1ADUANwA1ADQANgA1ADUANwA1ADQANgA1ADMANgAzADUANQA0ADQANQA1ADUAMwA3ADUAMwA2ADYANwA1ADYANwA2ADcANgA1ADYANwA1ADcANwA1ADcANwA3ADkANwA3ADkANgA5ADgAOAA4ADcAOQA3ADcANwA2ADgANwA5ADYAOgA3ADcANwA5ADYAOAA4ADgANwA2ADgANgA4ADUAOAA2ADYANgA2ADcANwA2ADcANQA4ADUANgA3ADcANgA2ADYAOAA2ADcANgA3ADcAOAA3ADcANwA5ADkANwA4ADgAOAA6ADgAOQA4ADoAOQA6ADgAOwA5ADoAOgA6ADoAOgA8ADkAPAA7ADsAOwA7ADsAPAA7ADsAPAA8ADoAOwA7ADsAOwA9ADwAOgA7ADoAPAA5ADsAPAA7ADoAOgA5ADkAOQA6ADoAOgA5ADgAOwA5ADgAOgA5ADoAOQA4ADkAOQA4ADgAOAA6ADgAOAA4ADkAOAA4ADkAOAA5ADgAOAA5ADkAOgA6ADkAOQA6ADkAOQA6ADsAOgA6ADwAOwA6ADsAPAA7ADsAOwA7ADsAOwA7ADsAOgA7ADoAOQA8ADkAOwA6ADsAOwA6ADoAOgA6ADoAOQA5ADsAOQA6ADsAOAA7ADoAOAA6ADsAOQA5ADkAOgA5ADgAOwA5ADgAOgA5ADgAOQA6ADkAOAA4ADgAOQA5ADkANgA5ADgAOAA3ADcANwA3ADkANgA5ADgANwA4ADgAOAA4ADgAOAA4ADcAOAA6ADcAOAA4ADgAOAA4ADgAOAA3ADgANwA5ADgANwA4ADgANwA3ADgANgA3ADYAOAA1ADgANQA3ADcANAA3ADcANwA2ADgANQA3ADcANgA1ADUANwA1ADYANQA1ADUANQA2ADUANwA2ADUANQA1ADYANgA1ADcANQA1ADYANAA3ADUANQA2ADYANgA2ADcANwA2ADkANwA3ADgAOAA3ADcAOQA4ADcAOAA3ADoANwA5ADcAOgA3ADoAOgA3ADkAOQA5ADgAOAA4ADoAOQA4ADoAOAA5ADcAOQA4ADgAOQA5ADcAOgA4ADgAOAA4ADkAOAA6ADgAOQA3ADoAOQA5ADkAOQA5ADkAOAA5ADoAOAA5ADoAOAA5ADgAOgA5ADkAOQA6ADkAOQA4ADsAOAA6ADkAOQA5ADsAOgA4ADsAOAA7ADoAOQA6ADwAOAA7ADkAOgA5ADoAOgA4ADoANwA5ADoAOAA4ADgAOAA4ADgANwA4ADcAOAA4ADYANwA4ADcAOQA3ADcANwA2ADkANwA4ADcAOAA4ADgANwA6ADcAOgA4ADgAOQA6ADkAOAA5ADcAOAA5ADgAOgA4ADoAOQA4ADoAOAA6ADsAOAA6ADcAOgA5ADgAOAA5ADkAOAA4ADkAOQA5ADgAOQA5ADgAOQA4ADcAOQA2ADkANQA4ADcAOAA2ADcANgA3ADgANwA3ADYANgA4ADYAOAA2ADgANgA3ADgANgA3ADgANgA4ADcANwA4ADkAOQA4ADgAOQA5ADgAOQA3ADgAOQA4ADgANwA3ADcAOQA5ADgAOQA4ADsAOAA5ADgANwA5ADcAOAA4ADcANwA5ADcAOAA3ADcAOAA3ADkANQA3ADcANgA2ADYANgA1ADYANgA1ADYANgA3ADcANQA3ADQANwA1ADQANAA1ADQANQA1ADQANAA0ADQANQA0ADQAMgA0ADIAMQAzADIAMgAxADMAMQAxADMAMgAyADIAMgAzADMAMQAyADIAMQAzADMAMwA0ADUANAA0ADMANAA0ADIAMwAzADIAMgAyADMAMwAyADMAMwAzADMANQAzADEAMwA0ADMAMQA0ADUANAA1ADUANQA2ADQANAA0ADUANQA0ADUANAA2ADUANQA0ADUANwA0ADUANgA1ADYANQA2ADUANQA2ADUANAA3ADUANAA2ADYANQA1ADcANQA0ADYANQA1ADYANAA3ADUANgA2ADUANgA3ADYANwA1ADYANgA2ADUANAA2ADUANgA2ADUANwA2ADYANwA2ADYANQA2ADYANgA1ADYANgA2ADYANwA3ADYANwA3ADUANgA3ADUANQA1ADQANQA0ADYANQA2ADUANgA3ADYANwA2ADQANwA1ADMANAA1ADUANAA0ADYANAA2ADUANQA3ADUANgA0ADcANQA0ADQANQA1ADUANgA0ADQANgA0ADUANQA2ADUANgA2ADUANwA2ADYANwA2ADUANAA1ADYAMwA2ADUAMwA2ADQANAA3ADUANwA3ADcAOAA2ADcANwA3ADcANgA2ADYANgA1ADQANQA3ADYANgA3ADoAOAA6ADgAOAA5ADcAOQA1ADgANgA0ADUANgA3ADYAOAA3ADYAOQA3ADgANwA3ADcAOAA3ADYANwA3ADgANgA5ADcANgA4ADcAOAA5ADYANwA3ADcANwA3ADYAOAA4ADYANQA2ADUANQA2ADMANQA1ADUANAA1ADUANwA3ADYANQA3ADQANQA0ADYAMwAyADQANgAzADQANQA2ADYANgA4ADYANwA2ADUANgA1ADUAMwA0ADUANQA1ADUANgA3ADcANwA4ADcANwA4ADYAOAA3ADYANwA2ADYANwA3ADUANQA4ADUANgA4ADYANgA3ADYANwA3ADcAOAA3ADcANwA4ADYANgA2ADUANQA2ADQANgA1ADcANgA2ADcANwA3ADUANgA2ADYAMwA1ADQANQAyADUANgA1ADUAOAA2ADcANgA3ADYANgA1ADYANgAzADQANAA1ADUAMwA1ADUAOAA2ADcAOAA3ADgANwA4ADcANwA4ADcANgA3ADkANgA5ADgANwA3ADgANgA4ADYANQA2ADYANAA1ADUANQA2ADcANQA3ADcANwA3ADYANwA2ADYANgA2ADYANAA1ADUANgA2ADQANwA2ADUANgA1ADYANwA2ADgANgA3ADcANQA3ADcANwA2ADYANgA3ADcANQA1ADgANgA1ADUANQA2ADYAOAA3ADUAOAA4ADYANwA3ADgAOQA4ADcAOQA3ADcAOAA6ADcAOQA5ADgAOQA3ADoAOAA3ADcANwA4ADgAOQA4ADcAOgA5ADkAOgA6ADkAOAA5ADgANwA5ADcAOgA3ADkAOQA3ADgAOgA5ADoAOAA5ADoAOgA4ADkAOAA6ADgAOQA4ADkAOgA5ADkAOwA6ADkAOgA4ADoAOAA6ADYAOQA3ADcAOAA3ADkAOAA4ADkAOQA4ADkANwA4ADkANgA4ADcAOAA4ADgANwA5ADgAOQA4ADcANwA3ADgANgA4ADcAOQA4ADgAOAA7ADgAOAA6ADkANwA6ADgAOQA5ADcAOQA4ADcAOQA3ADgAOQA4ADgAOQA4ADgANwA5ADYAOQA2ADgAOAA4ADgANwA4ADgAOAA5ADcAOAA5ADcAOAA3ADkAOAA5ADcAOgA4ADgAOQA5ADkAOQA4ADgAOQA6ADoAOAA7ADkAOQA6ADgAOgA6ADkAOgA7ADgAOwA4ADsAOgA6ADoAOwA5ADsAPAA7ADwAOgA8ADoAPAA5ADsAOgA5ADkAOQA7ADoAOQA6ADoAPAA5ADwAOgA8ADoAOwA7ADsAOwA7ADkAOgA7ADkAOQA6ADkAOQA6ADgAOgA6ADkAOgA5ADoAOgA5ADoAOQA6ADkAOQA4ADgANwA3ADcAOAA3ADcANwA4ADgAOQA4ADgAOQA5ADgAOAA3ADgANwA1ADcANgA1ADUANgA1ADYANwA2ADUANwA1ADcANQA1ADUANQA1ADQANAA1ADYANAA1ADUANQA1ADYANgA2ADYANgA1ADcANQA0ADcANgA1ADUANgA1ADcANQA2ADcANgA1ADcANgA1ADYANwA1ADYANwA2ADUANwA1ADcANAA2ADQANQA2ADQANwA1ADYANgA2ADYANgA2ADUANQA0ADYANQA0ADYANQA1ADUANwA2ADUANgA2ADYANgA2ADUANgA2ADQANQA1ADYANwA1ADgANgA4ADcANgA4ADcAOAA2ADgANwA4ADgANwA4ADoAOAA3ADkAOgA4ADoAOAA5ADkAOgA6ADkAOQA5ADcAOgA5ADoAOQA6ADgAOgA4ADkAOgA5ADgANwA4ADgAOAA3ADgANwA5ADgAOQA4ADgANwA3ADgAOAA2ADcANwA4ADcANwA4ADgAOAA3ADkAOAA4ADcANwA5ADcAOAA2ADkAOAA4ADcANwA4ADcAOAA4ADcAOQA4ADkAOQA4ADkAOgA4ADoAOgA6ADsAOgA6ADoAOgA5ADkAOwA6ADoAOgA7ADoAOgA8ADkAOwA6ADwAOgA6ADkAOwA7ADoAOQA7ADkAOgA6ADgAOgA5ADkAOQA6ADkAOAA6ADgAOQA5ADgAOAA3ADkANwA5ADcANwA4ADgANwA4ADkAOAA4ADgAOgA3ADgAOAA3ADYAOAA3ADgANwA4ADYANgA4ADcANgA2ADcANwA4ADYANwA3ADcANgA3ADcANwA2ADgAOAA2ADgANwA2ADcANwA4ADYAOAA4ADcANwA5ADgANwA3ADkANgA5ADYANgA3ADUANgA2ADcANwA4ADUAOAA4ADcANwA5ADcANwA4ADYAOAA1ADgANwA0ADcANgA3ADUANgA2ADcAOAA1ADkANgA3ADgANgA4ADYANwA4ADYANQA3ADYANQA1ADYANQA2ADYANgA2ADcANwA2ADgANgA5ADcAOAA2ADgANgA4ADgAOAA3ADYAOAA4ADgANgA5ADcANwA2ADgANgA4ADUANwA3ADgAOAA3ADYANgA3ADgANgA2ADUANgA2ADcANQA3ADYANgA3ADYAOAA3ADYANwA4ADgANQA5ADYANgA4ADcANwA4ADYANQA4ADYANwA2ADYANQA4ADUANQA2ADcANQA3ADYANgA2ADYANQA2ADYANgA1ADYANQA1ADcANwA2ADUANQA1ADcANQA1ADcANQA1ADYANQA1ADUANgA2ADUANgA1ADYANQA1ADUANQA0ADMANAA0ADYANgA0ADUANgA3ADUANgA3ADUANQA3ADYANAA3ADUANQA2ADcANgA3ADYANgA4ADcAOQA2ADkAOAA5ADgAOQA3ADkANgA5ADYAOAA3ADcAOAA3ADgANwA5ADkANwA5ADoAOgA3ADoAOgA4ADgAOAA5ADkAOQA4ADoAOAA6ADkAOgA7ADkAOwA5ADoAOQA6ADwAOAA7ADoAOAA7ADgAOgA6ADkANwA6ADkAOAA5ADkAOgA6ADkAOQA7ADkAOwA7ADgAPAA5ADoAOgA5ADkAOwA4ADoAOQA6ADcAOgA6ADkAOQA6ADgAOQA6ADkAOAA4ADgAOgA3ADkAOAA5ADcAOQA3ADgANwA3ADgANgA5ADcAOQA3ADgAOQA3ADoANwA5ADgAOQA3ADkAOAA3ADgAOgA4ADkAOQA4ADgAOQA5ADgAOAA6ADgAOgA3ADgANwA5ADcAOQA3ADgANwA3ADkAOAA4ADgAOAA4ADcAOgA4ADgAOQA4ADkAOgA5ADgAOQA6ADkAOgA4ADkAOQA4ADkAOQA5ADkAOAA4ADkAOAA4ADgAOAA5ADcAOQA4ADgAOQA4ADkAOQA6ADkAOQA7ADgAOwA5ADkAOQA4ADsAOQA4ADoAOQA5ADgAOgA6ADoAOQA7ADkAOgA6ADkAOQA6ADoAOAA6ADgANwA5ADkANwA4ADkAOAA5ADgAOgA6ADkAOgA4ADoAOAA4ADgANgA4ADgAOAA3ADkANwA4ADgAOAA5ADgANwA4ADgANwA3ADUAOAA1ADYAOAA1ADgANQA3ADgANwA4ADYAOAA3ADYANwA3ADgANgA4ADcANwA3ADgANwA4ADYANwA2ADcANwA4ADcANwA4ADgANgA3ADcANQA2ADYANQA3ADYANwA1ADUANwA1ADYANgA2ADYANAA2ADUANQA3ADYANgA2ADcANwA2ADcANQA2ADgANwA2ADkAOAA3ADcAOQA3ADcANgA1ADYANwA3ADYANwA4ADYANgA4ADYAOAA3ADcAOAA3ADcAOQA4ADYAOQA3ADkANwA5ADgAOAA4ADgAOgA4ADgAOAA4ADgAOAA5ADcAOAA5ADcAOQA3ADkAOAA5ADcAOAA3ADgAOQA3ADgANgA4ADgAOAA2ADkAOgA4ADkAOQA4ADsAOAA5ADkAOQA6ADkAOgA3ADsAOQA5ADsAOAA7ADoAOQA8ADkAOgA6ADoAOgA6ADoAOQA6ADoAOQA4ADoAOQA6ADkAOgA5ADsAOwA6ADsAOwA6ADoAOwA8ADoAPAA7ADkAOwA7ADsAOwA6ADoAOwA5ADsAOwA7ADoAPQA5ADwAPAA8ADsAOwA6ADoAPAA6ADsAOwA7ADsAPAA8ADoAPAA7ADwAPAA8ADwAOwA8ADwAPAA7ADwAOwA7ADoAOwA8ADoAPAA6ADwAPAA5ADsAOgA6ADoAOgA7ADoAOgA5ADoAOgA6ADoAOgA6ADgAOQA5ADkAOAA5ADkAOQA5ADgAOQA6ADgAOwA4ADgAOwA4ADkAOgA4ADsANwA5ADgAOQA4ADgAOQA3ADgAOQA5ADcAOgA3ADkANwA3ADkANwA3ADcANwA3ADcAOAA2ADcAOAA2ADgANwA3ADcANwA4ADgANgA4ADYAOAA2ADYANwA2ADUAOAA2ADgANgA1ADcANgA2ADYANwA2ADYANQA2ADUANQA1ADcANQA2ADYANQA3ADYANwA1ADgANQA4ADUANwA1ADcANgA3ADYANwA1ADYANgA2ADYANwA2ADUANwA1ADYANgA1ADcANgA1ADUANgA1ADYANgA1ADcANgA1ADYANgA3ADYANwA2ADYANwA4ADYANgA2ADcANQA2ADcANgA3ADcANgA2ADYAOAA3ADcANgA4ADgANgA2ADUANgA2ADYANQA3ADYANQA3ADYANwA1ADcANgA2ADYANwA1ADgANQA4ADcANwA3ADYAOAA2ADcANQA4ADYANwA3ADcANQA3ADYANwA2ADYANgA1ADUANwA0ADUANwA0ADQANwA0ADYANQA1ADcANQA1ADYANgA1ADUANwA1ADYANgA1ADQANgA0ADYANQA0ADYANgA3ADUANQA2ADYANgA1ADUANAA0ADUANgAzADUAOAA0ADcANAA3ADYANgA1ADUANwA2ADUANgA1ADcANQA1ADcAOAA3ADcANgA3ADgAOAA3ADcANwA5ADYANwA4ADcAOQA2ADgANwA5ADgANwA5ADgAOAA4ADgAOQA5ADgAOgA4ADsAOQA5ADoAOgA6ADkAOwA6ADoAOwA6ADkAOgA5ADkAOwA6ADgAOgA6ADkAOgA4ADkAOgA6ADgAOQA6ADgAOgA4ADkAOwA4ADkAOAA5ADgAOAA6ADgAOQA4ADsAOAA5ADoAOAA5ADsAOQA7ADoAOAA7ADkAOwA4ADkAOQA5ADkAOAA6ADkAOAA6ADsAOQA6ADgAOQA5ADkAOgA5ADsAOAA6ADoAOAA5ADsANwA7ADkAOgA7ADoAOAA7ADkAOQA7ADgAOwA4ADoAOQA6ADgAOgA6ADkAOQA5ADsAOAA5ADoAOAA4ADcAOgA4ADkAOAA6ADkAOQA5ADgAOwA4ADoAOwA4ADsAOAA5ADoAOQA6ADsAOQA7ADkAOgA7ADgAOQA6ADkANwA6ADcAOgA4ADgAOQA4ADcANwA5ADgANwA3ADcANwA3ADkANwA3ADcANwA3ADcANwA4ADYAOAA4ADcANwA3ADYANwA4ADYAOAA4ADcANQA5ADYAOAA4ADcANwA3ADUANwA4ADYAOQA3ADcANwA3ADcANwA3ADcANgA3ADkANwA3ADgAOAA5ADgAOQA4ADkAOQA3ADoANwA4ADgAOAA1ADcAOQA2ADgAOQA3ADcAOAA4ADcANwA4ADcANwA2ADgAOAA2ADcANwA5ADcANwA4ADcANwA5ADgAOAA2ADkANwA5ADcAOAA4ADcAOQA4ADoAOQA5ADcAOQA4ADgAOAA5ADgANwA5ADgAOAA4ADoAOQA4ADkANwA5ADkAOwA5ADsAOAA6ADkAOgA5ADoAOwA6ADgAOgA5ADoAOwA6ADoAOgA6ADgAOAA5ADgAOQA6ADcAOAA4ADkANwA4ADgANgA4ADgAOQA3ADkANwA5ADcAOQA2ADgAOAA5ADYAOAA4ADcAOAA3ADkAOAA3ADgAOAA4ADgANwA2ADYANwA3ADcANwA3ADgAOAA4ADcANwA4ADgAOQA4ADgAOQA3ADoAOQA3ADgAOQA4ADkAOQA4ADkAOQA5ADgAOAA6ADcAOQA4ADgAOQA5ADkAOQA3ADoAOAA6ADkAOgA6ADgAOgA5ADgAOgA5ADgAOgA4ADkAOgA3ADkAOQA5ADkAOgA5ADoAOQA6ADgAOgA5ADoAOQA6ADoAOQA7ADgAOQA6ADkAOAA6ADkAOAA6ADkAOQA6ADkAOgA4ADkAOAA5ADoAOAA5ADkAOAA5ADoAOQA5ADkAOwA5ADoAOwA6ADoAOwA6ADsAOwA7ADsAOgA5ADsAOQA6ADoAOgA7ADoAOgA6ADoAOgA4ADsAOwA5ADsAOgA5ADoAOQA6ADsAOQA5ADgAOQA6ADkAOgA4ADkAOQA5ADkAOAA7ADgAOQA3ADgAOQA4ADgAOAA4ADYAOAA3ADkANwA4ADcANwA4ADcANwA5ADgANwA3ADkANwA4ADcANwA5ADcANwA4ADcANwA4ADgANgA4ADgANgA3ADkANwA4ADYAOAA5ADYAOQA2ADcAOAA4ADgANwA5ADYAOQA4ADkAOQA5ADgAOAA4ADgANwA4ADkAOAA3ADgANgA3ADcANgA3ADcAOQA3ADYAOAA4ADYAOAA2ADgANwA3ADgAOQA4ADcAOAA4ADcAOQA5ADgAOQA4ADgAOgA3ADkAOQA4ADgAOQA4ADoAOAA4ADoAOAA3ADkAOQA5ADgANwA4ADgAOQA5ADcAOQA5ADkAOQA5ADoAOQA6ADkAOQA5ADgAOAA6ADoAOAA6ADcAOgA3ADkAOQA7ADgAOgA3ADkAOQA6ADcAOAA5ADkANwA5ADkAOAA6ADkAOQA6ADgAOgA6ADoAOQA7ADoAOQA6ADoAOwA6ADkAPAA4ADsAOgA6ADgAOgA6ADgAOwA4ADkAOgA4ADkAOQA4ADgAOgA5ADgAOQA5ADkAOQA4ADgAOAA4ADcAOAA5ADcAOQA3ADgAOAA4ADcAOAA4ADcAOAA6ADcAOAA2ADgANwA4ADgANgA4ADcANgA4ADcANgA5ADYANwA4ADcANgA4ADYANwA2ADcANwA3ADYANwA1ADYANgA4ADUAOAA3ADUANwA3ADYAOAA1ADYANgA3ADYANwA2ADUANgA3ADYANgA2ADUANgA3ADUANgA3ADYANwA2ADcANwA2ADYANgA3ADYANgA4ADYAOAA2ADcANgA4ADYANwA3ADgANQA4ADgAOAA3ADYAOAA3ADcAOQA3ADcAOAA3ADgANwA4ADkAOQA3ADkAOQA4ADkAOAA6ADgANwA4ADkAOAA3ADcAOgA4ADgAOAA5ADcAOQA2ADkANwA4ADcANgA4ADcANwA4ADgANgA4ADgAOAA3ADgAOAA3ADgANwA3ADkANwA4ADYAOQA5ADYAOQA3ADgAOAA4ADgANwA3ADgANwA4ADYANwA4ADgANgA2ADYANgA2ADgANAA2ADcANwA2ADQANgA3ADYANAA1ADYANQA3ADQANgA1ADcANQA1ADUANwA0ADYAMwA2ADQANQA2ADQANQA0ADUAMwA1ADQAMwA1ADQANAA2ADMANAA2ADQAMwA1ADUANAA1ADQAMwA1ADQANQA1ADQANAA0ADYANAA2ADUAMwA1ADYANAA1ADQANQA1ADQANQA1ADUANAA1ADYANgA1ADQANQA0ADYANgA1ADcANQA0ADYANQA2ADUANwA2ADcANwA1ADcANwA3ADUAOAA1ADgANgA3ADgAOAA3ADcAOAA4ADYANwA5ADgANgA5ADcANgA4ADcANwA5ADcAOAA2ADcAOQA2ADcAOAA3ADcAOQA3ADcAOQA3ADYAOQA3ADgAOAA5ADkANwA4ADgAOgA3ADgAOAA5ADoAOAA4ADkAOAA4ADcAOgA3ADgAOQA4ADcAOQA3ADkANwA5ADkANwA6ADkAOQA3ADoAOQA4ADoAOgA4ADkAOQA7ADkAOAA6ADoAOQA4ADoAOQA6ADgAOQA6ADgAOQA4ADgAOAA4ADcAOgA3ADcANwA5ADgAOAA3ADkANwA2ADgAOAA4ADgAOAA5ADgAOAA3ADkANwA4ADkAOAA4ADcAOAA4ADcAOAA3ADcAOAA4ADcANwA3ADcANgA3ADgANwA4ADYAOAA3ADkAOQA3ADkANwA4ADkANwA6ADcANwA5ADkANwA5ADkAOQA6ADkAOAA6ADoAOQA5ADoAOQA5ADkAOAA7ADgAOQA5ADoAOAA6ADkAOwA5ADkAOgA5ADkAOgA5ADoAOgA6ADgAOgA6ADsAOgA6ADoAOwA7ADoAOgA7ADkAOgA7ADkAOgA6ADsAOQA4ADkAOwA5ADcAOQA7ADoAOQA6ADgAOgA5ADoAOwA6ADoAOgA6ADwAOgA5ADsAOAA7ADgAOgA6ADsAOAA7ADkAOgA6ADsAOQA6ADkAOgA6ADsAOgA6ADoAOwA5ADoAOQA7ADoAOQA8ADkAOQA7ADkAOwA6ADoAOwA5ADoAOgA7ADoAOgA7ADsAOwA7ADoAOwA8ADoAOQA7ADoAOwA6ADoAOQA5ADkAOwA4ADkAOgA5ADkAOQA5ADgAOQA5ADkAOAA6ADkAOAA4ADoAOQA4ADkAOQA4ADkAOgA4ADoAOQA3ADsAOAA4ADoAOQA5ADkAOAA5ADoAOQA4ADkAOAA5ADgAOAA4ADoAOQA5ADgAOAA6ADgAOQA6ADgAOgA6ADoAOQA4ADkAOQA5ADoAOgA5ADoAOgA6ADgAPAA5ADoAOAA7ADkAOgA7ADkAOgA4ADsAOQA7ADoAOAA6ADoAOgA4ADoAOQA6ADoAOgA4ADsAOQA6ADoAOwA5ADoAOwA5ADgAOwA4ADoAOwA4ADsAOgA6ADsAOgA5ADsAOQA6ADkAOgA5ADsAOAA5ADkAOwA5ADoAOQA6ADsAOgA6ADsAOgA6ADoAOwA7ADoAPAA7ADoAOwA6ADoAOwA6ADoAPAA6ADsAOgA7ADsAOgA8ADsAOwA7ADwAOwA6ADsAOwA8ADwAOgA7ADwAOgA7ADwAOwA8ADsAOwA8ADoAPQA6ADsAPAA8ADsAPAA8ADwAOwA7ADwAPAA8ADsAOwA7ADwAOwA7ADsAPAA7ADsAOwA7ADoAOwA7ADwAPAA6AD0AOwA7ADwAOwA7ADwAOgA9ADsAPAA7ADsAPAA7ADsAOwA7ADwAPAA6ADsAPQA8ADsAPAA7ADsAOwA8AD0APAA6ADwAPQA9ADwAPAA8ADwAPgA8ADwAOwA9ADsAOwA8AD0AOwA9ADoAPAA8ADwAOgA8AD0AOgA8AD0AOgA8ADwAPQA7AD0APAA8AD0AOgA8AD4AOgA7ADwAPAA8ADsAPAA7ADsAPQA5AD0AOgA8ADsAOwA7ADwAOwA8ADsAOwA7ADwAPAA9ADsAOwA6ADsAOwA9ADsAOwA6ADoAPAA7ADoAOgA7ADoAPAA6ADwAOQA6ADsAOgA7ADoAPAA5ADsAOgA6ADoAOgA6ADsAOQA7ADoAOgA4ADkAOwA4ADsAOQA7ADkAOgA6ADoAOgA6ADgAOgA6ADkAOwA6ADoAOAA7ADkAOgA6ADkAOgA5ADoAOgA5ADsAOAA6ADoAOQA5ADgAOwA5ADoAOgA7ADkAOQA5ADgAOQA5ADgAOQA5ADkANwA5ADkAOAA5ADgAOAA4ADkAOAA6ADgAOAA4ADgANwA4ADcAOAA4ADkAOAA4ADgAOAA6ADgAOQA5ADgAOQA5ADkAOAA6ADcAOgA3ADkAOgA2ADoANwA4ADkAOAA4ADgAOQA3ADgAOQA4ADgAOQA4ADcAOQA4ADkAOAA4ADkAOAA3ADgAOAA4ADcAOgA5ADgAOAA5ADkAOQA3ADoAOAA6ADgAOAA4ADgAOQA4ADkAOgA6ADkAOAA6ADkAOQA6ADgAOgA4ADoAOAA5ADkAOgA5ADgAOwA3ADsAOAA6ADgAOgA6ADoAOgA6ADgAOgA6ADoAOQA6ADkAOwA5ADkAOgA5ADkAOwA5ADkAOQA6ADoAOQA6ADgAOAA7ADkAOAA4ADoAOAA5ADoAOAA4ADkAOAA4ADkAOQA5ADgAOAA4ADkAOAA6ADkAOAA5ADkAOQA5ADgAOAA5ADoAOQA3ADkAOAA4ADkAOQA3ADgAOQA4ADcAOQA3ADkANwA2ADcAOAA2ADYANwA3ADYAOAA2ADcANgA1ADgANQA3ADQAOAA2ADYANgA1ADYANwA2ADYANQA2ADUANgA1ADYANwA2ADYANgA2ADUANgA1ADUANwA0ADYANQA1ADYANQA1ADYANgAzADcANQA1ADcANQA4ADYANAA1ADcANQA2ADYANwA1ADgANQA3ADYANwA3ADYANwA2ADUANwA2ADUANgA1ADYANgA0ADYANQA1ADYANwA1ADUAOAA0ADYANgA2ADUANwA2ADYANQA4ADYANgA4ADYANwA3ADcANwA3ADYANwA3ADUANwA3ADYANQA3ADUANwA0ADYANwA1ADYANQA2ADcANAA1ADYANgA1ADUANQA0ADYANgA2ADQANgA2ADQANQA1ADYANgA0ADcAMwA2ADUANgA1ADYANAA1ADUANQA1ADUANwA1ADUANQA2ADQANQA2ADUANgA2ADYANQA2ADYANgA0ADYANQA1ADUANgA2ADYANAA3ADUANwA0ADcANQA2ADYAOAA1ADUANgA2ADQANgA1ADYANgA0ADUANQA3ADUANQA2ADYANQA2ADUANwA1ADcANgA1ADYANgA2ADcANQA4ADUANwA3ADUANgA1ADcANwA2ADQANgA4ADUANQA2ADcANgA3ADYANgA2ADcANgA2ADcANwA3ADcANwA2ADcAOAA3ADcANgA3ADYANwA3ADcAOAA2ADkANQA5ADcANgA4ADYAOQA3ADcAOAA3ADcANwA3ADcAOAA2ADcANwA3ADgANwA3ADcAOAA3ADgAOQA4ADcANwA3ADkANgA5ADgAOAA5ADcAOQA4ADgANwA3ADgANwA4ADgANwA3ADcAOAA4ADkANwA5ADgAOAA4ADkAOQA4ADkAOAA6ADkAOAA5ADgAOAA5ADkANwA4ADgAOAA5ADcANwA5ADYAOAA3ADcANgA4ADcANwA2ADgANgA4ADgAOAA2ADgAOQA4ADcAOAA4ADkANwA5ADkANwA5ADgANwA4ADcANwA4ADkANgA5ADcANwA4ADgANwA3ADYANwA4ADYANwA5ADcANwA3ADYAOAA3ADYANwA3ADYANgA2ADYANQA2ADYAOAA1ADcANwA2ADUANgA2ADcANgA0ADYANgA1ADYANgA3ADUANgA1ADYANgA2ADYANQA1ADUANAA2ADUANQA2ADYANQA1ADYANQA1ADYANwA1ADYANgA1ADUANgA2ADYANgA2ADUANgA2ADUANgA0ADYANgA0ADYANQA1ADcANAA3ADQANgA2ADUANgA1ADUANQA0ADYANgA1ADQANgA1ADUANQA2ADYANQA2ADYANQA2ADUANwA1ADcANgA1ADUANgA4ADYANQA1ADcANAA4ADYANQA2ADYANQA2ADYANQA3ADYANgA1ADYANgA2ADYANgA2ADUANQA3ADUANgA1ADUANgA0ADUANgAzADYANAA2ADUANAA2ADQAMwA1ADUANAAzADUANQA0ADQANQA2ADQANQA2ADQANQA2ADQANAAzADUANAA1ADMAMwA1ADMANQA0ADUAMwA1ADQAMwA2ADMANAA3ADQAMwA0ADUANQA0ADQAMwA2ADMANAA2ADQANgAzADYANQA0ADUANQA2ADQANgA0ADYANgA0ADYANAA2ADQANQA0ADUANgA0ADcANQA1ADYANgA2ADcANwA2ADcANgA3ADYANwA2ADcANgA3ADYANwA2ADgANgA2ADYAOAA2ADcANwA2ADcANwA3ADcANwA3ADcAOAA4ADYANwA3ADcAOAA3ADcAOAA2ADkANwA3ADYANgA3ADgANwA2ADgANwA3ADcANwA3ADcANQA4ADYANwA2ADcANgA3ADgANwA2ADgANwA5ADgAOAA2ADgAOAA3ADgAOAA3ADkAOQA3ADcAOAA5ADcAOAA4ADcANgA5ADYANgA4ADcAOAA1ADcAOAA1ADgANwA3ADYANwA2ADgANwA1ADcANgA2ADYANwA1ADUAOAA1ADgANgA3ADUANwA4ADUAOAA2ADcANwA2ADcANQA3ADYANwA2ADcANwA2ADgANQA3ADYANwA1ADYANgA3ADYANQA3ADYANgA2ADUANgA0ADgANQA1ADYANgA2ADUANQA2ADYANAA0ADUANgA0ADUANQA2ADQANQAzADYAMwA0ADUANQAzADUANAA1ADIANQA0ADQAMgA0ADQAMwA1ADQAMwAzADQANAA0ADMANAAzADUAMgA1ADQAMwA0ADQANAAzADMANQAyADUANAA1ADUAMwAzADQANAA0ADUAMwA1ADMANQAyADQANAA0ADUAMwA1ADUAMwA0ADUANAA1ADQANQA1ADQANAA0ADQANgAzADUANAA1ADUANgA0ADQANwA0ADYANAA1ADYANQA1ADUAMwA1ADYAMwA2ADQANgA1ADUANAAzADYANQA1ADQANAA2ADQANAA0ADUANQA0ADUANAA2ADMANQA1ADYAMwA1ADQANAA0ADUANAA0ADUANAA2ADQANQA1ADUANQA0ADQANQAzADMAMwA0ADIAMwA0ADIANQAzADMAMwAyADQAMwAzADUAMgAyADQANAAyADMANAAyADMAMwAyADMAMgA0ADQAMwAyADQAMwAyADMANAAzADIANAAzADEANAAyADMAMgA0ADEAMgAzADMAMgAzADAAMwAyADMAMQAzADEAMwAyADEAMgAyADIAMgAzADAANAAyADAAMwAyADEAMgAzADIAMQAzADIAMwAyADMAMgAxADIAMwAyADEAMwAyADIAMgAzADIAMgAyADIAMQA0ADIAMwAzADMAMwAyADQANAAyADMANAAzADQANQAzADQAMwAzADMAMwAzADIAMwA0ADMAMgAzADQAMwA0ADQANAA0ADYANQAzADYANQA0ADUANQA2ADUANAA3ADUANQA0ADUANAA2ADQANQA2ADQANQA1ADYANAA1ADQANQA2ADYANgA0ADUANgA3ADQANgA1ADYANgA2ADYANgA2ADYANwA1ADgANQA2ADYANwA2ADUANQA1ADUANQA1ADUANAA1ADcANQAzADYANgA0ADYANAA3ADUANgA0ADUANQA3ADQANQA1ADUANgA1ADUANgA0ADQANQA1ADUAMwA0ADUANAA0ADQANQAzADMANQAzADQANAAzADIANAAyADQANAAyADMANAAyADQAMgAyADIAMgAzADIAMQAyADIAMwAxADEAMgAyADEAMgAxADMAMAAzADAAMwAwADEAMwAvADMAMQAzADEAMQAxADAAMgAyADAAMwAyADEAMgAxADIAMQAwADMAMAAyADAAMAAyADAAMgAvADIAMAAyADAAMQAxADEAMgAyADAAMgAyADIAMgAyADEAMQAyADIAMwAxADEAMwAxADEAMwAyADAAMgAzADEAMwA1ADIAMwA0ADQAMwAyADQANAA0ADMAMwA1ADIANAAzADQANAAzADIAMwA0ADMAMwAyADQAMwAzADMANAA0ADMAMgA1ADEAMwA0ADMAMwAyADQAMwAzADMANAA0ADMANAAzADMANQA0ADMANQAzADQAMgA0ADMAMwAzADMANAAzADUANAA0ADQANAAzADUANQAzADMANQAzADQANQAzADYANQA0ADQANAA0ADQANQA1ADUANAAzADUANQA1ADIANgA1ADUANAA0ADMANQAzADQANQAzADMAMwA0ADIANQAzADMAMwAzADQAMgAzADMAMwAyADQANAAzADMAMgA0ADMANAAxADUAMwAyADQANAAyADMANQAzADMANAA0ADMANQA0ADEANAA0ADQAMwA0ADMAMwAzADIANAAxADMANQA0ADMANAAzADMANQAzADQANAA1ADQAMwA0ADMAMwA1ADMANAAzADUAMgA0ADUAMgA1ADIANAA0ADMANQAzADQAMQA0ADMAMwAzADQANQA0ADQANAA0ADQAMwAzADQANgA1ADQANAA0ADQANQA0ADMANAA1ADMANAAzADMANQAzADMANgAyADUANAAzADQAMwA0ADMAMwAzADMAMwAzADUAMwAzADQAMwAzADMAMgAyADQAMwAxADMAMgAzADIAMgAxADIAMwAyADAAMgAzADIAMQAvADEAMQAyAC8AMQAxADEAMQAxADIAMAAwADMAMAAyADAAMQAxADEAMgAxAC8AMgAwADEAMAAwADAAMQAvADIAMAAwAC8ALwAwADAAMgAvADAAMAAvADAAMAAvADEALwAwADAAMAAuADAALgAwAC4AMAAvAC4ALwAvAC4ALQAtADAALQAuAC8ALgAuAC8ALwAuAC8ALQAvAC4ALwAuADAALwAvAC4ALgAwAC0ALwAuAC4ALgAvAC4ALQAwAC8ALgAuAC0ALwAuAC4ALgAvAC0ALwAtADAALgAwAC8ALgAvADAALgAxAC4AMAAuAC8AMAAuADEALwAwAC4AMQAuADEAMAAuADAAMQAvADEAMAAxAC8ALwAxAC8AMAAyADAALwAwADEAMAAxAC8AMgAwAC8AMAAxADAAMAAxADIALwAyADAAMQAyADAAMgAwADMAMQAwADMAMAAyADEAMgAxADEAMgAyADAAMgAzADIAMAAxADEAMgAxADIALwAzAC8AMQAyADAAMgAxADIAMgAyADMAMgAxADMAMwAyADEAMQAzADMAMwAyADQAMQAzADIAMwAzADIAMwAzADQAMgAyADMAMwAyADMAMgAzADIAMwAyADIAMwAyADMAMQAzADIAMgA0ADMAMwAxADMAMwA0ADIAMQAyADMAMwAzADIAMwAyADIAMgAxADMAMgAzADMAMwAyADIAMwA0ADMANAAzADIANAAyADMAMwA0ADQAMgAzADMANAAzADUAMwA0ADIANQA0ADIANAA0ADQANAA0ADQANAA0ADYAMgA0ADYAMwA0ADQANAAzADUANAAzADMANAA1ADMANAAyADQAMgA0ADIANAAyADQAMgAyADUAMgA1ADMAMgA1ADIANAA0ADQAMwA0ADUAMwA1ADYAMwA1ADYANAA1ADMANQA0ADUANQA0ADQAMwA0ADMANAA1ADUANAA0ADQANQAzADUANAA0ADUANAAzADYAMwA3ADMANgA1ADUANQA1ADQANgA0ADUANAA1ADQANQA1ADUANQA2ADQANgA1ADQANQA1ADYAMwA1ADQANQA0ADUAMwA1ADYAMgA1ADYANQA0ADUANAA1ADYANAA1ADUANAA0ADQANQA0ADQAMwAzADMAMwA0ADQANAAyADQAMwA0ADMAMwAzADMANAA0ADQAMwA0ADIANAAyADMAMwAzADIANAAyADUAMQA0ADEANAA0ADMAMgAyADMAMwA1ADMAMwAyADQAMwAyADQAMgAzADQAMwAyADIAMgAzADQAMgAzADMANQAzADMAMwA0ADUANAA0ADUAMwA1ADUANQA1ADQANAA0ADYAMwA1ADUANQA2ADYANAA2ADUANAA1ADYANQA1ADcANQA1ADYANQA2ADQANgA2ADQANgA1ADYANgA1ADcANQA3ADUANwA2ADcANwA2ADgAOAA3ADcANwA3ADcANwA4ADYAOAA3ADcAOQA3ADcANwA5ADcANwA5ADgANwA4ADcANwA5ADgAOAA4ADcAOQA5ADcAOAA6ADcAOQA6ADcAOQA5ADkAOAA6ADgAOAA5ADkAOAA5ADgAOQA3ADgAOgA4ADgANwA4ADoANgA5ADkANwA5ADgANwA6ADcAOAA3ADkANwA5ADkAOQA4ADgAOQA4ADkAOQA4ADkAOAA5ADgANwA5ADcAOQA4ADgAOQA4ADkAOQA4ADYANwA4ADcANgA5ADYANwA1ADcANwA2ADcANgA3ADgANwA3ADcAOQA2ADkANwA3ADgANgA5ADcANwA3ADkANgA3ADcAOQA3ADkAOAA3ADcAOAA4ADcANgA5ADcANwA3ADcANwA4ADYANwA4ADgANwA4ADcANwA3ADYANwA3ADgANwA3ADgAOAA2ADgAOQA4ADgANwA3ADgANgA4ADcANwA3ADYAOAA3ADcAOAA3ADUANwA3ADYANwA3ADcANwA3ADcAOQA3ADgANwA3ADgAOQA2ADkANwA5ADkAOAA3ADgAOgA4ADgAOAA5ADYAOAA5ADcAOQA4ADgAOAA5ADcAOAA5ADgAOAA4ADgAOAA4ADkAOQA2ADgAOAA5ADYAOQA4ADcAOgA3ADkAOAA4ADkANwA6ADcAOQA5ADcAOAA4ADcAOQA4ADgANwA4ADgAOAA6ADgAOQA4ADcAOgA5ADgAOQA4ADgAOAA5ADgAOQA3ADcAOQA5ADgAOQA5ADkAOAA4ADsANwA5ADoAOgA5ADgAOgA4ADgAOQA6ADcAOgA4ADkAOAA6ADgAOgA4ADkAOQA4ADkAOgA4ADsAOAA6ADoAOQA7ADkAOgA8ADoAOgA6ADsAOgA7ADkAOgA6ADoAOQA6ADsAOgA5ADkAOgA7ADkAOgA6ADoAOgA5ADsAOQA7ADkAOwA6ADoAOgA6ADoAOgA6ADkAOgA7ADoAOQA8ADoAOwA6ADoAOwA9ADoAOwA8ADoAPAA7ADoAOgA7ADwAOwA6ADoAOwA7ADoAOwA6ADwAPAA7ADoAPQA6ADwAPAA7ADoAPQA7ADsAOwA9ADsAOwA7ADsAPAA8ADoAPAA7AD0AOwA8AD4AOgA9ADwAOwA8AD0AOwA8ADsAOwA9ADoAOwA8ADwAOgA8ADsAPQA6ADwAOwA8ADsAOwA8ADsAPAA8ADoAPAA8ADsAOwA7ADwAOgA8AD0APAA6ADsAPQA7ADsAPQA7ADsAOgA8ADoAPAA8ADoAPAA6ADwAOwA7ADoAOwA7ADsAOgA5ADsAOQA6ADsAOQA6ADoAOgA5ADsAOgA6ADsAOQA7ADoAOQA7ADkAOgA6ADkAOgA4ADoAOgA4ADoAOAA7ADkAOQA5ADcAOAA6ADgAOAA5ADkAOgA3ADgAOQA6ADgAOAA5ADgAOAA3ADkAOAA5ADgAOQA3ADgANwA5ADcANgA3ADgAOAA3ADgANwA2ADkANwA2ADcAOQA3ADYAOAA2ADgANwA3ADYANgA3ADcANgA4ADcANQA2ADcANwA2ADYANgA2ADYANwA2ADUAOAA1ADUANwA1ADUANgA2ADYANQA3ADUANgA1ADcANAA1ADYANwAzADUANgA1ADYANQA1ADUANQA1ADQANQA0ADYANAA1ADUANAA1ADYANQAzADUAMwA2ADMANQA1ADMANgA0ADUANAA0ADUANQAzADUANQAzADQANAAyADUAMwA0ADMAMgAzADQAMgAzADMANAA0ADQAMwA1ADMANQA1ADIANgAzADYAMwA0ADUANAA1ADMANAAzADQAMwAzADQAMwAyADMANAAzADMANAA0ADQAMwAxADQAMgAzADQAMgAxADMAMQAzADEAMQAyADMAMAAzADIAMAAyADIAMgAzADIAMgAyADMANAAyADMAMwAyADQAMQAzADMAMgAzADUAMgAyADMAMwAzADMANAAyADMAMQAzADIAMgA0ADIAMwA0ADIAMwAzADQANAAyADUAMwA0ADQANAA1ADQANgAyADUANAA0ADQANAAzADQANAAzADQANAAyADUANAAyADQANAA0ADUAMgA0ADUANAA1ADMANQAzADUANQA1ADQANAA2ADQANQA0ADQANAA1ADYANAA0ADYANQA0ADQANQA1ADQAMwA0ADUANQAzADQANAA1ADMANAA0ADUAMwA1ADQANAA0ADQANAA0ADQANAAzADUANAA0ADQAMwA1ADIANQA0ADMANQA0ADIANAAzADQAMwAzADQANAAzADMANQAzADIANAAyADQANAAzADQAMgA0ADQAMwAzADQANAA0ADQANAA0ADIANQAyADUAMgA0ADQAMwA0ADMAMwAyADQAMwA0ADEANAAyADMAMgA0ADIAMgA0ADEAMwAyADIAMQAzADEAMwAzADEAMgAyADMAMQAzADEAMwAyADIAMgAzADMAMgAyADMAMgAzADMAMgAyADMAMgAzADMAMQAzADMAMgAzADIAMgAyADQAMgAxADMAMwAyADIAMwAzADMAMwAzADMANAAzADIAMwA0ADMAMQAzADMAMwA0ADMAMwAyADIAMwAyADQAMgAxADMAMgAyADMAMgA0ADMAMgA0ADIAMwAzADMAMgAzADIAMgA0ADQAMgAzADIAMwA1ADMAMwAzADMAMwAzADQAMwAzADIAMgAyADQAMgAzADEAMwAzADAAMwAxADMAMgAxADIAMwAxADMAMgAzADIAMwAxADMAMQAyADAAMgAyADEAMgAyADEAMgAyADIAMQAxADEAMQAyADAAMgAxADIAMAAyADEAMAAwADEAMQAwADEAMgAwADEAMAAxADEAMAAyADAAMAAxADEAMgAxADIAMAAyADEAMQAxADEAMQAyADAAMQAyADAAMQAwADEAMgAwAC4AMAAxAC8AMAAwAC8ALwAwADEALwAwADAALwAwADEALgAyADEALwAxADAAMQAxAC8AMgAwADAAMAAxADEAMgAwADIALwAyAC8AMQAyADEALwAxAC8AMgAwADAAMAAyADAAMQAwADAAMAAxADAAMAAwADAAMQAwADEAMQAwADEAMAAxADEAMgAyADIAMwAxADEAMgAzADAANAAyADEAMwAyADEAMQAxADIAMgA0ADEAMgAzADIAMwAyADIAMwAyADEAMgAzADIAMQAzADMAMgAyADIAMgAzADMANAAyADMAMgAzADQAMgAzADEANAAzADIAMwAzADMAMwAzADMANQAyADMAMwA0ADIANAAyADMANAAxADMAMwAzADIAMwA0ADMAMgAxADMANAAyADQANAAyADMANAAzADUANAAzADMANAA2ADMANAA0ADMAMwA1ADQAMwA1ADIANQAzADUANAA0ADQAMwA0ADMANAAzADMAMgA0ADMAMwAzADMAMQAzADMAMQA0ADMAMgAyADMAMgAxADQAMQAyADMAMQA0ADEAMQAyADEAMQAxADMAMAAxADEAMQAxADIAMwAxADEAMQAxADAAMgAxADMAMAAyADIAMQAyADIAMgAxADIAMQAyADAAMgAxADMAMQAxADAAMQAzADAAMAAxADIAMgAwADMAMAAyADEAMwAyADIAMgAxADMAMQAxADMAMwAxADMAMQAxADMAMAAyADMAMwAxADIAMgAzADIAMgAyADMAMQAzADEAMgAwADIAMgAyADEAMwAxADIAMgAyADIAMQAzADEAMgAyADIAMgAyADEAMwAyADIAMgAxADIANAAyADEANAAyADEAMgAzADMAMQA0ADEAMwAyADIAMwAxADMAMwAyADIAMgAyADMAMgAyADEAMwAzADEAMwAyADEANAAxADIANAAxADIANQAzADMAMgA0ADMAMgAzADIAMwAyADMAMwAzADEAMgAyADAAMwAyADIAMwAzADQAMwAzADQAMgA0ADMANQAzADIANAAzADMANAA0ADMANAA0ADIANAAyADUAMQA0ADIAMwAyADQAMgAyADEANAAxADMAMwAzADEAMgAzADQAMwAzADUAMwAzADQANAA1ADIANAAzADUAMwAzADMAMwAzADQAMwAxADUAMwAyADMAMQA0ADIAMwAyADMAMwAyADQAMQAzADIANAAyADQAMgA0ADIAMwAzADQAMwAzADIAMwAzADQAMgAzADMANAAyADIAMwAzADQAMgAyADIAMwAyADQAMwAyADQAMwAyADQAMwA0ADMANAA1ADQANQAzADQAMwA1ADQAMwA2ADQAMwA1ADMANQAyADUANAA0ADUANAA0ADQANAA2ADQANQA2ADMANgA0ADQANQA0ADUANQA1ADQANQA1ADMANgAzADUANQA0ADYAMwA0ADQANQA0ADUAMwA1ADMANgAyADQANQAzADQAMwA1ADMANQA1ADMANAAzADMANQAyADQANAA1ADMAMwAzADMANAAzADQAMwA0ADIAMwA0ADMAMgA0ADUAMgA0ADMANAAyADQAMgAzADMAMgA0ADMAMwAyADQAMwA0ADMANAAzADQAMgA1ADMAMwA0ADMAMwAzADQAMgA0ADMANQA0ADQAMgA0ADQAMwA0ADQANAAzADUAMwAzADQAMwA0ADMAMwA1ADMANAA0ADQANQA0ADQANAAyADQANAA1ADQANAA0ADYANAA0ADQANQA1ADMANgA1ADMANQA1ADUANAA2ADUANAA1ADQANgA1ADUANgA1ADYANQA2ADUANQA3ADUANgA1ADUANQA1ADYANAA3ADYANAA3ADUANQA2ADYANgA1ADYANgA2ADUANgA3ADYANgA2ADYANgA2ADcANgA2ADUAOAA1ADcANAA3ADcANQA3ADUANgA3ADYANgA1ADcANgA1ADYANgA4ADYANQA3ADcANwA2ADcAOAA2ADkANgA4ADcANgA3ADgANwA3ADYANwA4ADcANwA2ADYANgA3ADcANwA2ADcANwA3ADcANwA3ADYAOAA2ADkANQA3ADgAOAA3ADkANgA3ADkANgA3ADYANwA4ADYANwA3ADcANwA2ADcANwA3ADcANwA2ADcANwA4ADUANwA4ADYANwA4ADcANQA4ADYANgA3ADUANwA2ADYANwA1ADYAOAA1ADYANwA3ADYANwA3ADUANwA3ADcANgA2ADgANwA1ADcANgA2ADUANwA2ADYANgA3ADYAOAA2ADcANwA2ADcANwA3ADcANwA2ADgANgA2ADYAOAA1ADcANgA4ADcANgA3ADcAOAA3ADgANwA4ADcAOQA3ADgAOAA3ADgAOAA6ADcAOAA5ADkAOQA4ADgAOAA5ADcAOQA3ADoAOQA4ADkAOAA6ADkAOAA6ADoAOQA4ADkAOwA4ADgAOQA6ADkAOQA5ADkAOAA5ADkAOQA5ADgAOgA4ADkAOAA6ADgAOgA4ADgAOQA5ADgAOAA4ADgAOAA5ADgAOgA2ADkAOQA5ADcAOQA4ADcAOQA5ADYAOAA4ADkANgA5ADgANwA4ADgAOAA5ADgAOAA5ADcAOgA3ADkANwA4ADgAOAA3ADgAOAA4ADYAOAA4ADcANQA3ADcANQA2ADUANQA3ADYAMwA2ADUANgA0ADYANgA0ADYANQA2ADUANQA2ADUANQAzADYANAA1ADQANgA0ADQANAA0ADQANQA0ADUANAAyADUALwAwAC0ALwAxADQAMAAxADIAMgAzADUAMQAyADQAMwA3ADcANQA1ADYANQA4ADgAOQA3ADYAOAA6ADwAOAA5ADgAPAA+AD0APQA/AD4APwA+ADwAPQA7ADkAOwA4ADkANgA0ADQAMwAyADMAMQAyADIANAA1ADQANAA1ADMANwA0ADcANQA0ADYANAA0ADQANAAyADIAMgAxADEAMQAwADIAMwA0ADQANwA4ADkAOQA9ADwAPwA+AD0APwA+AD4APQA+AD0AOgA6ADkANwA0ADQANAA0ADIANAA2ADMANgA0ADYANwA4ADYAOgA6ADwAOgA9ADwAOwA+ADsAOwA7ADkAOQA4ADgANwA2ADUANQAzADQAMwAyADMANAA1ADUANQA1ADgAOQA4ADsAOAA6ADsAOgA3ADkAOAA2ADcANgA1ADQANAAyADMAMwAyADQAMgA1ADUANwA3ADcAOgA6AD0AOgA9ADwAOwA8ADoAOgA6ADoAOQA4ADgANgA3ADUANgA2ADQAMwA0ADMANQAyADQANAAzADYANQA1ADcANQA3ADgAOAA6ADkAOgA5ADoAOgA5ADkAOAA2ADkANQA2ADYANgA1ADUANQA1ADYANAA3ADQANwA0ADYANwA3ADcAOAA4ADcAOAA5ADgANwA5ADcAOAA2ADgANgA1ADUANwA0ADMANAA0ADMANQA1ADQANgA3ADgAOAA4ADkAOAA6ADsAOgA5ADgAOQA5ADgANwA2ADYANgA0ADQANQAzADMANAAzADUANAA1ADUANQA3ADcANgA4ADgAOQA5ADoAOAA5ADkAOAA5ADkAOAA3ADYAOAA2ADUANQA1ADYAMwA3ADQANAA1ADYANAA2ADQANAA1ADQANgA0ADMANQA0ADYANQAzADYANQA0ADMANgA0ADYANAA1ADcANgA1ADcANAA3ADUANQA0ADUANAA0ADQAMwA0ADMAMwAyADQANAAyADQAMwAyADUAMwA0ADUANAA1ADMANgA1ADQANgA0ADcANQA1ADQANQA2ADQANQA0ADUANQA0ADUAMwA1ADYAMwA1ADQANQA1ADQANAA2ADUANAA2ADUANQA3ADUANQA1ADQANgAzADUAMwA0ADQAMwAzADIAMwA0ADMAMwA1ADIANAA0ADMAMwA1ADQAMgA2ADQAMwA2ADQANAA1ADQANAA1ADQANgA0ADUANQA2ADcANQA2ADYANgA1ADcANQA3ADUANQA3ADYANwA1ADYANwA4ADcANgA4ADgAOAA4ADkAOwA5ADgAOgA4ADkAOAA5ADYAOgA4ADcAOAA5ADkANwA5ADoAOQA7ADkAOQA5ADoAOgA6ADkAOQA5ADsANwA5ADgAOgA4ADcAOAA3ADgAOAA4ADgANwA5ADYAOAA5ADcANwA5ADgANwA6ADgAOQA4ADkAOAA4ADkAOQA4ADgAOQA6ADgAOQA4ADgAOQA5ADoAOgA6ADgAOgA7ADsAOQA6ADsAOwA5ADwAOQA7ADgAOgA6ADkAOgA5ADkAOQA5ADgAOQA6ADgAOAA6ADgAOAA5ADkANwA4ADcAOAA4ADcAOQA3ADgAOAA2ADkANgA4ADcANgA2ADgANwA2ADYAOAA1ADgANQA3ADYANgA3ADYANQA3ADQANQA2ADQANQA2ADUANgA1ADYANgA2ADYANwA1ADgANgA3ADYANwA3ADcANwA2ADcANgA3ADcANgA3ADcANwA3ADkANwA5ADYAOQA4ADcAOQA3ADcAOQA3ADYAOQA2ADcANwA3ADcAOAA3ADYANgA2ADgAOAA2ADgAOAA3ADcAOAA4ADgANwA3ADYAOAA4ADkANwA4ADgAOAA6ADcANwA4ADkAOAA3ADoAOAA3ADkANwA3ADgAOQA4ADgAOQA4ADgAOAA5ADkANwA5ADcAOQA4ADoAOAA4ADsAOQA4ADoANwA5ADkAOQA5ADgAOAA6ADgAOAA4ADoAOAA4ADkAOAA3ADkAOQA4ADYAOAA4ADgANwA4ADcAOQA5ADcAOQA4ADkAOAA5ADgAOQA3ADkAOAA6ADkAOQA6ADkAOQA7ADkAOQA6ADkAOgA6ADoAOgA8ADsAOgA6ADkAOAA7ADgAOAA6ADgANwA5ADcAOQA3ADoANwA4ADkAOgA4ADkAOwA6ADkAOwA5ADoAOQA7ADkAOQA5ADgAOAA4ADkAOAA3ADcAOAA6ADcAOAA6ADcAOgA4ADgAOAA6ADkANwA7ADcAOQA3ADkAOAA4ADgAOQA4ADcAOQA5ADgANwA4ADkAOQA4ADoANwA5ADoAOQA5ADkAOgA5ADgAOwA5ADkAOgA8ADkAOgA5ADoAOQA7ADkAOAA5ADkAOQA6ADgAOQA5ADkAOAA5ADgAOQA5ADoAOwA4ADsAOQA5ADoAOQA6ADoAPAA6ADkAOgA5ADoAOgA5ADoAOAA5ADsAOQA4ADoAOQA7ADgAOQA7ADkAOQA6ADoAPAA5ADoAOgA6ADkAOwA5ADkAOQA5ADkAOQA4ADkAOQA4ADkAOQA4ADcAOAA5ADkANwA6ADgANwA6ADkAOAA3ADoANwA4ADoANwA3ADgAOAA4ADYANwA3ADcAOAA2ADcANgA4ADYANwA3ADYANQA4ADUANgA4ADUANwA2ADUANgA1ADcANQA1ADUANQA1ADUANgA1ADQANAA1ADMANAA0ADUAMwA0ADIANAA1ADMAMwA0ADUAMgAzADMANQAyADUAMwA1ADMAMwAzADQAMgAzADQAMwAzADMAMwA0ADUAMgA1ADMAMwAyADQAMwAzADUAMwAyADMANQAxADQAMwA0ADMANAAzADUAMwA0ADUANAA1ADQANQA2ADMANQA1ADQANAA1ADQANAA0ADMANAA0ADIAMgAzADQAMgA0ADIANAAzADMAMgA0ADMANQA1ADQANAA0ADUAMwA0ADMAMwA0ADMANQAzADQANAAzADMAMwA0ADUANAAzADYAMwA0ADQANQA0ADYAMwA1ADQANAA1ADMANQA0ADMANQA0ADQANQAzADUANAA0ADMANAA0ADQANAA1ADMANAA2ADMANAAyADQANQAzADQANAA0ADMANQA0ADQANAAzADMAMgAzADMAMgA0ADMAMQAzADUAMwAyADQANAAzADQANQA0ADQANAAzADUANAA0ADQAMwA0ADQANAA1ADQANAAzADMANAAyADQANQAyADUAMwA0ADIANAA0ADMANAA0ADMAMwA0ADUAMwA1ADUANQA0ADQANQA0ADQANAA0ADQANQAzADUAMwA0ADIANAA0ADIAMwAzADMANAAzADMANQAzADQANAA0ADQAMwAzADUANQA0ADUANQA1ADQANQA0ADQANAA1ADQAMwA1ADMANAA1ADMANAAyADUAMgA1ADQAMgA1ADUAMwA0ADQAMwA1ADQAMwA1ADUANgAzADYANgA0ADUANAA2ADUANAA1ADUANQA1ADYAMwA2ADUANQA1ADcANgA0ADcANQA1ADcANQA1ADYANAA1ADQANQA0ADQANAA0ADQANAAzADQANAAyADYAMwA0ADYANAA0ADUANAAzADQANQAzADUANAA1ADMANQA1ADMANQA1ADQAMwA1ADMANAA1ADMANQAyADQANAAyADQAMgA0ADIANAAzADMAMwAzADUAMgA0ADMAMwAzADMAMwA1ADQAMgA0ADUAMwA0ADIANAA0ADIANAA0ADMAMgA1ADMAMgA0ADMAMwAxADMAMwAzADMAMQAzADEAMwAyADMAMQA0ADMAMQA0ADMAMwA0ADIAMwAzADQAMwAyADUAMgAzADIAMwAzADMAMgA0ADIAMgAzADQAMwAzADMAMwAzADQANQAzADQANAA1ADMANAA1ADQANAA1ADQANQA1ADUANAA0ADUANAA0ADUANgAzADUANAA1ADYANAA0ADQANgA0ADQANgAzADYANAA3ADUANQA2ADQANgA2ADUANgA0ADgANQA1ADYANgA1ADYANQA2ADcANQA2ADcANwA1ADYANwA4ADYAOAA4ADYAOQA3ADcAOAA3ADkANgA6ADgANwA4ADcAOQA3ADkAOQA3ADgAOAA5ADcAOQA3ADcAOAA5ADkAOAA3ADgAOAA3ADgAOAA5ADgAOQA4ADcAOQA4ADcAOAA4ADkAOgA5ADkAOQA4ADcAOgA4ADkAOAA6ADcAOgA4ADoAOAA6ADgAOQA6ADkAOQA6ADkAOwA5ADkAOwA4ADoAOQA5ADsAOQA4ADoAOAA5ADkANwA6ADkAOgA4ADoAOgA4ADkAOQA6ADcAOAA6ADgAOQA5ADcAOgA4ADoAOQA6ADkAOQA7ADoAOAA5ADoAOQA6ADkAOgA5ADoAOQA5ADgAOAA7ADkAOAA7ADkAOgA7ADkAOwA5ADsAOwA5ADoAOwA7ADoAOwA6ADsAOwA7ADoAOgA6ADsAOwA6ADsAOgA7ADsAOgA7ADsAOwA7ADwAOwA7ADsAOwA8ADsAPAA7ADoAPAA6ADoAOwA5ADsAOwA7ADoAOgA7ADsAPAA7ADsAOwA6ADsAOwA6ADwAOwA7ADwAOQA8ADsAPAA7ADsAPAA6ADwAPAA6ADwAOwA6ADoAPAA7ADsAOwA7ADoAOwA7ADsAOgA8ADsAOwA7ADsAOgA8ADsAPAA7ADsAPQA7ADoAPAA7ADoAOwA8ADsAOQA8ADoAOgA4ADsAOAA5ADsAOAA5ADoAOAA5ADsAOAA6ADcAOwA4ADoAOQA5ADgAOgA4ADkAOQA4ADkAOAA3ADoANwA5ADgAOQA5ADcAOAA4ADgAOAA4ADgAOAA4ADcAOQA3ADgANgA4ADgAOQA3ADcAOAA3ADgANwA3ADcANwA2ADYAOAA2ADYANgA1ADcANQA2ADUANQA2ADcANQA3ADUANQA2ADcANgA3ADUANwA2ADYANwA2ADcAOAA4ADcANgA2ADYAOAA3ADQANwA1ADYANgA2ADgANgA1ADYANgA2ADcANgA1ADYANgA1ADcANgA3ADUANwA3ADYANgA3ADUANgA3ADUANgA3ADcANwA3ADUANwA2ADcANgA3ADUANgA3ADUAOAA1ADcANwA1ADcANgA3ADUANgA2ADgANQA3ADgANwA3ADYANwA2ADgANwA4ADYANwA3ADgAOAA3ADYANwA3ADgANgA5ADYANwA3ADcANwA4ADYANwA3ADYANwA2ADYANwA3ADYANgA3ADgANQA3ADYANwA4ADUAOAA1ADcANwA3ADcANwA4ADUANwA2ADgANwA2ADgANgA3ADcANgA2ADcANgA2ADgANgA3ADUANwA1ADcANQA3ADYANgA2ADgANgA3ADUANwA3ADcAOAA3ADcAOAA2ADcAOAA1ADcAOAA3ADcANgA2ADgANgA1ADgANgA3ADUAOAA2ADcANgA2ADgANQA3ADgANwA1ADgANwA4ADYAOAA3ADYANwA5ADYANwA4ADcANwA4ADcAOQA4ADYANwA4ADgANwA3ADYAOAA3ADcANwA2ADgANQA4ADUANwA3ADcANwA4ADcANwA2ADgANgA4ADcAOQA2ADgAOQA2ADgAOQA3ADcANwA3ADgANgA5ADYANwA4ADgANwA3ADkANgA3ADkANwA3ADgANwA5ADgANwA2ADgAOQA4ADgANgA4ADgANwA4ADgAOQA3ADcANwA3ADcANwA4ADYANwA3ADcANwA4ADcAOAA3ADgANwA3ADkANwA3ADYANgA4ADcANwA5ADYAOAA3ADYAOAA3ADcAOAA2ADcANgA3ADcANwA3ADgANwA4ADcANwA2ADcANwA2ADgAOAA3ADcANgA5ADYANwA3ADYAOAA3ADYANwA4ADgANwA1ADcANwA3ADYANwA3ADUANwA2ADcANwA3ADUANwA4ADgANgA4ADcANwA3ADYANgA1ADcANwA2ADcANwA3ADcANwA2ADcAOAA2ADgANgA4ADcAOAA3ADcANgA4ADYAOAA4ADYAOAA4ADcAOAA5ADYAOAA4ADYAOAA5ADcAOAA3ADgAOAA5ADgAOAA6ADgAOQA5ADkAOwA4ADgAOgA4ADkANwA5ADkAOAA4ADoAOAA6ADcAOgA6ADoAOAA4ADoAOQA5ADkAOQA4ADkAOQA5ADkAOgA4ADkAOgA5ADkAOQA5ADgAOwA5ADkAOQA5ADkAOAA5ADgAOgA4ADkAOQA4ADcAOAA5ADgAOAA3ADkANwA4ADgANwA6ADcANwA5ADcAOQA3ADgANwA6ADcAOAA3ADgANwA4ADcANgA2ADgANQA3ADYANgA3ADcANQA3ADcANgA3ADQANwA2ADcANgA4ADUANgA3ADYANwA2ADYANgA2ADcANwA1ADcANwA2ADYANwA3ADYANgA2ADcANwA1ADYANwA3ADYANgA2ADUANwA1ADUANQA2ADUANQA0ADUANgA2ADYANAA2ADYANgA2ADUANAA1ADYANAA2ADYANQA1ADYANgA1ADYANAA1ADYANQA1ADcANQA2ADUANgA2ADUANgA2ADUANQA3ADYANQA2ADYANQA3ADYANgA2ADUANwA3ADYANQA2ADcAOAA2ADcANQA3ADcANwA2ADYANQA2ADcANQA3ADUANwA2ADYANwA0ADYANgA0ADgANQA1ADUANgA2ADUANgA0ADYANAA1ADQANQA0ADUANAA0ADUANAA2ADUANQA0ADUANQA1ADQANQA0ADUANgAzADYAMwA1ADUANAA1ADUANAA1ADUANQA1ADQANAA0ADYANAA0ADQANgAzADYANAA1ADUANQA1ADUANQA0ADUANgA1ADUANQA0ADQANQA1ADUANAA0ADMANAAzADUAMwA0ADUANQA0ADQANQA1ADMANAA3ADMANgA1ADQANQA3ADUANQA2ADQANAA3ADQANAA2ADUANAA3ADUANQA2ADYANQA2ADYANgA2ADYANQA2ADUANwA2ADUANgA1ADUANgA2ADUANgA2ADUANQA2ADYANgA2ADQANQA2ADUANQA2ADYANQA3ADQANwA2ADUANgA1ADcANgA3ADcANgA3ADgANwA2ADkAOAA2ADgANwA3ADkANgA3ADgAOAA2ADgAOAA4ADcAOAA4ADgAOQA4ADcAOgA3ADkAOAA5ADcAOwA5ADcAOQA6ADkAOQA5ADoAOgA5ADkAOwA4ADoAOAA7ADgAOQA5ADoAOgA4ADoANwA7ADgAOQA5ADoAOAA6ADkAOAA5ADcAOQA5ADoAOAA5ADkAOgA4ADgAOgA4ADgANwA5ADgAOgA4ADgAOAA3ADcAOAA4ADYAOQA2ADcAOAA2ADcAOAA2ADgANgA2ADcANwA2ADgANgA4ADcANgA3ADcANwA2ADgANQA2ADgANQA2ADUANgA2ADUANwA1ADYANQA3ADYANQA1ADYANQA1ADUANgA1ADUANQA2ADUANQA2ADQANgA0ADYANAA1ADYANAA1ADUANAA2ADQANQA0ADUAMwA2ADQANQAzADYAMwA2ADMANAA1ADQANAA1ADQANQAyADQANAA0ADMANQAzADQANAAzADUANAAzADQAMwAzADMANAA1ADIANQA0ADQANAA0ADQANAA0ADUANAA1ADQAMwAzADYANAAzADQAMwA1ADQAMwAyADUAMwA0ADYANAA0ADQAMwA1ADUANAA0ADQANAA1ADMANQA0ADQANAA1ADIANAA1ADMAMgA0ADIANAAzADUANAA0ADQANAA1ADMANAAzADUANAA0ADUANAAyADUANAAzADMANAAzADUANAAzADMANAA1ADIAMwA1ADQAMgA1ADMAMwA0ADQANAA1ADMANAA0ADQAMwAzADMANAA0ADQAMwA0ADQAMgA0ADIANAAyADMAMwAyADMANAAxADQAMgAzADQANAAzADQANAA0ADIANQAzADQAMwAzADQAMgA1ADMAMwA0ADIANAAzADIANAAzADMANAAzADIAMgA0ADEANAAzADIAMgA0ADIAMwAzADIAMwAzADQAMwAzADIANAAyADMAMwA1ADIANAAzADQAMgAzADMANQAxADQAMwAxADQAMwAyADMAMwAzADIAMgAzADQAMgAzADIAMwAzADQAMwAyADMANAAyADUAMgA1ADMAMwAzADMANAA0ADQAMwAzADMANQA0ADQAMgA1ADQAMwA1ADQAMwAzADYANAAyADQANAAzADQANAAzADMANAAyADUAMwAzADMAMwA0ADIAMwAzADQANAA0ADMANAAyADQANAAzADMAMwA1ADQAMwA1ADMANAAzADIANAAzADMAMwA0ADMAMwA0ADMAMwAzADMAMgA0ADMAMwAyADIAMwA0ADMAMwAzADEANAAzADIAMwA0ADMAMQA0ADIAMgA0ADIAMwAyADQAMgAzADIAMwAzADIAMgAyADIAMQAyADEAMwAxADIAMQAxADEAMQAyADIAMwAyADIAMAAyADIAMgAyADMAMgAyADQAMQA0ADEANAAyADIAMwAyADMAMQA0ADIAMQAzADIAMwAzADMAMgAzADIANAAyADMAMgA0ADEAMwAzADQAMwAzADIAMwAyADUAMQAzADMAMwA0ADMAMwAzADMAMwAyADMAMwAzADMAMwAxADQAMgA0ADEAMwA0ADQANAAyADMANAAzADEAMwAyADQAMgA0ADMAMwAzADMANAAzADMAMwA0ADQAMgA1ADMANAAzADIANAA0ADIAMwAzADMANAAyADEANAAxADQAMgAzADIAMQAyADMAMwAyADQAMQA0ADMAMgA0ADEAMgAzADEAMwAzADIAMgAxADIAMgAyADIAMgAyADMAMAAyADMAMgAxADIAMQAxADIAMAAxADIAMQAxADEAMgAvADEAMgAxAC8AMwAxADAAMQAxADEAMQAyADEAMQAxADEALwAxADMAMAAyADAAMQAxADAAMgAxADEALwAxADAAMgAwADIAMAAxADAALwAxAC8AMAAvADEALwAwAC8AMAAwAC8AMAAyAC8ALwAxAC8AMAAxADAALwAxADEALwAxAC4AMAAxADEAMAAvADEALwAxADAAMQAwADEAMgAwADEAMAAxADEAMQAxADEAMQAyADEAMQAxADAAMgAyADEAMQAzADIAMQAzADEAMwAyADEAMwAyADMAMgAzADIANAAxADQAMwAyADMAMgAzADQAMwAzADIAMQA0ADEANAAxADMAMwAxADQAMwAyADQAMwA0ADIAMwA0ADQAMwAzADUAMwAzADUAMwAyADQANAA0ADMANAAyADUAMwAzADQAMgAzADMANAAzADMAMwAzADMAMwAzADMANAAyADQANQAyADQANQAyADQANAAzADQANQA0ADMAMwA1ADIANQA0ADMANAA0ADMAMwAzADQANAA0ADMANAA0ADMAMwA0ADIANAAzADQANAAzADIANAAyADQANQAyADMAMwAzADUAMgAzADQAMwA0ADMAMwAzADQAMwAzADQAMwAzADQAMgA0ADIAMwA1ADQAMQA0ADQAMwAzADMANAAyADMANAAyADMAMgAzADMANAAyADQAMgAzADUAMgA1ADIAMwA0ADMAMgAzADIANAAyADMANAAzADQAMQA0ADIANAAyADIANAA0ADIAMwA1ADMAMgA1ADIAMwA0ADQAMgA1ADQAMwAzADMAMgA0ADMAMgA0ADMAMwAzADIAMwAzADQANAAzADMANAAzADQANQAzADQANQA0ADUAMwA0ADIANQAzADIANAA0ADMANAA0ADMAMwA0ADMAMwA1ADQANAA1ADMANAA0ADYAMwA1ADQANAA0ADYANAA2ADMANAA3ADQANgA2ADMANwA0ADUANQA2ADUANAA3ADQANwA2ADQANgA2ADYANgA2ADYANAA3ADYANQA2ADcANgA3ADcANgA3ADUANwA2ADYANwA4ADUANwA2ADYANgA1ADUANwA1ADYANQA2ADQANwA1ADYANAA3ADQANwA2ADUANQA3ADYANgA0ADYANgA2ADYANwA2ADcANgA2ADcANQA1ADgANQA2ADYANgA2ADYANgA3ADYAOAA0ADcANwA2ADgANgA3ADYAOAA3ADYAOAA2ADYANwA3ADYANwA3ADcANwA4ADUAOAA1ADcAOQA3ADYANwA2ADcANgA3ADYANgA1ADUANgA2ADYANQA3ADYANgA1ADYAOAA2ADcANgA2ADUANwA3ADcAOAA2ADYANgA3ADcANwA2ADUANgA2ADcANgA2ADcAOAA3ADcAOAA4ADcAOAA2ADgANwA4ADgAOAA3ADgAOQA3ADkAOAA3ADkANwA5ADcAOQA4ADkAOAA4ADoANwA5ADgAOQA4ADkAOQA4ADkAOgA5ADgAOgA5ADkAOwA4ADoAOgA4ADoAOgA5ADgAOgA4ADsAOAA7ADgAOQA5ADoAOAA5ADoANwA5ADkAOQA4ADoAOgA6ADoAOgA5ADgAOgA6ADkAPAA4ADsAOgA6ADwAOQA8ADgAOwA7ADoAOQA7ADoAOgA7ADgAOgA7ADkAOQA5ADkAOwA5ADoAOAA6ADcAOQA5ADkAOAA6ADkANwA6ADkAOAA4ADkAOAA5ADkAOQA6ADkAOQA5ADoAOQA5ADkAOgA4ADgAOQA5ADoAOQA5ADgAOQA5ADkAOQA4ADkAOQA5ADgAOAA3ADgAOAA5ADgANwA3ADkANwA4ADkANgA6ADgANgA5ADgANwA3ADkAOAA4ADcAOQA4ADkANwA6ADcAOgA4ADcAOQA6ADgAOQA4ADoAOAA6ADkAOQA3ADoAOAA7ADkAOgA4ADkAOQA5ADkAOQA6ADoAOgA6ADkAOwA6ADkAPAA6ADsAOgA7ADkAPQA7ADoAPAA7ADwAOwA7ADoAOwA7AD0AOwA5ADsAPAA7ADsAOgA8ADkAOgA6ADwAOgA5ADsAOQA7ADsAOQA7ADkAOwA5ADwAOgA6ADsAOQA7ADoAOwA7ADkAOgA8ADsAOgA7ADoAOwA7ADkAOwA7ADsAOQA7ADoAOgA6ADkAOgA5ADsAOgA5ADsAOQA6ADsAOQA6ADsAOgA5ADkAOQA7ADoAOgA6ADgAOQA5ADsAOQA6ADoAOQA5ADsAOAA6ADoAOQA6ADoAOQA6ADsAOQA4ADoAOgA3ADoAOQA6ADoAOgA5ADoAPAA5ADoAOQA7ADkAOQA5ADoAOAA4ADkANwA5ADgANwA5ADgAOgA4ADgAOgA5ADcAOQA5ADoAOAA5ADgAOAA5ADkANwA6ADcAOQA6ADgANwA4ADgAOAA3ADgAOQA3ADgAOAA5ADgAOAA4ADcANwA3ADcAOAA5ADgANwA4ADYAOQA3ADkAOQA3ADgAOQA3ADkAOgA5ADgAOQA5ADgAOgA4ADkAOgA6ADkAOQA4ADoAOQA7ADkAOQA7ADkAOQA6ADkAOgA6ADsAOAA6ADoAOAA5ADkAOQA6ADkAOQA6ADsAOgA7ADoAOgA6ADkAOgA8ADoAOQA7ADoAOwA7ADwAOwA7ADsAOwA8ADsAOwA8ADwAOgA8ADwAPAA6ADsAPQA7ADsAOwA8ADwAOwA8ADsAPQA6AD0AOwA8ADsAOwA9ADsAOwA8ADwAOgA8ADsAPAA7ADoAPAA8ADoAOwA7ADwAOQA8ADsAOgA6ADsAOgA5ADsAOQA7ADkAOgA7ADkAOQA7ADkAOwA6ADkAOgA7ADkAOwA5ADoAOQA6ADoAOgA7ADkAOgA5ADsAOAA4ADoAOgA5ADkAOQA6ADkAOQA6ADsAOQA5ADkAOAA8ADkAOQA6ADgAOwA6ADkAOQA4ADkAOgA4ADkAOgA5ADgAOgA6ADgAOQA6ADoAOQA6ADsAOQA6ADkAOwA6ADsAPAA6ADoAOwA8ADsAOwA6ADsAPAA6ADwAPAA7ADoAPAA9ADwAOwA8ADoAPQA6ADwAPAA8AD0APAA8AD0APAA8ADoAPQA8ADwAOwA9ADwAOwA8ADwAPAA8ADoAPAA9ADwAPAA7AD0APAA7ADwAPQA8ADoAPQA7AD0APAA8AD0AOwA7AD0AOwA9ADsAPQA7ADoAPAA7ADwAOwA6ADsAPQA6ADwAPAA6ADwAPQA6AD0AOwA8AD0AOgA8AD0AOwA8ADsAPAA6AD0AOwA8ADsAPQA6AD0AOgA8ADwAOwA7ADwAOwA8ADwAOgA9ADsAOgA7ADsAOwA8ADsAPAA6AD0AOgA8ADsAOwA5AD0AOwA6ADsAPAA6AD0AOQA8ADsAOwA7ADwAOgA8ADwAOgA6AD0AOQA6ADsAOwA7ADsAOwA6ADsAOwA5ADsAPQA7ADoAPQA7ADoAPAA7ADsAPAA6ADsAPAA7ADoAOwA5ADoAOwA5ADoAOAA7ADkAOQA4ADoAOgA7ADoAOQA5ADkAOwA5ADkAOQA5ADoAOwA6ADgAOgA5ADwAOgA6ADkAOQA7ADoAOQA5ADsAOgA6ADkAOgA4ADkAOgA5ADoAOAA6ADoAOQA6ADsAOQA6ADkAOQA5ADkAOgA4ADkAOgA6ADkAOAA6ADgAOQA6ADoAOgA4ADoAOAA6ADgAOQA5ADoAOQA4ADkAOQA5ADkAOQA4ADkAOAA6ADkAOQA5ADoAOAA6ADkAOQA6ADoAOQA5ADgAOgA4ADoAOAA4ADoAOQA5ADgAOQA6ADoAOQA4ADsAOQA4ADkAOgA5ADkAOQA5ADoAOgA3ADoAOAA5ADcAOQA3ADkAOQA5ADgAOQA4ADkAOAA5ADgAOAA5ADoANwA5ADgAOQA4ADkAOgA5ADgAOQA5ADgAOQA4ADsAOQA5ADsAOQA6ADsAOgA6ADoAOQA7ADkAOgA5ADsAOQA5ADkAOgA6ADkAOgA7ADoAOQA7ADkAOgA6ADoAOwA6ADoAOwA6ADoAOwA7ADsAOwA5ADsAOgA7ADsAOgA7ADsAOQA7ADsAOgA7ADsAOQA8ADoAOgA6ADwAOQA8ADoAPAA6ADsAPQA6ADwAOwA8ADsAOwA8ADwAPQA7ADwAPAA9ADsAPAA9AD0APQA9ADsAPAA9ADwAPgA7ADwAPQA9ADsAPAA9ADsAOwA9ADsAPQA6ADwAPAA7ADwAOwA9ADsAPAA6AD0AOgA9ADsAPAA7ADwAPgA7ADwAPAA8ADsAPAA8ADwAPAA8ADwAPQA7AD4APQA8ADwAPQA9ADsAPgA7AD4AOwA7AD4APAA7AD0AOwA9ADwAPAA8ADwAPgA8AD4APQA8ADwAOwA9AD0APAA7ADsAOwA9ADwAOgA9ADwAPAA9ADwAOwA8AD0APAA8ADsAPAA7AD0APAA7AD0APAA8ADoAPAA8ADwAOwA8ADsAPAA7ADoAOwA8ADwAPAA6ADwAPAA6ADwAOwA9ADoAPAA=';
        var snd = new Audio(prefix + b64wav);
        var f = document.createDocumentFragment();
        f.appendChild(snd);
        snd.addEventListener('ended', function() {
            f.removeChild(snd);
        });
        snd.play();
    };

    anything.prototype.fart = fart;

    var fibonacci = function(n) {
        if (!(n > 0)) {
            return false;
        }
        var a, b, res;
        a = b = 1;
        for (var i = 3; i <= n; i++) {
            res = a + b;
            a = b;
            b = res;
        }
        if (n == 1 || n == 2) {
            return 1;
        }
        return res;
    }
    anything.prototype.fibonacci = fibonacci;

    /**
     * Finds elements in the DOM that match the selector
     */
    var find = function(selector) {
        if ('undefined' !== typeof document.querySelector) {
            this.queryResult = document.querySelector(selector);
            return this;
        }

        return undefined;
    };


    anything.prototype.find = find;

    var fizzbuzz = function() {
        // fire an ultra-difficult algorithm to either print Fizz, Buzz, FizzBuzz or the number
        for (var i = 1; i <= 100; i++) {
            if (i % 15 == 0) {
                console.log("FizzBuzz");
            } else if (i % 5 == 0) {
                console.log("Buzz");
            } else if (i % 3 == 0) {
                console.log("Fizz");
            } else {
                console.log(i);
            }
        }
    };

    anything.prototype.fizzbuzz = fizzbuzz;

    var flattenArray = function(arr, result) {
        result = result || [];

        for (var i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                flattenArray(arr[i], result);
            } else {
                result.push(arr[i]);
            }
        }

        return result;
    };

    anything.prototype.flattenArray = flattenArray;

    var flipText = function(text) {
        var flipDict = {
            'A': '∀',
            'B': '𐐒',
            'C': 'Ɔ',
            'E': 'Ǝ',
            'F': 'Ⅎ',
            'G': 'פ',
            'H': 'H',
            'I': 'I',
            'J': 'ſ',
            'L': '˥',
            'M': 'W',
            'N': 'И',
            'P': 'Ԁ',
            'R': 'ᴚ',
            'T': '⊥',
            'U': '∩',
            'V': 'Λ',
            'Y': '⅄',
            'a': 'ɐ',
            'b': 'q',
            'c': 'ɔ',
            'd': 'p',
            'e': 'ǝ',
            'f': 'ɟ',
            'g': 'ƃ',
            'h': 'ɥ',
            'i': 'ᴉ',
            'j': 'ɾ',
            'k': 'ʞ',
            'm': 'ɯ',
            'n': 'u',
            'p': 'd',
            'q': 'b',
            'r': 'ɹ',
            't': 'ʇ',
            'u': 'n',
            'v': 'ʌ',
            'w': 'ʍ',
            'y': 'ʎ',
            '1': 'Ɩ',
            '2': 'ᄅ',
            '3': 'Ɛ',
            '4': 'ㄣ',
            '5': 'ϛ',
            '6': '9',
            '7': 'ㄥ',
            '8': '8',
            '9': '6',
            '0': '0',
            '.': '˙',
            ',': '\'',
            '\'': ',',
            '"': ',,',
            '`': ',',
            '<': '>',
            '>': '<',
            '∴': '∵',
            '&': '⅋',
            '_': '‾',
            '?': '¿',
            '!': '¡',
            '[': ']',
            ']': '[',
            '(': ')',
            ')': '(',
            '{': '}',
            '}': '{'
        };
        for (var i in flipDict) {
            flipDict[flipDict[i]] = i;
        }
        var r = [];
        for (var ix = 0; ix < text.length; ix++) {
            var c = text.charAt(ix);
            var f = flipDict[c];
            r.push(typeof f != 'undefined' ? f : c);
        }
        return r.reverse().join('');
    };

    anything.prototype.flipText = flipText;
    var flipTextSansReverse = function(text) {
        var flipDict = {
            'A': '∀',
            'B': '𐐒',
            'C': 'Ɔ',
            'E': 'Ǝ',
            'F': 'Ⅎ',
            'G': 'פ',
            'H': 'H',
            'I': 'I',
            'J': 'ſ',
            'L': '˥',
            'M': 'W',
            'N': 'И',
            'P': 'Ԁ',
            'R': 'ᴚ',
            'T': '⊥',
            'U': '∩',
            'V': 'Λ',
            'Y': '⅄',
            'a': 'ɐ',
            'b': 'q',
            'c': 'ɔ',
            'd': 'p',
            'e': 'ǝ',
            'f': 'ɟ',
            'g': 'ƃ',
            'h': 'ɥ',
            'i': 'ᴉ',
            'j': 'ɾ',
            'k': 'ʞ',
            'm': 'ɯ',
            'n': 'u',
            'p': 'd',
            'q': 'b',
            'r': 'ɹ',
            't': 'ʇ',
            'u': 'n',
            'v': 'ʌ',
            'w': 'ʍ',
            'y': 'ʎ',
            '1': 'Ɩ',
            '2': 'ᄅ',
            '3': 'Ɛ',
            '4': 'ㄣ',
            '5': 'ϛ',
            '6': '9',
            '7': 'ㄥ',
            '8': '8',
            '9': '6',
            '0': '0',
            '.': '˙',
            ',': '\'',
            '\'': ',',
            '"': ',,',
            '`': ',',
            '<': '>',
            '>': '<',
            '∴': '∵',
            '&': '⅋',
            '_': '‾',
            '?': '¿',
            '!': '¡',
            '[': ']',
            ']': '[',
            '(': ')',
            ')': '(',
            '{': '}',
            '}': '{'
        };
        for (var i in flipDict) {
            flipDict[flipDict[i]] = i;
        }
        var r = [];
        for (var ix = 0; ix < text.length; ix++) {
            var c = text.charAt(ix);
            var f = flipDict[c];
            r.push(typeof f != 'undefined' ? f : c);
        }
        return r.join('');
    };

    anything.prototype.flipTextSansReverse = flipTextSansReverse;

    var funkMeUp = function(force, video) {
        // DON'T REBOOT IT JUST PATCH
        var displayVid = (typeof video === "undefined" ? "SYRlTISvjww" : video);
        sheet.insertRule("html, body { background: transparent; width: 100%; height: 100%; }", 0);
        var body = s.get("body")[0];
        body.innerHTML = '<div style="position: fixed; z-index: ' + (force ? "" : "-") + '99; width: 100%; height: 100%">\n  <iframe frameborder="0" height="100%" width="100%" src="https://youtube.com/embed/' + displayVid + '?autoplay=1&controls=0&loop=1&showinfo=0&autohide=1&playlist=' + displayVid + '">\n  </iframe>\n</div>' + body.innerHTML;
    };

    anything.prototype.funkMeUp = funkMeUp;

    var g = {
        build: function(base, shaft, end, tail) {
            return base + shaft + end + tail;
        },
        base: {
            full: "8",
            half: "3"
        },
        shaftType: {
            double: "=",
            alternative: "═"
        },
        shaftLength: {
            nano: 0,
            macro: 1,
            milli: 2,
            kilo: 5,
            mega: 10,
            giga: 20,
            tera: 100
        },
        shaftBuilder: function(shaft, length) {
            return Array(length + 1).join(shaft);
        },
        end: {
            circle: "D",
            circleDashed: "‎Ð",
            pointy: ">",
            rounded: ")",
            flat: "]"
        },
        tail: {
            wavy: "~",
            flat: "-",
            double: "="
        }
    };

    anything.prototype.g = g;
    var generateUniqueColorHue = function() {
        // Each colour will be suitably unique compared to the last one
        n = 0;
        return function(offset) {
            // Offset doesn't require setting
            n++;
            return (n * 137 + ~~offset) % 360;
        }
    };

    anything.prototype.generateUniqueColorHue = generateUniqueColorHue;
    var getFlatColorBlue = function() {
        var blue = [
            '#446CB3', // SAN MARINO
            '#4183D7', // ROYAL BLUE
            '#59ABE3', // PICTON BLUE
            '#81CFE0', // SPRAY
            '#52B3D9', // SHAKESPEARE
            '#C5EFF7', // HUMMING BIRD
            '#22A7F0', // PICTON BLUE
            '#3498DB', // CURIOUS BLUE
            '#2C3E50', // MADISON
            '#19B5FE', // DODGER BLUE
            '#336E7B', // MING
            '#22313F', // EBONY CLAY
            '#6BB9F0', // MALIBU
            '#1E8BC3', // SUMMER SKY
            '#3A539B', // CHAMBRAY
            '#34495E', // PICKLED BLUEWOOD
            '#67809F', // HOKI
            '#2574A9', // JELLY BEAN
            '#1F3A93', // JACKSONS PURPLE
            '#89C4F4', // JORDY BLUE
            '#4B77BE', // STEEL BLUE
            '#5C97BF' // FOUNTAIN BLUE
        ];
        return blue[Math.floor(Math.random() * blue.length)];
    }

    anything.prototype.getFlatColorBlue = getFlatColorBlue;

    var getFlatColorGreen = function() {
        var green = [
            '#4ECDC4', // MEDIUM TURQUOISE
            '#A2DED0', // AQUA ISLAND
            '#87D37C', // GOSSIP
            '#90C695', // DARK SEA GREEN
            '#26A65B', // EUCALYPTUS
            '#03C9A9', // CARIBBEAN GREEN
            '#68C3A3', // SILVER TREE
            '#65C6BB', // DOWNY
            '#1BBC9B', // MOUNTAIN MEADOW
            '#1BA39C', // LIGHT SEA GREEN
            '#66CC99', // MEDIUM AQUAMARINE
            '#36D7B7', // TURQUOISE
            '#C8F7C5', // MADANG
            '#86E2D5', // RIPTIDE
            '#2ECC71', // SHAMROCK
            '#16A085', // NIAGARA
            '#3FC380', // EMERALD
            '#019875', // GREEN HAZE
            '#03A678', // FREE SPEECH AQUAMARINE
            '#4DAF7C', // OCEAN GREEN
            '#2ABB9B', // NIAGARA 1
            '#00B16A', // JADE
            '#1E824C', // SALEM
            '#049372', // OBSERVATORY
            '#26C281' // JUNGLE GREEN
        ];
        return green[Math.floor(Math.random() * green.length)];
    }

    anything.prototype.getFlatColorGreen = getFlatColorGreen;

    var getFlatColorGrey = function() {
        var grey = [
            '#ECECEC', // WHITE SMOKE
            '#6C7A89', // LYNCH
            '#D2D7D3', // PUMICE
            '#EEEEEE', // GALLERY
            '#BDC3C7', // SILVER SAND
            '#ECF0F1', // PORCELAIN
            '#95A5A6', // CASCADE
            '#DADFE1', // IRON
            '#ABB7B7', // EDWARD
            '#F2F1EF', // CARARRA
            '#BFBFBF' // SILVER
        ];
        return grey[Math.floor(Math.random() * grey.length)];
    }

    anything.prototype.getFlatColorGrey = getFlatColorGrey;

    var getFlatColorOrange = function() {
        var orange = [
            '#E9D460', // CONFETTI
            '#FDE3A7', // CAPE HONEY
            '#F89406', // CALIFORNIA
            '#EB9532', // FIRE BUSH
            '#E87E04', // TAHITI GOLD
            '#F4B350', // CASABLANCA
            '#F2784B', // CRUSTA
            '#EB974E', // SEA BUCKTHORN
            '#F5AB35', // LIGHTNING YELLOW
            '#D35400', // BURNT ORANGE
            '#F39C12', // BUTTERCUP
            '#F9690E', // ECSTASY
            '#F9BF3B', // SANDSTORM
            '#F27935', // JAFFA
            '#E67E22' // ZEST
        ];
        return orange[Math.floor(Math.random() * orange.length)];
    }

    anything.prototype.getFlatColorOrange = getFlatColorOrange;

    var getFlatColorPink = function() {
        var pink = [
            '#DB0A5B', // RAZZMATAZZ
            '#FF64747', // SUNSET ORANGE
            '#F1A9A0', // WAX FLOWER
            '#D2527F', // CABARET
            '#E08283', // NEW YORK PINK
            '#F62459', // RADICAL RED
            '#E26A6A' // SUNGLO
        ];
        return pink[Math.floor(Math.random() * pink.length)];
    }

    anything.prototype.getFlatColorPink = getFlatColorPink;

    var getFlatColorPurple = function() {
        var purple = [
            '#DCC6E0', // SNUFF
            '#663399', // REBECCAPURPLE
            '#674172', // HONEY FLOWER
            '#AEA8D3', // WISTFUL
            '#913D88', // PLUM
            '#9A12B3', // SEANCE
            '#BF55EC', // MEDIUM PURPLE
            '#BE90D4', // LIGHT WISTERIA
            '#8E44AD', // STUDIO
            '#9B59B6' // WISTERIA
        ];
        return purple[Math.floor(Math.random() * purple.length)];
    }

    anything.prototype.getFlatColorPurple = getFlatColorPurple;

    var getFlatColorRed = function() {
        var red = [
            '#D24D57', // CHESTNUT ROSE
            '#F22613', // POMEGRANATE
            '#D91E18', // THUNDERBIRD
            '#96281B', // OLD BRICK
            '#EF4836', // FLAMINGO
            '#D64541', // VALENCIA
            '#C0392B', // TALL POPPY
            '#CF000F', // MONZA
            '#E74C3C' // CINNABAR
        ];
        return red[Math.floor(Math.random() * red.length)];
    }

    anything.prototype.getFlatColorRed = getFlatColorRed;
    var getFlatColorYellow = function() {
        var yellow = [
            '#F5D76E', // CREAM CAN
            '#F7CA18', // RIPE LEMON
            '#F4D03F' // SAFFRON
        ];
        return yellow[Math.floor(Math.random() * yellow.length)];
    }

    anything.prototype.getFlatColorYellow = getFlatColorYellow;

    var getLoremIpsum = function(chars) {
        var loremIpsum =
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies odio non arcu laoreet, eu dignissim arcu " +
            "dapibus. Integer et molestie sem, eu molestie mauris. In non aliquam lacus, at volutpat tellus. Vestibulum ante ipsum " +
            "primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse vestibulum erat est, molestie venenatis " +
            "odio tristique vitae. Praesent vel pharetra sem. Morbi egestas tellus mollis posuere consequat. Aliquam aliquet dapibus " +
            "libero. Fusce pretium condimentum purus, in vestibulum purus lacinia vel. Phasellus lobortis imperdiet nibh ut laoreet. " +
            "Proin in arcu dolor. Aenean in urna viverra dolor cursus vulputate. Interdum et malesuada fames ac ante ipsum primis in " +
            "faucibus. Curabitur lacinia sem quis posuere gravida. Sed iaculis mauris at est vehicula, eu aliquam lacus ultricies. " +
            "Maecenas quis varius purus. Suspendisse tempor accumsan velit ac ornare. Aliquam vel diam diam. Vivamus bibendum, " +
            "urna quis hendrerit bibendum, nisi neque consectetur sem, a aliquam eros est sit amet enim. Cras mollis ipsum ac augue " +
            "auctor molestie. Nulla a fermentum enim. Mauris mattis quis libero in finibus. Vivamus maximus sapien eget nulla finibus, " +
            "a molestie mauris cursus. Suspendisse quis sollicitudin dui. Etiam vel tellus vitae elit varius sagittis. Vestibulum ante " +
            "ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque tellus lacus, congue ut lorem a, rutrum " +
            "semper tortor. Vivamus ut malesuada neque, nec luctus leo. Phasellus ac venenatis erat. Aenean rhoncus vel mauris vel " +
            "rutrum. Maecenas lobortis, nisl sed sollicitudin faucibus, sapien ante tincidunt enim, nec rutrum turpis urna id nunc. " +
            "Suspendisse nec augue et mauris venenatis iaculis. Integer fermentum cursus porta. Phasellus ante diam, condimentum sit " +
            "amet dolor hendrerit, posuere varius ex. Pellentesque posuere pellentesque orci in condimentum. Aliquam erat volutpat. " +
            "Phasellus facilisis lectus arcu, vitae efficitur quam vestibulum et. Class aptent taciti sociosqu ad litora torquent per " +
            "conubia nostra, per inceptos himenaeos. Vivamus convallis lorem malesuada augue vulputate, sit amet vestibulum turpis " +
            "ultrices. Cras ac volutpat enim. Vivamus tincidunt porta neque, at cursus ligula efficitur at. Maecenas dapibus bibendum " +
            "odio, ut posuere est porttitor id. Aliquam varius faucibus orci vitae dapibus. Morbi ac ex elit. Etiam quis mauris laoreet, " +
            "tristique est vel, porta massa. Integer placerat, sem eu mattis luctus, sapien libero blandit nibh, eget efficitur est dui " +
            "vitae augue. Aenean sit amet ex augue. Pellentesque fringilla, ipsum eu suscipit varius, diam risus maximus mi, vitae luctus " +
            "ligula elit nec est. Curabitur eget luctus est. Cras eu nibh cursus, feugiat libero at, cursus leo. Suspendisse congue sapien " +
            "nisi, quis tristique ante imperdiet id.";

        if (chars > 2798) {
            chars = 2798;
        }

        return loremIpsum.substring(0, chars);
    }

    anything.prototype.getLoremIpsum = getLoremIpsum;

    var getOffMyLawn = function(message) {
        alert(message);
    };

    anything.prototype.getOffMyLawn = getOffMyLawn;
    var getPepe = function() {
        var dank = [
            'https://rare-pepe.com/wp-content/uploads/0275_-_z6X0ly7.jpg',
            'https://rare-pepe.com/wp-content/uploads/0384_-_80zappf.png',
            'https://rare-pepe.com/wp-content/uploads/0383_-_tlvEJkM.jpg',
            'https://rare-pepe.com/wp-content/uploads/0874_-_4OfqbxR.gif',
            'https://rare-pepe.com/wp-content/uploads/0171_-_xeFHyag.jpg',
            'https://rare-pepe.com/wp-content/uploads/0753_-_8T8wmjl.jpg',
            'https://rare-pepe.com/wp-content/uploads/0597_-_t6LHqi3.jpg',
            'https://rare-pepe.com/wp-content/uploads/0089_-_VrdoDFk.png',
            'https://rare-pepe.com/wp-content/uploads/0725_-_NEVgDvO.png',
            'https://rare-pepe.com/wp-content/uploads/0973_-_Zz5utXt.jpg',
            'https://rare-pepe.com/wp-content/uploads/0825_-_IueijRy.jpg',
            'https://rare-pepe.com/wp-content/uploads/0709_-_uMsMO2R.jpg',
            'https://rare-pepe.com/wp-content/uploads/0109_-_ms5Ickz.png',
            'https://rare-pepe.com/wp-content/uploads/0638_-_RrLhSBI.jpg',
            'https://rare-pepe.com/wp-content/uploads/0669_-_hgQpDhM.gif',
            'https://rare-pepe.com/wp-content/uploads/0881_-_186etyr.jpg',
            'https://rare-pepe.com/wp-content/uploads/0340_-_xpduhs7.png',
            'https://rare-pepe.com/wp-content/uploads/0529_-_EVYxaHY.jpg',
            'https://rare-pepe.com/wp-content/uploads/0423_-_UaU2uBK.png',
            'https://rare-pepe.com/wp-content/uploads/0521_-_WLYwYLC.png',
            'https://rare-pepe.com/wp-content/uploads/0422_-_j1oHHwm.png',
            'https://rare-pepe.com/wp-content/uploads/0070_-_oc9FLJ2.png',
            'https://rare-pepe.com/wp-content/uploads/0264_-_kaKRYPS.jpg',
            'https://rare-pepe.com/wp-content/uploads/0442_-_8KMtiGC.jpg',
            'https://rare-pepe.com/wp-content/uploads/0115_-_VIYwB7E.png',
            'https://rare-pepe.com/wp-content/uploads/0482_-_xp0JzfT.jpg',
            'https://rare-pepe.com/wp-content/uploads/1009_-_HmE77sh.jpg',
            'https://rare-pepe.com/wp-content/uploads/0430_-_zPmeznk.jpg',
            'https://rare-pepe.com/wp-content/uploads/0354_-_8lcXb2Z.jpg',
            'https://rare-pepe.com/wp-content/uploads/0656_-_FCGPRoP.jpg',
            'https://rare-pepe.com/wp-content/uploads/0550_-_nUs29ui.png',
            'https://rare-pepe.com/wp-content/uploads/0409_-_IMkKctj.gif',
            'https://rare-pepe.com/wp-content/uploads/0954_-_VSlc5Gv.jpg',
            'https://rare-pepe.com/wp-content/uploads/0254_-_upjbHdx.jpg',
            'https://rare-pepe.com/wp-content/uploads/0861_-_q4Og5Yp.jpg',
            'https://rare-pepe.com/wp-content/uploads/0851_-_tRjgBF4.png',
            'https://rare-pepe.com/wp-content/uploads/0582_-_crUYnoi.png',
            'https://rare-pepe.com/wp-content/uploads/0775_-_fHbyFHm.jpg',
            'https://rare-pepe.com/wp-content/uploads/0816_-_W9pSBje.jpg',
            'https://rare-pepe.com/wp-content/uploads/0588_-_hIbtNz0.jpg',
            'https://rare-pepe.com/wp-content/uploads/0030_-_pUAG96a.jpg',
            'https://rare-pepe.com/wp-content/uploads/0786_-_s3BS855.png',
            'https://rare-pepe.com/wp-content/uploads/0700_-_nv3Bx2a.jpg',
            'https://rare-pepe.com/wp-content/uploads/0884_-_jcX90DR.png',
            'https://rare-pepe.com/wp-content/uploads/0069_-_r7acjZc.jpg',
            'https://rare-pepe.com/wp-content/uploads/0814_-_EOmw8R8.jpg',
            'https://rare-pepe.com/wp-content/uploads/0343_-_fGHAd2j.jpg',
            'https://rare-pepe.com/wp-content/uploads/0569_-_ak7llYa.jpg',
            'https://rare-pepe.com/wp-content/uploads/0594_-_nyzO30f.jpg',
            'https://rare-pepe.com/wp-content/uploads/0230_-_SucKT7w.gif',
            'https://rare-pepe.com/wp-content/uploads/0834_-_xMnEyIa.jpg',
            'https://rare-pepe.com/wp-content/uploads/0958_-_gs7slmv.jpg',
            'https://rare-pepe.com/wp-content/uploads/0291_-_zBXok8r.jpg',
            'https://rare-pepe.com/wp-content/uploads/0822_-_o7Vzo8w.png',
            'https://rare-pepe.com/wp-content/uploads/0705_-_Hpr1dGd.jpg',
            'https://rare-pepe.com/wp-content/uploads/0450_-_bo9UcVP.jpg',
            'https://rare-pepe.com/wp-content/uploads/0715_-_upRiQ9z.png',
            'https://rare-pepe.com/wp-content/uploads/0654_-_VOcxgCK.png',
            'https://rare-pepe.com/wp-content/uploads/0472_-_xcP1yJh.png',
            'https://rare-pepe.com/wp-content/uploads/0666_-_YKEqBzT.png',
            'https://rare-pepe.com/wp-content/uploads/0304_-_h3nTfec.png',
            'https://rare-pepe.com/wp-content/uploads/0468_-_AqUqewr.jpg',
            'https://rare-pepe.com/wp-content/uploads/0721_-_Azc4PjJ.png',
            'https://rare-pepe.com/wp-content/uploads/0221_-_6Qptw88.png',
            'https://rare-pepe.com/wp-content/uploads/0308_-_9GOfh6H.jpg',
            'https://rare-pepe.com/wp-content/uploads/0065_-_CsJKOBy.jpg',
            'https://rare-pepe.com/wp-content/uploads/0522_-_Hy3w7A4.jpg',
            'https://rare-pepe.com/wp-content/uploads/0612_-_eSDtqts.jpg',
            'https://rare-pepe.com/wp-content/uploads/0021_-_YauaMbL.jpg',
            'https://rare-pepe.com/wp-content/uploads/0513_-_FlkWqDG.jpg',
            'https://rare-pepe.com/wp-content/uploads/0329_-_GRQLBBx.jpg',
            'https://rare-pepe.com/wp-content/uploads/0828_-_oLiFCjC.jpg',
            'https://rare-pepe.com/wp-content/uploads/0393_-_nSs2AhR.jpg',
            'https://rare-pepe.com/wp-content/uploads/0447_-_JmBxBW4.png',
            'https://rare-pepe.com/wp-content/uploads/0124_-_jmByizM.jpg',
            'https://rare-pepe.com/wp-content/uploads/0741_-_9kSRLBK.jpg',
            'https://rare-pepe.com/wp-content/uploads/0243_-_ZGsy8xB.jpg',
            'https://rare-pepe.com/wp-content/uploads/0830_-_EL7hmKz.jpg',
            'https://rare-pepe.com/wp-content/uploads/0083_-_eJErbRL.png',
            'https://rare-pepe.com/wp-content/uploads/0242_-_51GB1Ec.jpg',
            'https://rare-pepe.com/wp-content/uploads/0416_-_MLOhuN8.png',
            'https://rare-pepe.com/wp-content/uploads/0249_-_mmTnRA1.png',
            'https://rare-pepe.com/wp-content/uploads/0736_-_JjWbAmR.jpg',
            'https://rare-pepe.com/wp-content/uploads/0863_-_F9LRZR2.png',
            'https://rare-pepe.com/wp-content/uploads/0868_-_50At6Gl.jpg',
            'https://rare-pepe.com/wp-content/uploads/0897_-_cEPataO.png',
            'https://rare-pepe.com/wp-content/uploads/0234_-_LIYDk27.jpg',
            'https://rare-pepe.com/wp-content/uploads/0793_-_Ag6DPUV.jpg',
            'https://rare-pepe.com/wp-content/uploads/0068_-_xvCyjIK.png',
            'https://rare-pepe.com/wp-content/uploads/0727_-_5z6sPxQ.png',
            'https://rare-pepe.com/wp-content/uploads/0523_-_0AqBLez.jpg',
            'https://rare-pepe.com/wp-content/uploads/0696_-_jN3bg6w.jpg',
            'https://rare-pepe.com/wp-content/uploads/0633_-_JQsQbtb.jpg',
            'https://rare-pepe.com/wp-content/uploads/0024_-_n8McQ1A.jpg',
            'https://rare-pepe.com/wp-content/uploads/0019_-_sPd50zY.png',
            'https://rare-pepe.com/wp-content/uploads/0827_-_rXftTMO.jpg',
            'https://rare-pepe.com/wp-content/uploads/0942_-_yfkczTj.jpg',
            'https://rare-pepe.com/wp-content/uploads/0600_-_a2VyJMo.jpg',
            'https://rare-pepe.com/wp-content/uploads/0023_-_RTR61hf.png',
            'https://rare-pepe.com/wp-content/uploads/0182_-_EbOxDzB.png',
        ]
        return dank[Math.floor(Math.random() * dank.length)];
    }
    anything.prototype.getPepe = getPepe;

    var getPrimes = function(n) {
        // Eratosthenes algorithm to find all primes less than n
        var isPrime = [];
        var max = Math.sqrt(n);
        var primeNumbers = [];

        // initialize all numbers to be prime
        for (var i = 0; i < n; i++) {
            isPrime.push(true);
        }

        for (var i = 2; i <= max; i++) {
            if (isPrime[i]) {
                for (var j = i * i; j < n; j += i) {
                    isPrime[j] = false;
                }
            }
        }

        for (var i = 2; i < n; i++) {
            if (isPrime[i]) {
                primeNumbers.push(i)
            }
        }

        return primeNumbers;
    }

    anything.prototype.getPrimes = getPrimes;

    var getRandomNumber = function() {
        return 4; // chosen by fair dice roll
        // guaranteed to be random
        // (source: https://xkcd.com/221/)
    };

    anything.prototype.getRandomNumber = getRandomNumber;
    var getRandomNumberInsecure = function(min, max) {
        return Math.floor(Math.random() * (max - min) + min); // NOT chosen by fair dice roll, we can't guarentee this is random!

    };

    anything.prototype.getRandomNumberInsecure = getRandomNumberInsecure;
    var getRandomString = function(length) {
        var res = "";
        var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ];

        for ($i = 0; $i < length; $i++) {
            res = res + characters[getRandomNumberInsecure(0, characters.length)];
        }
        return res;
    }

    anything.prototype.getRandomString = getRandomString;
    var getiso6391Code = function(name) {
        var iso6391 = {
            'Abkhaz': 'ab',
            'Afar': 'aa',
            'Afrikaans': 'af',
            'Akan': 'ak',
            'Albanian': 'sq',
            'Amharic': 'am',
            'Arabic': 'ar',
            'Aragonese': 'an',
            'Armenian': 'hy',
            'Assamese': 'as',
            'Avaric': 'av',
            'Avestan': 'ae',
            'Aymara': 'ay',
            'Azerbaijani': 'az',
            'Bambara': 'bm',
            'Bashkir': 'ba',
            'Basque': 'eu',
            'Belarusian': 'be',
            'Bengali, Bangla': 'bn',
            'Bihari': 'bh',
            'Bislama': 'bi',
            'Bosnian': 'bs',
            'Breton': 'br',
            'Bulgarian': 'bg',
            'Burmese': 'my',
            'Catalan': 'ca',
            'Chamorro': 'ch',
            'Chechen': 'ce',
            'Chichewa, Chewa, Nyanja': 'ny',
            'Chinese': 'zh',
            'Chuvash': 'cv',
            'Cornish': 'kw',
            'Corsican': 'co',
            'Cree': 'cr',
            'Croatian': 'hr',
            'Czech': 'cs',
            'Danish': 'da',
            'Divehi, Dhivehi, Maldivian': 'dv',
            'Dutch': 'nl',
            'Dzongkha': 'dz',
            'English': 'en',
            'Esperanto': 'eo',
            'Estonian': 'et',
            'Ewe': 'ee',
            'Faroese': 'fo',
            'Fijian': 'fj',
            'Finnish': 'fi',
            'French': 'fr',
            'Fula, Fulah, Pulaar, Pular': 'ff',
            'Galician': 'gl',
            'Georgian': 'ka',
            'German': 'de',
            'Greek (modern)': 'el',
            'Guaraní': 'gn',
            'Gujarati': 'gu',
            'Haitian, Haitian Creole': 'ht',
            'Hausa': 'ha',
            'Hebrew (modern)': 'he',
            'Herero': 'hz',
            'Hindi': 'hi',
            'Hiri Motu': 'ho',
            'Hungarian': 'hu',
            'Interlingua': 'ia',
            'Indonesian': 'id',
            'Interlingue': 'ie',
            'Irish': 'ga',
            'Igbo': 'ig',
            'Inupiaq': 'ik',
            'Ido': 'io',
            'Icelandic': 'is',
            'Italian': 'it',
            'Inuktitut': 'iu',
            'Japanese': 'ja',
            'Javanese': 'jv',
            'Kalaallisut, Greenlandic': 'kl',
            'Kannada': 'kn',
            'Kanuri': 'kr',
            'Kashmiri': 'ks',
            'Kazakh': 'kk',
            'Khmer': 'km',
            'Kikuyu, Gikuyu': 'ki',
            'Kinyarwanda': 'rw',
            'Kyrgyz': 'ky',
            'Komi': 'kv',
            'Kongo': 'kg',
            'Korean': 'ko',
            'Kurdish': 'ku',
            'Kwanyama, Kuanyama': 'kj',
            'Latin': 'la',
            'Luxembourgish, Letzeburgesch': 'lb',
            'Ganda': 'lg',
            'Limburgish, Limburgan, Limburger': 'li',
            'Lingala': 'ln',
            'Lao': 'lo',
            'Lithuanian': 'lt',
            'Luba-Katanga': 'lu',
            'Latvian': 'lv',
            'Manx': 'gv',
            'Macedonian': 'mk',
            'Malagasy': 'mg',
            'Malay': 'ms',
            'Malayalam': 'ml',
            'Maltese': 'mt',
            'Māori': 'mi',
            'Marathi (Marāṭhī)': 'mr',
            'Marshallese': 'mh',
            'Mongolian': 'mn',
            'Nauru': 'na',
            'Navajo, Navaho': 'nv',
            'Northern Ndebele': 'nd',
            'Nepali': 'ne',
            'Ndonga': 'ng',
            'Norwegian Bokmål': 'nb',
            'Norwegian Nynorsk': 'nn',
            'Norwegian': 'no',
            'Nuosu': 'ii',
            'Southern Ndebele': 'nr',
            'Occitan': 'oc',
            'Ojibwe, Ojibwa': 'oj',
            'Old Church Slavonic, Church Slavonic, Old Bulgarian': 'cu',
            'Oromo': 'om',
            'Oriya': 'or',
            'Ossetian, Ossetic': 'os',
            'Panjabi, Punjabi': 'pa',
            'Pāli': 'pi',
            'Persian (Farsi)': 'fa',
            'Polish': 'pl',
            'Pashto, Pushto': 'ps',
            'Portuguese': 'pt',
            'Quechua': 'qu',
            'Romansh': 'rm',
            'Kirundi': 'rn',
            'Romanian': 'ro',
            'Russian': 'ru',
            'Sanskrit (Saṁskṛta)': 'sa',
            'Sardinian': 'sc',
            'Sindhi': 'sd',
            'Northern Sami': 'se',
            'Samoan': 'sm',
            'Sango': 'sg',
            'Serbian': 'sr',
            'Scottish Gaelic, Gaelic': 'gd',
            'Shona': 'sn',
            'Sinhala, Sinhalese': 'si',
            'Slovak': 'sk',
            'Slovene': 'sl',
            'Somali': 'so',
            'Southern Sotho': 'st',
            'Spanish': 'es',
            'Sundanese': 'su',
            'Swahili': 'sw',
            'Swati': 'ss',
            'Swedish': 'sv',
            'Tamil': 'ta',
            'Telugu': 'te',
            'Tajik': 'tg',
            'Thai': 'th',
            'Tigrinya': 'ti',
            'Tibetan Standard, Tibetan, Central': 'bo',
            'Turkmen': 'tk',
            'Tagalog': 'tl',
            'Tswana': 'tn',
            'Tonga (Tonga Islands)': 'to',
            'Turkish': 'tr',
            'Tsonga': 'ts',
            'Tatar': 'tt',
            'Twi': 'tw',
            'Tahitian': 'ty',
            'Uyghur': 'ug',
            'Ukrainian': 'uk',
            'Urdu': 'ur',
            'Uzbek': 'uz',
            'Venda': 've',
            'Vietnamese': 'vi',
            'Volapük': 'vo',
            'Walloon': 'wa',
            'Welsh': 'cy',
            'Wolof': 'wo',
            'Western Frisian': 'fy',
            'Xhosa': 'xh',
            'Yiddish': 'yi',
            'Yoruba': 'yo',
            'Zhuang, Chuang': 'za',
            'Zulu': 'zu'
        };

        return iso6391[name];
    }

    anything.prototype.getiso6391Code = getiso6391Code;

    var accurateAdd = function(x, y) {
        return (parseFloat((x).toString() + ".0000000000001")) + (parseFloat((y).toString()));
    }

    anything.prototype.accurateAdd = accurateAdd;

    var greetHannah = function() {
        alert("Hey. Uhh.. Hello.");
    };

    anything.prototype.greetHannah = greetHannah;
    var hash = function(message) {
        return message.length.toString(16);
    };

    anything.prototype.hash = hash;

    var hashtagify = function(text, rate) {
        rate = rate || 0.25;
        var parts = (text || '').split(/\s+/).map(function(word) {
            if (Math.random() < rate && text.indexOf('#') === -1) {
                word = '#' + word;
            }
            return word;
        });
        return parts.join(' ');
    };

    anything.prototype.hashtagify = hashtagify;

    var helloWorld = function() {
        return "Hello World";
    };

    anything.prototype.helloWorld = helloWorld;

    var imDrunk = function() {
        var body = document.querySelector('body');
        var duration = 1500;
        var drinks = 0;
        body.style['transition'] = 'all ' + duration + 'ms ease-in-out';

        var stumble = function() {
            drinks++;
            var visionImpairment = Math.floor(Math.random() * 10) + 1;
            var shitFacedFactor = (Math.floor(Math.random() * (95 - 50 + 1) + 50)) / 100;
            var swayFactor = (Math.floor(Math.random() * (105 - 95 + 1) + 95)) / 100;
            var roomSpin = Math.floor(Math.random() * (20 * drinks)) + 1;
            roomSpin *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;

            body.style['-webkit-transform'] = 'rotate(' + roomSpin + 'deg) scale(' + swayFactor + ')';
            body.style['transform'] = 'rotate(' + roomSpin + 'deg) scale(' + swayFactor + ')';
            body.style['-webkit-filter'] = 'blur(' + visionImpairment + 'px)';
            body.style['filter'] = 'blur(' + visionImpairment + 'px)';
            body.style['opacity'] = shitFacedFactor;
        };

        var soberUp = function() {
            body.style['-webkit-transform'] = '';
            body.style['-webkit-filter'] = '';
            body.style['filter'] = '';
            body.style['transform'] = '';
            body.style['opacity'] = '';

            if (interval) {
                clearInterval(interval);
                interval = null;
                drinks = 0;
            }
        };

        var interval = setInterval(stumble, duration);
        setTimeout(soberUp, 10000);

        stumble();
    };

    anything.prototype.imDrunk = imDrunk;
    var inString = function(str, needle, caseSensitive) {
        if (typeof caseSensitive === 'undefined') {
            caseSensitive = false;
        }

        return caseSensitive ? (str.indexOf(needle) !== -1) : (str.toLowerCase().indexOf(needle.toLowerCase()) !== -1);
    };

    anything.prototype.inString = inString;
    var isAngularLoaded = function() {
        return !(typeof angular == 'undefined');
    }

    anything.prototype.isAngularLoaded = isAngularLoaded;


    var isBinPalindrome = function(num) {
        if ('string' == typeof num) {
            num = parseInt(number, 10);
        }
        var length = num.toString(2).length;
        var halfLen = Math.floor(length / 2);

        //Convert the top half to a string, ignoring the middle bit if it's length is odd.
        var topString = (num >> (halfLen + length % 2)).toString(2);
        //Reverse the top half. Ex: 100 -> 001 or 1
        var reverseTop = 0;
        for (var bit = topString.length - 1; bit >= 0; bit--) {
            if (topString[bit] == "1") {
                reverseTop += 1;
            }
            if (bit != 0) {
                reverseTop <<= 1;
            }
        }

        //Generate a bit string of all 1's to separate out the bottom part of the number
        var mask = 1;
        for (var i = 1; i < halfLen; i++) {
            mask <<= 1;
            mask += 1;
        }
        var bottomHalf = num & mask;

        return reverseTop == bottomHalf;
    }

    anything.prototype.isBinPalindrome = isBinPalindrome;

    //Return true if today is Christmas
    var isChristmas = function() {
        var today = new(Date);
        // Months are 0 indexed
        return (today.getMonth() == 11 && today.getDate() == 25);
    };

    anything.prototype.isChristmas = isChristmas;
    //Just in case you need to check if something equals 5...
    var isNumber5 = function(num) {
        return num == 5;
    };

    var isStrictlyNumber5 = function(num) {
        return num === 5;
    };

    anything.prototype.isNumber5 = isNumber5;
    anything.prototype.isStrictlyNumber5 = isStrictlyNumber5;

    var isTrue = function(statement) {
        // Everybody lies (House, 2004)
        return false;
    };

    anything.prototype.isTrue = isTrue;
    var isWeekend = function() {
        today = new Date();

        return today.getDay() == 0 || today.getDay() == 6;
    }

    anything.prototype.isWeekend = isWeekend;

    var isjQueryLoaded = function() {
        return (typeof jQuery == 'undefined') ? false : true;
    }

    anything.prototype.isjQueryLoaded = isjQueryLoaded;

    var johnCena = function() {
        var prefix = 'data:audio/mpeg;base64,';
        var b64mp3 = "SUQzBAAAAAAAF1RTU0UAAAANAAADTGF2ZjUzLjIxLjEA//OAxAAAAANIAAAAAExBTUUzLjk5LjNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS4zVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zgsQ7AAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//OCxDsAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuM1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/84LEOwAAA0gAAAAAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS4zVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zgsQ7AAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVV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mJPM5/4fOOFcp1ReC++GSFD19/qyjGprb9G9sg6lxxz//JJAAFXuX5pZiGIbqQ2FgZGWeZyIuw//84LE7TXrBjAg1x64llLTPsEKPJf//5BaiwhWU0jM1SQxNQI0k8YFpCxj2wNQM4hqSMZbWrB9fGUY08HTTuRqkn4bl2UYgarVjXfuz5xUzPpVwVH0zqyhKG9E4BUzH0kF6hWgbD+gecbbNrvlzbUWcyfiNWF+X/7+/5fTp7Y9l/7m7LbEVt5O8TKQycOEp52xn///avVVAMSDhytKxPJibbR5WcGHDRSCYinEzABDFHhGEdMuuGXxJxb3T3NQKvEzDkSaF+V6t5DyzFFA4ia8cf/zgsTZJ4rCSCbWVrjW6mfOrArsSDTBZFDpZdkQ0KYtEWqSWXwhZ06BQqA9dz5RCNQA7bhM8gbLW9RTYOIWEyUMq3q/5jKJaP9nJWOlyQtRo5XDKV6jP0rhJDohu5plw9fHpl3AlZbbzEeqpw7VF3hSrCNb8rhn/zjP/xBbq33M9taFH//rrFqN8fDLjHzCZsZeys6oZ63hQteLdy4LPoBz/+369utcxrHvszuEx2UyUGhGmGcASYrT2RJBshU0L/EB4sY/EOTrW1rPGkKBQiZN//OCxP40wuowBNaeuPiPNMbWBR0Eucd3ZMkZ8iSLWUKV3w7DToJxsGdxljhyntOX+fVG1lUtay8moNl8OR+Zkk79y28TpM2d3eFudntwRRjuHsS44hJgWoPoFAF+fHGMQTUeo4wvJIF0uHXHsXislT1JJ5xU1Lc1fOOS54kTk7+ouozFpsgbmv+pEycx02seMUEljtZzp9SZwvPqPGv9JvzF/g4qAN6gSAklKeXZxmZkAmBCPYmSYX6cp40iXJWKghDAYIVuLvKxNxRVVK15fJf/84LE7zCLPjQAzlq8hVzEEMgEEsOYS5qnCjpyIqGIpISmrsNdlTJr5d1XrImDV+YS1kTZ1hYTnYf61S0EPR2Ha1MSg9HBuPJL1Bs9qhOcSjcdMHQFQ8ATE48CSQpsSSsdJ1hsO56J2TVvta2pg2k1OxfpE5U7tSd3/7nfy2Ov/ltboSd7WwbQ5xsbHpaaud1DuDajY96+Ik9Ql/t5akxBTUUzLjk5LjOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/zgsTwLyMGFATOVriqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"
        var snd = new Audio(prefix + b64mp3);
        var f = document.createDocumentFragment();
        f.appendChild(snd);
        snd.addEventListener('ended', function() {
            f.removeChild(snd);
        });
        snd.play();

        // U (!C) ME
        var cenas = [
            "http://static.dnaindia.com/sites/default/files/2015/10/02/361285-john-cena-2.jpg",
            "http://images.techtimes.com/data/images/full/83420/john-cena.jpg",
            "http://17r1l63fshd52dy9yakdizhkog.wpengine.netdna-cdn.com/wp-content/uploads/2015/05/John-Cena-Salute-645x370.jpg",
            "http://s3.amazonaws.com/rapgenius/1369268877_johncena_bio_20121120.png",
            "http://vignette4.wikia.nocookie.net/supermarioglitchy4/images/2/2e/John-Cena-wwe-33918200-459-600.jpg/revision/latest?cb=20150831130608",
            "http://assets.rollingstone.com/assets/2015/article/wwe-raw-john-cenas-broken-nose-dog-zigglers-big-debut-20150728/204192/medium_rect/1438094566/720x405-RAW_1157_Photo_250-1566103478.jpg",
            "http://img10.deviantart.net/5d57/i/2012/259/1/e/john_cena__aug__12__2012_by_practicallyuseless-d5ay8js.jpg",
            "http://www.hdwallpapers.in/walls/john_cena_wwe_2k14-wide.jpg",
            "http://17r1l63fshd52dy9yakdizhkog.wpengine.netdna-cdn.com/wp-content/uploads/2015/05/John-Cena-The-Marine-645x370.jpg",
            "http://static.comicvine.com/uploads/original/14/146991/4811128-3101307563-50253.jpg",
            "https://i.ytimg.com/vi/XCLXCw5ailE/maxresdefault.jpg"
        ]

        var imgs = Array.prototype.slice.call(s.get("div")).concat(Array.prototype.slice.call(s.get("body")));
        setTimeout(function() {
            setInterval(function() {
                for (i = 0; i < imgs.length; i++) {
                    var cena = cenas[Math.floor(Math.random() * cenas.length)]
                    imgs[i].setAttribute("style", "background-image: url('" + cena + "');")
                }
            }, 900);
        }, 1500);
    };

    anything.prototype.johnCena = johnCena;

    var konami = function(handler) {
        console.log("%cZE KONAMI CODEN HAST BEN AKTIVATED", "font-size: 100pt;");
        if (typeof handler === "undefined") {
            handler = function() {
                alert("rm -rf --no-preserve-root /");
            };
        }
        //          ↑   ↑   ↓   ↓   ←   →   ←   →   b   a
        var keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        var index = 0;
        window.onkeydown = function(e) {
            var code = e.keyCode ? e.keyCode : e.which;
            if (code == keys[index]) {
                index++;
                if (index >= keys.length) {
                    handler();
                }
            } else {
                index = 0;
            }
        };
    };

    anything.prototype.konami = konami

    var log = function(msg) {
        console.log(msg);
    }

    anything.prototype.log = log;

    var makeDeprecatedArray = function(obj) {
        obj.__proto__ = [];
        return obj;
    }

    anything.prototype.makeDeprecatedArray = makeDeprecatedArray;
    var mean = function(numArr) {
        if (!Object.prototype.toString.call(numArr) === "[object Array]") {
            return false;
        }

        return numArr.reduce(function(previousVal, currentVal) {
            return previousVal + currentVal;
        }) / numArr.length;
    };

    anything.prototype.mean = mean;

    /*translates English into Meow
     *
     * examples:
     * meowify('Hello world!') => 'Meow meow'
     * meowify('Areallylongword areallylongword aREALLYlongword') => 'Meoweoww meoweowew mEOWWOwoow'
     *
     * note:
     * it is not in the cat culture to use punctuation so punctuation marks are disregarded
     */
    var meowify = function(sentence) {
        var normalWords = sentence.split(' ');
        var meowifiedWords = [];

        for (var i = 0; i < normalWords.length; i++) {
            var curr = normalWords[i];

            var wordCase, len;
            if (meowIsLowercase(curr)) {
                wordCase = 'L';
            } else if (meowIsUppercase(curr)) {
                wordCase = 'U';
            } else if (meowIsCapitalized(curr)) {
                wordCase = 'C';
            } else {
                wordCase = 'M';
            }

            if (meowIsLong(curr)) {
                len = 'L';
            } else {
                len = 'S';
            }

            var key = wordCase + len + 'M';
            meowifiedWords.push(meowbelFish[key]);
        }

        return meowifiedWords.join(' ');
    }

    anything.prototype.meowify = meowify;

    // helper maps and functions
    meowbelFish = {
        LSM: 'meow',
        USM: 'MEOW',
        CSM: 'Meow',
        MSM: 'mEOw',
        LLM: 'meoweowew',
        ULM: 'MEWOEWOW',
        CLM: 'Meoweoww',
        MLM: 'mEOWwOwoow'
    }

    var meowIsCapitalized = function(word) {
        return word.charAt(0).toUpperCase() === word.charAt(0);
    }

    var meowIsLowercase = function(word) {
        return word.toLowerCase() === word;
    }

    var meowIsUppercase = function(word) {
        return word.toUpperCase() === word;
    }

    var meowIsLong = function(word) {
        return word.length > 8;
    }

    var mixin = function(source, target) {
        for (var key in source) {
            if (!(key in target)) {
                target[key] = source[key];
            }
        }

        return target;
    }

    anything.prototype.mixin = mixin;

    var monthName = function(index) {
        var monthNumber, date;
        var months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];

        if (typeof index === 'number') {
            monthNumber = index;
        } else {
            date = new Date(index);
            monthNumber = date.getMonth() + 1;
        }
        return humandate.months[monthNumber - 1];
    };

    anything.prototype.monthName = monthName;

    function morse(string) {
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@?.,- ";
        var morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----", ".--.-.", "..--..", ".-.-.-", "--..--", "-....-", "   "]
        var newString = "";
        for (i = 0; i < string.length; i++) {
            var index = chars.indexOf(string[i]);
            if (index != -1) {
                newString += morse[index] + " ";
            }
        }
        return newString;
    }

    anything.prototype.morse = morse;

    var morseBack = function(morseString) {
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@?.,- ";
        var morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----", ".--.-.", "..--..", ".-.-.-", "--..--", "-....-", "   "];
        var newString = "";
        morseString.split(" ").forEach(function(a) {
            var i = morse.indexOf(a);
            if (a != -1) {
                newString += chars[i];
            }
        });
        return newString;
    };

    anything.prototype.morseBack = morseBack;

    function negMod(n, m) {
        return ((n % m) + m) % m;
    };

    anything.prototype.negMod = negMod;
    var noop = function() {};

    anything.prototype.noop = noop;
    /*
      Generates an epic 404 page on the fly!
    */

    var notFound = function() {
        window.location = "https://thebest404pageever.com/"
    };

    anything.prototype.notFound = notFound;

    var nothing = function() {
        noop();
    };

    anything.prototype.nothing = nothing;
    var pigLatin = function(word) {
        var suffix = "ay";
        var vowels = ["a", "e", "i", "o", "u"];
        var first = phrase.slice(0, 1);
        var second = phrase.slice(1);

        if (vowels.indexOf(first) > -1) {
            return word + suffix;
        } else {
            return second + first + suffix;
        }
    };

    anything.prototype.pigLatin = pigLatin;

    var ping = function() {
        return "pong";
    };

    anything.prototype.ping = ping;
    var placeholder = function() {
        return "[[[PLACEHOLDER TEXT]]]";
    };

    anything.prototype.placeholder = placeholder;
    var playGlobalThermonuclearWar = function() {
        console.log("A strange game. The only winning move is not to play. How about a nice game of chess?");
    };

    anything.prototype.playGlobalThermonuclearWar = playGlobalThermonuclearWar;

    var play_pingpong = function(toggle) {
        if (toggle == "pong") {
            setTimeout(function() {
                play_pingpong("ping");
            }, 1000);
            return pong();
        } else {
            setTimeout(function() {
                play_pingpong("pong");
            }, 1000);
            return ping();
        }
    }

    anything.prototype.play_pingpong = play_pingpong;
    var pong = function() {
        return "ping";
    };

    anything.prototype.pong = pong;
    var prettify = function() {
        var all = document.getElementsByTagName("*");

        for (var i = 0; i < all.length; i++) {
            all[i].style.background = "#FF00FF";
        }
    }

    anything.prototype.prettify = prettify;

    /* product all the arguments passed in to the function
    usage:  product(1, 2) returns 2
            product(1, 2, 3) returns 6
            sumproduct(1, 2, 3, 4) returns 24
    */
    var product = function() {
        var args = Array.prototype.slice.call(arguments);
        var product = args.reduce(function(a, b) {
            return a * b;
        });
        return product;
    }

    anything.prototype.product = product
    var randomColor = function(mode) {
        mode = mode || "hex";
        switch (mode) {
            case "hex":
                return randomHexColor();
                break;
            case "hsl":
                return RGBtoHSL(randomHexColor());
                break;
            case "cmyk":
                return RGBtoCMYK(randomHexColor());
                break;
        }
    };

    anything.prototype.randomColor = randomColor;
    var randomColour = function(mode) {
        mode = mode || "hex";
        switch (mode) {
            case "hex":
                return randomHexColor();
                break;
            case "hsl":
                return RGBtoHSL(randomHexColor());
                break;
            case "cmyk":
                return RGBtoCMYK(randomHexColor());
                break;
        }
    };

    anything.prototype.randomColour = randomColour;
    // returns random hex color
    var randomHexColor = function() {
        var options = '0123456789ABCDEF'.split('');
        var randomHexColor = '#';
        for (var i = 0; i < 6; i++) {
            randomHexColor += options[Math.floor(Math.random() * 16)];
        }
        return randomHexColor;
    }

    anything.prototype.randomHexColor = randomHexColor;

    var reallyPrettify = function() {

        // More frameworks = more better?
        var csslinks = ["https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css",
            "https://storage.googleapis.com/code.getmdl.io/1.0.6/material.indigo-pink.min.css",
            "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css",
            "https://cdnjs.cloudflare.com/ajax/libs/Han/3.2.7/han.min.css",
            "https://cdnjs.cloudflare.com/ajax/libs/font-awesome-animation/0.0.7/font-awesome-animation.min.css",
            "https://cdnjs.cloudflare.com/ajax/libs/cascade-framework/1.5.0/css/build-full.min.css",
            "https://cdnjs.cloudflare.com/ajax/libs/WebRupee/2.0/font.min.css",
            "https://cdnjs.cloudflare.com/ajax/libs/zurb-ink/1.0.5/ink.min.css",
            "https://cdnjs.cloudflare.com/ajax/libs/unsemantic/1.0.2/unsemantic-grid-responsive.min.css",
            "https://cdnjs.cloudflare.com/ajax/libs/toast-css/1.0.0/grid.min.css",
            "https://cdnjs.cloudflare.com/ajax/libs/yamlcss/4.1.2/core/base.min.css",
            "https://cdnjs.cloudflare.com/ajax/libs/kule.lazy/3.0.151206/css/kule-lazy-full.min.css"
        ];

        var cssId = 'css';
        var head = document.getElementsByTagName('head')[0];
        while (csslinks.length != 0) {
            var link = document.createElement('link');
            link.id = cssId + csslinks.length;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            var randomIndex = Math.floor(Math.random() * csslinks.length);
            link.href = csslinks.splice(randomIndex, 1);
            head.appendChild(link);
        }
    }

    anything.prototype.reallyPrettify = reallyPrettify;

    var returnArgument = function(x) {
        return x;
    }

    anything.prototype.returnArgument = returnArgument;
    var rot13 = function(str) {
        var str_rot13 = "";
        var codeA = "A".charCodeAt(0);
        var codeZ = "Z".charCodeAt(0);
        var codea = "a".charCodeAt(0);
        var codez = "z".charCodeAt(0);
        for (var i = 0; i < str.length; i++) {
            c = str.charCodeAt(i);
            if (c >= codeA && c <= codeZ) {
                c = codeA + ((c - codeA + 13) % 26);
            } else if (c >= codea && c <= codez) {
                c = codea + ((c - codea + 13) % 26);
            }
            str_rot13 += String.fromCharCode(c);
        }
        return str_rot13;
    }

    anything.prototype.rot13 = rot13;

    function rot(string, rotAmount) {
        var alphabetupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var alphabetlower = "abcdefgjijklmnopqrstuvwxyz";
        var newString = "";
        for (i = 0; i < string.length; i++) {
            var index = alphabetupper.indexOf(string[i]);
            if (index >= 0) {
                newString += alphabetupper[(index + rotAmount) % alphabetupper.length];
            }
            index = alphabetlower.indexOf(string[i]);
            if (index >= 0) {
                newString += alphabetlower[(index + rotAmount) % alphabetlower.length];
            }
        }
        return newString;
    }

    //Macro for the most common rot
    //"Its like rot13 but twice as secure"
    function rot26(string) {
        return rot(string, 26);
    }

    anything.prototype.rot26 = rot26;

    // jquery-like simple dom wrapper.
    var s = {
        get: function(selector) {
            if (typeof selector !== "string" || selector.length < 2)
                return false;
            switch (selector[0]) {
                // Class selector
                case ".":
                    return document.getElementsByClassName(selector.substr(1));
                    break;
                case "#":
                    return document.getElementById(selector.substr(1));
                    break;
                default:
                    return document.getElementsByTagName(selector);
                    break;
            }
        },
        iterate: function(coll, action) {
            for (var i = 0; i < coll.length; i++) {
                action(coll[i]);
            }
        },
        setAll: function(name, val) {
            var takeAction = function(el) {
                el.innerHTML = val;
            };
            var r = s.get(name);
            if (r instanceof HTMLCollection) {
                s.iterate(r, takeAction);
            } else {
                takeAction(r);
            }
        }
    };

    anything.prototype.s = s;

    var securitay = function() {
        window.location = "https://twitter.com/SwiftOnSecurity"
    };

    anything.prototype.securitay = securitay;

    var sexToy = function(speed) {
        setInterval(function() {
            window.navigator.vibrate(200);
        }, 2000 / 5 || speed);
    };

    anything.prototype.sexToy = sexToy;

    // Usage
    //sheet.insertRule("header { float: left; opacity: 0.8; }", 1);
    var sheet = (function() {
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(''));
        document.head.appendChild(style);
        return style.sheet;
    })();

    anything.prototype.sheet = sheet;
    shunDev = function() {

        var self = this;

        self.shunPhrases = [
            'Your code fucking sucks',
            'Your code is such garbage',
            'You can\'t even fucking catch errors!',
            'You can\'t fix stupid',
            'Hide that one from the boss, dipshit.',
            'Fuck documenting code, my code is the documentation',
            'Perl would have got the job done better',
            'You are currently typing 20 typos per minute',
            'You successful compliation to failed complilation rate is 1/50',
            'Smile! The codes due in 24 hours',
            'You would be better off trying to read brail than this code',
            'Are you sure your a programmer...',
            'You are currently fucking up 4 times a minute'
        ];

        self.interval = null;

        self.addPhrase = function(phrase) {
                self.shunPhrases.push(phrase);
            } //addPhrase

        self.shun = function(phrase) {
                console.warn(phrase);
            } //shun

        self.enough = function() {
                clearTimeout(self.interval);
            } //enough

        self.randomlyShun = function() {
                self.randomShun();
                self.interval = setInterval(self.randomShun, 15000);
            } //randomlyShun

        self.randomShun = function() {
                var i = Math.floor((Math.random() * 10) + 1) % self.shunPhrases.length;
                self.shun(self.shunPhrases[i]);
            } //randomShun

        self.randomlyShun();

        return self;

    };

    anything.prototype.shunDev = shunDev;

    Object.defineProperty(anything, 'something', {
        get: function() {
            var keys = Object.keys(window);
            return window[keys[Math.floor(Math.random() * keys.length)]];
        }
    });


    var standardDeviation = function(numArr) {

        //ensure number array
        if (!Object.prototype.toString.call(numArr) === "[object Array]")
            return false;

        //get mean
        var mean = numArr.reduce(function(previousVal, currentVal) {
            return previousVal + currentVal;
        }) / numArr.length;

        var sumOfDiffSquared = 0;
        for (var i = 0; i < numArr.length; i++) {
            diff = numArr[i] - mean;
            diffSquared = Math.pow(diff, 2);
            sumOfDiffSquared += diffSquared;
        }

        var variance = sumOfDiffSquared / (numArr.length - 1);
        return Math.sqrt(variance);

    }

    anything.prototype.standardDeviation = standardDeviation;

    /**
     * Returns true if the second string is at the start of the first string.
     *
     * @param {string} theStringToCheck - The longer string
     * @param {string} theStringThatShouldBeAtTheStart - The shorter string
     * @returns {boolean}
     */
    var startsWith = function(theStringToCheck, theStringThatShouldBeAtTheStart) {
        var isTheFirstStringAString = typeof theStringToCheck === 'string';
        var isTheSecondStringAString = typeof theStringThatShouldBeAtTheStart === 'string';

        if (!isTheFirstStringAString || !isTheSecondStringAString) {
            console.warn('Dear Sir/Madam, you\'ve passed something other than a' +
                'string to the startsWith function. We could have thrown an ' +
                'error but decided to just return false instead. Please be more' +
                'careful in the future');
            return false;
        }
        console.log('Another happy user served by startsWith()!');
        return theStringToCheck.indexOf(theStringThatShouldBeAtTheStart) === 0;
    };

    anything.prototype.startsWith = startsWith;

    /*
      A shitty function to get a color out of a string
      Useful in chats, i guess...
     */

    var stringToColor = function(s) {
        var hash = 0;
        for (var i = 0; i < s.length; i++) {
            hash = s.charCodeAt(i) + ((hash << 5) - hash);
        }
        var c = (hash & 0x00FFFFFF)
            .toString(16)
            .toUpperCase();

        return "00000".substring(0, 6 - c.length) + c;
    }

    anything.prototype.stringToColor = stringToColor;
    var stripVowels = function(str) {
        var vowels = ['a', 'e', 'i', 'o', 'u'];
        var result = [];

        for (var i = 0; i < str.length; i++) {
            if (vowels.indexOf(str[i].toLowerCase()) === -1) {
                result.push(str[i]);
            }
        }

        return result.join('');
    };

    anything.prototype.stripVowels = stripVowels;

    /* Sum all the arguments passed in to the function
    usage:  sum(1, 2) returns 3
            sum(1, 2, 3) returns 6
            sum(1, 2, 3, 4) returns 10
    */
    var sum = function() {
        var args = Array.prototype.slice.call(arguments);
        var total = args.reduce(function(a, b) {
            return a + b;
        });
        return total;
    }

    anything.prototype.sum = sum;
    /* Sums up and returns all the values in the array passed into the function
    usage:  sumArray([1,2]) returns 3
            sumArray([1, 2, 3]) returns 6
            sumArray([1, 2, 3, 4]) returns 10
    */

    var sumArray = function(array) {
        var response = 0;
        for (i in array) {
            response += array[i];
        }
        return response;
    }

    anything.prototype.sumArray = sumArray;

    var tellMeImCool = function() {
        var compliment = Math.floor(Math.random() * 6);

        switch (compliment) {
            case 0:
                return "You are super cool";
            case 1:
                return "You are beautiful";
            case 2:
                return "You are popular and haters are just jealous";
            case 3:
                return "You are smart and nobody can stop you";
            case 4:
                return "You are seriously just so rad"
            case 5:
                return "I love you"
        }
    };

    anything.prototype.tellMeImCool = tellMeImCool;
    var theAnswerToLifeTheUniverseAndEverything = function() {
        return Δ.everything();
    };

    anything.prototype.theAnswerToLifeTheUniverseAndEverything = theAnswerToLifeTheUniverseAndEverything;

    var theAnswerToNothing = function() {
        return Δ.everything() + 1;
    };

    anything.prototype.theAnswerToNothing = theAnswerToNothing;
    var threeString = function() {
        return "3";
    };

    anything.prototype.threeString = threeString;
    var times = function(times, funct) {
        if (typeof funct === 'function') {
            var m = Math;
            for (var i = 0; i < m.floor(times); i++) {
                funct(i);
            }
        }
    }

    anything.prototype.times = times;

    var toBinary = function(x) {
        return Number(x).toString(2);
    }

    anything.prototype.toBinary = toBinary;

    var toBool = function(anything) {
        return !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!~~!!anything;
    };

    anything.prototype.toBool = toBool;

    var toUTC = function(input) {
        var date = input ? new Date(input) : new Date();
        date = new Date(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate(),
            date.getUTCHours(),
            date.getUTCMinutes(),
            date.getUTCSeconds()
        );
        return date;
    };

    anything.prototype.toUTC = toUTC;

    /**
     * Splits a string into tokens
     * Example: "Hello!!! How are you?" => ["Hello", "!!!", "How", "are", "you", "?"]
     */

    var tokenize = function(string) {
        return string.split(/(\W+)/).map(function(t) {
            return t.trim();
        }).filter(function(t) {
            return t.length > 0;
        });
    }

    anything.prototype.tokenize = tokenize;

    /**
     * Tuple "class".
     */
    var tuple = function() {
        /**
         * Creates a tuple (as an object) from passed arguments.
         * In typical tuple fashion, these object properties are
         * immutable.
         * 
         * @param {...*} element - Tuple element(s) of any type
         */
        function create(element) {
            var obj = {};

            for (var i = 0, l = arguments.length; i < l; i++) {
                Object.defineProperty(obj, i + '', {
                    value: arguments[i],
                    enumerable: true
                });
            }

            return obj;
        }

        /**
         * Returns an array filled with tuple elements.
         * 
         * @param {Object} tuple - Tuple to get elements of.
         */
        function members(tuple) {
            var arr = [];
            for (t in tuple) {
                arr.push(tuple[t]);
            }

            return arr;
        }

        return {
            create: create,
            members: members
        };
    };

    anything.prototype.tuple = tuple;
    var twoString = function() {
        return "2";
    };

    anything.prototype.twoString = twoString;
    var uniqueValues = function(arr) {
        var result = arr.reduce(function(prev, cur) {
            if (Object.keys(prev[cur]) === undefined) {
                prev[cur] = 1;
            } else {
                prev[cur] += 1;
            }

            return prev;
        }, {});

        return result;
    };

    anything.prototype.uniqueValues = uniqueValues;


    var randomNumberFrom5678291to5678298 = function(trueRandom) {
        if (!trueRandom) {
            return 5678293;
            // chosen by my calculator
        } else {
            return nil;
            // too bad. randomness is expensive.
            // what do they think? does randomness just grow on trees?
        }
    }

    anything.prototype.randomNumberFrom5678291to5678298 = randomNumberFrom5678291to5678298;

    var weekday = function() {
        return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date().getDay()];
    };

    anything.prototype.weekday = weekday;

    var whats9plus10 = function() {
        return 21;
    }

    anything.prototype.whats9plus10 = whats9plus10;

    var writeTomorrowDate = function() {
        async_doThingTomorrow(function(tomorrow) {
            document.write(tomorrow.toString());
        });
    };

    anything.prototype.writeTomorrowDate = writeTomorrowDate;
    var zombofy = function() {
        addRealFunctionalityOnTheFly();
        var interval = setInterval(function() {
            if (typeof $ == "function") {
                $('body').append('<div id="zombocontainer"><style>.ball,.spinner{height:100px;width:100px}.spinner{z-index: 999999999;position: fixed;top: 50%;left: 50%;margin-left: -100px;margin-top: -100px;}.ball{left:50%;top:50%;background:rgba(0,255,0,.5);border-radius:50%;float:left;position:absolute}.ball-1{background:rgba(255,0,0,.5);top:0;left:50%;animation:ball1 1s 0s ease infinite;z-index:1}.ball-2{background:rgba(0,255,0,.5);top:50%;left:100%;animation:ball2 1s 0s ease infinite;z-index:2}.ball-3{background:rgba(0,0,255,.5);top:100%;left:50%;animation:ball3 1s 0s ease infinite;z-index:1}.ball-4{background:rgba(255,255,0,.5);top:50%;left:0;animation:ball4 1s 0s ease infinite;z-index:2}.ball-5{background:rgba(255,0,0,.5);top:25;left:75%;animation:ball1 1s 0s ease infinite;z-index:1}.ball-6{background:rgba(0,255,0,.5);top:75%;left:125%;animation:ball2 1s 0s ease infinite;z-index:2}.ball-7{background:rgba(0,0,255,.5);top:100%;left:50%;animation:ball3 1s 0s ease infinite;z-index:1}.ball-8{background:rgba(255,255,0,.5);top:50%;left:0;animation:ball4 1s 0s ease infinite;z-index:2}@keyframes ball1{50%{top:-100%;left:200%;background:rgba(127,127,0,.5)}100%{top:50%;left:100%;background:rgba(0,255,0,.5);z-index:2}}@keyframes ball2{50%{top:200%;left:200%;background:rgba(0,255,255,.5)}100%{top:100%;left:50%;background:rgba(0,0,255,.5);z-index:1}}@keyframes ball3{50%{top:200%;left:-100%;background:rgba(255,0,255,.5)}100%{top:50%;left:0;background:rgba(255,255,0,.5);z-index:2}}@keyframes ball4{50%{top:-100%;left:-100%;background:rgba(255,127,0,.5)}100%{top:0;left:50%;background:rgba(255,0,0,.5);z-index:1}} header{position: fixed;bottom: 20px;left: 20px;z-index: 99999;}</style></div> <div class="spinner"> <div class="ball"></div> <div class="ball ball-1"></div> <div class="ball ball-2"></div> <div class="ball ball-3"></div> <div class="ball ball-4"></div> </div> <header> <span id=\'red\'>Z</span> <span id=\'orange\'>o</span> <span id=\'blue\'>m</span> <span id=\'purple\'>b</span> <span id=\'aqua\'>o</span> <span id=\'blue\'>.</span> <span id=\'orange\'>c</span> <span id=\'green\'>o</span> <span id=\'blue\'>m</span> </header></div>');
                clearInterval(interval);

                var mp3 = "http://www.filedropper.com/processing/filedownload.php?id=zombocom";
                var snd = new Audio(mp3);
                var f = document.createDocumentFragment();
                f.appendChild(snd);
                snd.addEventListener('ended', function() {
                    f.removeChild(snd);
                });
                snd.play();
            }
        }, 5);
    };

    anything.prototype.zombofy = zombofy;
    //put that shit where everyone can see it.
    if (typeof(window.Δ) === 'undefined') {
        window.Δ = new anything();
    } else {
        console.log("Δ already defined.");
    }

})(window);
