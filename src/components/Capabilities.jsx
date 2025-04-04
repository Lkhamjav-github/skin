import React from "react";
import rigthIcon from "../icons/arrow-right-solid.svg";
import finger from "../icons/fingerbg.png";
import layers from "../icons/layers.png";
export const Capabilities = () => {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-256862e elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="256862e"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-no">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6b4bc18"
          data-id="6b4bc18"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-fd85434 elementor-widget elementor-widget-service"
              data-id="fd85434"
              data-element_type="widget"
              data-widget_type="service.default"
            >
              <div className="elementor-widget-container">
                <div
                  className="default-padding bottom-less text-center software-style-one-area"
                  style={{
                    backgroundImage:
                      "url(https://wpriverthemes.com/anaton/wp-content/uploads/2023/05/17.png)",
                  }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-8 offset-lg-2 mt-60 mt-xs-0">
                        <div className="site-heading text-center">
                          <h5 className="sub-title">Included Capabilities</h5>
                          <h2 className="title">Боломжууд</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 mb-30">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          className="services-style-one"
                        >
                          <div className="icon">
                            <img
                              className="flaticon-layers"
                              src={finger}
                              alt="finger"
                            />
                          </div>
                          <div className="info">
                            <span>Dashbaord UI</span>
                            <h4>
                              <a href="https://wpriverthemes.com/anaton/service-single/">
                                Ашиглалтын зааварчилгаа
                              </a>
                            </h4>
                          </div>
                          <a
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            href="https://wpriverthemes.com/anaton/service-single/"
                            className="icon-btn"
                          >
                            <img
                              style={{
                                width: "14px",
                                height: "16px",
                              }}
                              src={rigthIcon}
                              alt="icon"
                            />
                          </a>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6 mb-30">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          className="services-style-one active"
                        >
                          <div className="icon">
                            <img src={layers} alt="layer icon" />
                          </div>
                          <div className="info">
                            <span>Dynamic Options</span>
                            <h4>
                              <a href="https://wpriverthemes.com/anaton/service-single/">
                                Нэмэлт хөгжүүлэлтүүд
                              </a>
                            </h4>
                          </div>
                          <a
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            href="https://wpriverthemes.com/anaton/service-single/"
                            className="icon-btn"
                          >
                            <img
                              style={{ width: "14px", height: "16px" }}
                              src={rigthIcon}
                              alt=""
                            />
                          </a>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6 mb-30">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          className="services-style-one"
                        >
                          <div className="icon">
                            <img src={finger} alt="layers" />
                          </div>
                          <div className="info">
                            <span>Dashbaord UI</span>
                            <h4>
                              <a href="https://wpriverthemes.com/anaton/service-single/">
                                Аюулгүй байдал
                              </a>
                            </h4>
                          </div>
                          <a
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            href="https://wpriverthemes.com/anaton/service-single/"
                            className="icon-btn"
                          >
                            <img
                              style={{ width: "14px", height: "16px" }}
                              src={rigthIcon}
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
