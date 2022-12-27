import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const TSParticles = () => {
    const particlesInit = async (main) => {
        // console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        // console.log(container);
      };

    return (
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            "autoPlay": true,
            "background": {
            //   "color": {
            //     "value": "#232741"
            //   },
              "image": "",
              "position": "50% 50%",
              "repeat": "no-repeat",
              "size": "cover",
              "opacity": 0.5
            },
            "backgroundMask": {
              "composite": "destination-out",
              "cover": {
                "color": {
                  "value": "#fff"
                },
                "opacity": 0.5
              },
              "enable": false
            },
            "fullScreen": {
              "enable": true,
              "zIndex": 1
            },
            "detectRetina": true,
            "duration": 0,
            "fpsLimit": 120,
            "interactivity": {
              "detectsOn": "window",
              "events": {
                "onClick": {
                  "enable": true,
                  // "mode": "push"
                },
                "onDiv": {
                  "selectors": "#repulse-div",
                  "enable": false,
                  "mode": "repulse",
                  "type": "circle"
                },
                "onHover": {
                  "enable": true,
                  // "mode": "bubble",
                  "parallax": {
                    "enable": false,
                    "force": 30,
                    "smooth": 20
                  }
                },
                "resize": true
              },
              "modes": {
                "attract": {
                  "distance": 200,
                  "duration": 0.4,
                  "easing": "ease-out-quad",
                  "factor": 1,
                  "maxSpeed": 50,
                  "speed": 1
                },
                "bounce": {
                  "distance": 200
                },
                "bubble": {
                  "distance": 400,
                  "duration": 2,
                  "mix": false,
                  "opacity": 0.5,
                  "size": 30,
                  "divs": {
                    "distance": 200,
                    "duration": 0.4,
                    "mix": false,
                    "selectors": []
                  }
                },
                "connect": {
                  "distance": 80,
                  "links": {
                    "opacity": 0.5
                  },
                  "radius": 60
                },
                "grab": {
                  "distance": 400,
                  "links": {
                    "blink": false,
                    "consent": false,
                    "opacity": 1
                  }
                },
                "light": {
                  "area": {
                    "gradient": {
                      "start": {
                        "value": "#ffffff"
                      },
                      "stop": {
                        "value": "#000000"
                      }
                    },
                    "radius": 1000
                  },
                  "shadow": {
                    "color": {
                      "value": "#000000"
                    },
                    "length": 2000
                  }
                },
                "push": {
                  "default": true,
                  "groups": [],
                  "quantity": 0
                },
                "remove": {
                  "quantity": 50
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4,
                  "factor": 100,
                  "speed": 1,
                  "maxSpeed": 50,
                  "easing": "ease-out-quad",
                  "divs": {
                    "distance": 200,
                    "duration": 0.4,
                    "factor": 100,
                    "speed": 1,
                    "maxSpeed": 50,
                    "easing": "ease-out-quad",
                    "selectors": []
                  }
                },
                "slow": {
                  "factor": 3,
                  "radius": 200
                },
                "trail": {
                  "delay": 1,
                  "pauseOnStop": false,
                  "quantity": 1
                }
              }
            },
            "manualParticles": [],
            "motion": {
              "disable": false,
              "reduce": {
                "factor": 4,
                "value": true
              }
            },
            "particles": {
              "bounce": {
                "horizontal": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0.1
                  },
                  "value": 1
                },
                "vertical": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0.1
                  },
                  "value": 1
                }
              },
              "collisions": {
                "bounce": {
                  "horizontal": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0.1
                    },
                    "value": 1
                  },
                  "vertical": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0.1
                    },
                    "value": 1
                  }
                },
                "enable": false,
                "mode": "bounce",
                "overlap": {
                  "enable": true,
                  "retries": 0
                }
              },
              "color": {
                "value": "#ffffff",
                "animation": {
                  "h": {
                    "count": 0,
                    "enable": false,
                    "offset": 0,
                    "speed": 1,
                    "decay": 0,
                    "sync": true
                  },
                  "s": {
                    "count": 0,
                    "enable": false,
                    "offset": 0,
                    "speed": 1,
                    "decay": 0,
                    "sync": true
                  },
                  "l": {
                    "count": 0,
                    "enable": false,
                    "offset": 0,
                    "speed": 1,
                    "decay": 0,
                    "sync": true
                  }
                }
              },
              "destroy": {
                "mode": "none",
                "split": {
                  "count": 1,
                  "factor": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": 3
                  },
                  "rate": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": {
                      "min": 1,
                      "max": 1
                    }
                  },
                  "sizeOffset": true
                }
              },
              "gradient": [],
              "groups": {},
              "links": {
                "blink": false,
                "color": {
                  "value": "#000"
                },
                "consent": false,
                "distance": 150,
                "enable": false,
                "frequency": 1,
                "opacity": 0.4,
                "shadow": {
                  "blur": 5,
                  "color": {
                    "value": "#000"
                  },
                  "enable": false
                },
                "triangles": {
                  "enable": false,
                  "frequency": 1
                },
                "width": 1,
                "warp": false
              },
              "move": {
                "angle": {
                  "offset": 0,
                  "value": 90
                },
                "attract": {
                  "distance": 200,
                  "enable": false,
                  "rotate": {
                    "x": 600,
                    "y": 1200
                  }
                },
                "center": {
                  "x": 50,
                  "y": 50,
                  "radius": 0
                },
                "decay": 0,
                "distance": {},
                "direction": "none",
                "drift": 0,
                "enable": true,
                "gravity": {
                  "acceleration": 9.81,
                  "enable": false,
                  "inverse": false,
                  "maxSpeed": 50
                },
                "path": {
                  "clamp": true,
                  "delay": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": 0
                  },
                  "enable": false,
                  "options": {}
                },
                "outModes": {
                  "default": "out",
                  "bottom": "out",
                  "left": "out",
                  "right": "out",
                  "top": "out"
                },
                "random": false,
                "size": false,
                "speed": 2,
                "spin": {
                  "acceleration": 0,
                  "enable": false
                },
                "straight": false,
                "trail": {
                  "enable": false,
                  "length": 10,
                  "fillColor": {
                    "value": "#000000"
                  }
                },
                "vibrate": false,
                "warp": false
              },
              "number": {
                "density": {
                  "enable": true,
                  "area": 800,
                  "factor": 1000
                },
                "limit": 0,
                "value": 10
              },
              "opacity": {
                "random": {
                  "enable": true,
                  "minimumValue": 0.1
                },
                "value": {
                  "min": 0.1,
                  "max": 1
                },
                "animation": {
                  "count": 0,
                  "enable": true,
                  "speed": 1,
                  "decay": 0,
                  "sync": false,
                  "destroy": "none",
                  "startValue": "random",
                  "minimumValue": 0.2
                }
              },
              "reduceDuplicates": false,
              "repulse": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0,
                "enabled": false,
                "distance": 3,
                "duration": 1,
                "factor": 1,
                "speed": 1
              },
              "rotate": {
                "random": {
                  "enable": true,
                  "minimumValue": 0
                },
                "value": 0,
                "animation": {
                  "enable": true,
                  "speed": 5,
                  "decay": 0,
                  "sync": false
                },
                "direction": "random",
                "path": false
              },
              "shadow": {
                "blur": 0,
                "color": {
                  "value": "#000"
                },
                "enable": false,
                "offset": {
                  "x": 0,
                  "y": 0
                }
              },
              "shape": {
                "options": {
                  "character": {
                    "fill": false,
                    "font": "Verdana",
                    "style": "",
                    "value": "*",
                    "weight": "400"
                  },
                  "char": {
                    "fill": false,
                    "font": "Verdana",
                    "style": "",
                    "value": "*",
                    "weight": "400"
                  },
                  "polygon": {
                    "sides": 5
                  },
                  "star": {
                    "sides": 5
                  },
                  /* "image": [
                    {
                      "src": 'https://i.ibb.co/7yss3cS/html-5.png',
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": 'https://i.ibb.co/ZfJL6vZ/css.png',
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": 'https://i.ibb.co/frQGJ1F/js.png',
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": 'https://i.ibb.co/Sd8BVgr/typescript.png',
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": 'https://i.ibb.co/R2BQmpb/nodejs.png',
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": 'https://i.ibb.co/1QVc3qk/github.png',
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": 'https://i.ibb.co/478Qm84/mongodb.png',
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": 'https://i.ibb.co/vk5hSYM/figma.png',
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": 'https://i.ibb.co/SQkLjrR/atom.png',
                      "width": 32,
                      "height": 32
                    }
                  ], */
                  "images": [
                    // {
                    //     "src": 'https://i.ibb.co/7yss3cS/html-5.png',
                    //     "width": 32,
                    //     "height": 32
                    //   },
                    //   {
                    //     "src": 'https://i.ibb.co/ZfJL6vZ/css.png',
                    //     "width": 32,
                    //     "height": 32
                    //   },
                      {
                        "src": 'https://i.ibb.co/frQGJ1F/js.png',
                        "width": 32,
                        "height": 32
                      },
                      {
                        "src": 'https://i.ibb.co/Sd8BVgr/typescript.png',
                        "width": 32,
                        "height": 32
                      },
                      {
                        "src": 'https://i.ibb.co/R2BQmpb/nodejs.png',
                        "width": 32,
                        "height": 32
                      },
                      {
                        "src": 'https://i.ibb.co/1QVc3qk/github.png',
                        "width": 32,
                        "height": 32
                      },
                      {
                        "src": 'https://i.ibb.co/vk5hSYM/figma.png',
                        "width": 32,
                        "height": 32
                      },
                      {
                        "src": 'https://i.ibb.co/vk5hSYM/figma.png',
                        "width": 32,
                        "height": 32
                      },
                      {
                        "src": 'https://i.ibb.co/SQkLjrR/atom.png',
                        "width": 32,
                        "height": 32
                      }
                  ]
                },
                "type": "image"
              },
              "size": {
                "random": {
                  "enable": false,
                  "minimumValue": 1
                },
                "value": 16,
                "animation": {
                  "count": 0,
                  "enable": false,
                  "speed": 40,
                  "decay": 0,
                  "sync": false,
                  "destroy": "none",
                  "startValue": "random",
                  "minimumValue": 0.1
                }
              },
              "stroke": {
                "width": 0,
                "color": {
                  "value": "#000000",
                  "animation": {
                    "h": {
                      "count": 0,
                      "enable": false,
                      "offset": 0,
                      "speed": 1,
                      "decay": 0,
                      "sync": true
                    },
                    "s": {
                      "count": 0,
                      "enable": false,
                      "offset": 0,
                      "speed": 1,
                      "decay": 0,
                      "sync": true
                    },
                    "l": {
                      "count": 0,
                      "enable": false,
                      "offset": 0,
                      "speed": 1,
                      "decay": 0,
                      "sync": true
                    }
                  }
                }
              },
              "zIndex": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0,
                "opacityRate": 1,
                "sizeRate": 1,
                "velocityRate": 1
              }
            },
            "pauseOnBlur": true,
            "pauseOnOutsideViewport": true,
            "responsive": [],
            "style": {},
            "themes": [],
            "zLayers": 100
          }}
        />
  
    );
};

export default TSParticles;
