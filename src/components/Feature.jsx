import React from "react";
import developer from "../icons/developer.png";
import integrations from "../icons/integration.png";
import workflow from "../icons/workflow.png";
export const Feature = () => {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-e7f9d7d elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="e7f9d7d"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-no">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5189c36"
          data-id="5189c36"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-0dab8ff elementor-widget elementor-widget-feature"
              data-id="0dab8ff"
              data-element_type="widget"
              data-widget_type="feature.default"
            >
              <div className="elementor-widget-container">
                <div
                  className="default-padding bg-contain-right-bottom overflow-hidden mt-xs--50 mt-md--60"
                  style={{
                    backgroundImage:
                      "url(https://wpriverthemes.com/anaton/wp-content/uploads/2023/05/12.png)",
                  }}
                >
                  <div className="container">
                    <div className="relative">
                      <div className="row align-center">
                        <div className="col-lg-6">
                          <div className="feature-style-one-box">
                            <div className="row align-center">
                              <div className="col-lg-6">
                                <div className="item-grid">
                                  <div className="feature-style-one">
                                    <div
                                      className="bg"
                                      style={{
                                        backgroundImage:
                                          "url(https://wpriverthemes.com/anaton/wp-content/uploads/2023/05/13.png)",
                                      }}
                                    ></div>
                                    <div className="icon">
                                      <img src={integrations} alt="developer" />
                                    </div>
                                    <h4>Integrations</h4>
                                  </div>

                                  <div className="feature-style-one">
                                    <div
                                      className="bg"
                                      style={{
                                        backgroundImage:
                                          "url(https://wpriverthemes.com/anaton/wp-content/uploads/2023/05/13.png)",
                                      }}
                                    ></div>
                                    <div className="icon">
                                      <img src={workflow} alt="" />
                                    </div>
                                    <h4>Workflows</h4>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6 mt-md-30 mt-xs-30">
                                <div className="item-grid">
                                  <div className="feature-style-one active">
                                    <div
                                      className="bg"
                                      style={{
                                        backgroundImage:
                                          "url(https://wpriverthemes.com/anaton/wp-content/uploads/2023/05/13.png)",
                                      }}
                                    ></div>

                                    <img src={developer} alt="developer" />

                                    <h4>Community</h4>
                                    <p>
                                      Plan upon yet way get cold spot its week.
                                      Almost do am or limits hearts. Resolve
                                      parties but why she shewing. She sang
                                      know.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="feature-shape">
                              <img
                                decoding="async"
                                src="https://wpriverthemes.com/anaton/wp-content/uploads/2023/05/11.png"
                                alt="Image Not Found"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-5 offset-lg-1">
                          <div className="description-layout-one mt-md-50 mt-xs-30">
                            <h4 className="sub-title">Бидний онцлог</h4>
                            <h2 className="title">
                              Хамгийн хялбар шийдэл <br /> таны ажлын ачааллыг
                              хөнгөвчлөнө
                            </h2>
                            <p>
                              Contrasted dissimilar get joy you instrument out
                              reasonably. Again keeps at no meant stuff. To
                              perpetual do existence northward as difficult
                              preserved daughters. Continued at up to zealously.
                            </p>
                            <ul className="list-check">
                              <li>Project Initialization</li>
                              <li>Realtime Best Data Solutions.</li>
                              <li>Market Development</li>
                            </ul>
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
      </div>
    </section>
  );
};
