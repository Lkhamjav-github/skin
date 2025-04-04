import React from "react";

export const Header = () => {
  return (
    <header>
      <nav className="navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed white on menu-center no-full no-background">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-menu"
            >
              <i className="fa fa-bars"></i>
            </button>
            <a
              className="navbar-brand"
              href="https://wpriverthemes.com/landing/anaton/"
            >
              <img
                src="https://wpriverthemes.com/anaton/wp-content/themes/anaton/img/logo-light.png"
                className="logo logo-display"
                alt="Logo"
              />
              <img
                src="https://wpriverthemes.com/anaton/wp-content/themes/anaton/img/logo.png"
                className="logo logo-scrolled"
                alt="Logo"
              />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navbar-menu-responsive">
            <img
              src="https://wpriverthemes.com/anaton/wp-content/themes/anaton/img/logo.png"
              alt="Logo"
            />
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-menu"
            >
              <i className="fa fa-times fa-bars"></i>
            </button>

            <ul
              data-in="#"
              data-out="#"
              className="nav navbar-nav navbar-center"
              id="menu-main-menu"
            >
              <li
                id="menu-item-465"
                className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor menu-item-has-children menu-item-465 dropdown"
              >
                <a
                  title="Demos"
                  href="#"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  Нүүр
                  <i class="fa-solid fa-angle-down"></i>
                </a>
                <ul
                  className="dropdown-menu"
                  style={{ display: "none", opacity: 1 }}
                >
                  <li
                    id="menu-item-1122"
                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-1122 dropdown"
                  >
                    <a
                      title="MultiPage"
                      href="#"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        justifyContent: "space-between",
                      }}
                    >
                      MultiPage
                      <i class="fa-solid fa-angle-right"></i>
                    </a>
                    <ul className="dropdown-menu" style={{ display: "none" }}>
                      <li
                        id="menu-item-5"
                        className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-5 active"
                      >
                        <a
                          title="Saas Landing"
                          href="https://wpriverthemes.com/anaton/"
                        >
                          Saas Landing
                        </a>
                      </li>
                      <li
                        id="menu-item-466"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-466"
                      >
                        <a
                          title="Saas Marketing"
                          href="https://wpriverthemes.com/anaton/home-version-two/"
                        >
                          Saas Marketing
                        </a>
                      </li>
                      <li
                        id="menu-item-483"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-483"
                      >
                        <a
                          title="Software Landing"
                          href="https://wpriverthemes.com/anaton/home-version-three/"
                        >
                          Software Landing
                        </a>
                      </li>
                      <li
                        id="menu-item-812"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-812"
                      >
                        <a
                          title="Personal Portfolio"
                          href="https://wpriverthemes.com/anaton/home-version-four/"
                        >
                          Personal Portfolio
                        </a>
                      </li>
                      <li
                        id="menu-item-811"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-811"
                      >
                        <a
                          title="AI Writer"
                          href="https://wpriverthemes.com/anaton/home-version-five/"
                        >
                          AI Writer
                        </a>
                      </li>
                      <li
                        id="menu-item-810"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-810"
                      >
                        <a
                          title="ChatBot"
                          href="https://wpriverthemes.com/anaton/home-version-six/"
                        >
                          ChatBot
                        </a>
                      </li>
                      <li
                        id="menu-item-809"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-809"
                      >
                        <a
                          title="App Landing"
                          href="https://wpriverthemes.com/anaton/home-version-seven/"
                        >
                          App Landing
                        </a>
                      </li>
                      <li
                        id="menu-item-808"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-808"
                      >
                        <a
                          title="Creative Agency"
                          href="https://wpriverthemes.com/anaton/home-version-eight/"
                        >
                          Creative Agency
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-1123"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1123 dropdown"
                  >
                    <a
                      title="OnePage"
                      href="#"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        justifyContent: "space-between",
                      }}
                    >
                      OnePage
                      <i class="fa-solid fa-angle-right"></i>
                    </a>
                    <ul className="dropdown-menu" style={{ display: "none" }}>
                      <li
                        id="menu-item-1127"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1127"
                      >
                        <a
                          title="Saas Landing"
                          href="https://wpriverthemes.com/anaton/onepage-one/"
                        >
                          Saas Landing
                        </a>
                      </li>
                      <li
                        id="menu-item-1131"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1131"
                      >
                        <a
                          title="Saas Marketing"
                          href="https://wpriverthemes.com/anaton/onepage-two/"
                        >
                          Saas Marketing
                        </a>
                      </li>
                      <li
                        id="menu-item-1130"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1130"
                      >
                        <a
                          title="Software Landing"
                          href="https://wpriverthemes.com/anaton/onepage-three/"
                        >
                          Software Landing
                        </a>
                      </li>
                      <li
                        id="menu-item-1126"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1126"
                      >
                        <a
                          title="Personal Portfolio"
                          href="https://wpriverthemes.com/anaton/onepage-four/"
                        >
                          Personal Portfolio
                        </a>
                      </li>
                      <li
                        id="menu-item-1125"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1125"
                      >
                        <a
                          title="AI Writer"
                          href="https://wpriverthemes.com/anaton/onepage-five/"
                        >
                          AI Writer
                        </a>
                      </li>
                      <li
                        id="menu-item-1129"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1129"
                      >
                        <a
                          title="ChatBot"
                          href="https://wpriverthemes.com/anaton/onepage-six/"
                        >
                          ChatBot
                        </a>
                      </li>
                      <li
                        id="menu-item-1128"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1128"
                      >
                        <a
                          title="APP Landing"
                          href="https://wpriverthemes.com/anaton/onepage-seven/"
                        >
                          APP Landing
                        </a>
                      </li>
                      <li
                        id="menu-item-1124"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1124"
                      >
                        <a
                          title="Creative Agency"
                          href="https://wpriverthemes.com/anaton/onepage-eight/"
                        >
                          Creative Agency
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-1196"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1196 dropdown"
                  >
                    <a
                      title="Dark Versions"
                      href="#"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        justifyContent: "space-between",
                      }}
                    >
                      Dark Versions
                      <i class="fa-solid fa-angle-right"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li
                        id="menu-item-1194"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1194"
                      >
                        <a
                          title="Saas Landing"
                          href="https://wpriverthemes.com/anaton/dark-version-one/"
                        >
                          Saas Landing
                        </a>
                      </li>
                      <li
                        id="menu-item-1195"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1195"
                      >
                        <a
                          title="Software Landing"
                          href="https://wpriverthemes.com/anaton/dark-version-two/"
                        >
                          Software Landing
                        </a>
                      </li>
                      <li
                        id="menu-item-1193"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1193"
                      >
                        <a
                          title="Saas Marketing"
                          href="https://wpriverthemes.com/anaton/dark-version-three/"
                        >
                          Saas Marketing
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-279"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-279 dropdown"
              >
                <a
                  title="Pages"
                  href="#"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  Үйлчилгээ
                  <i class="fa-solid fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li
                    id="menu-item-285"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-285"
                  >
                    <a
                      title="About Us"
                      href="https://wpriverthemes.com/anaton/about-us/"
                    >
                      About Us
                    </a>
                  </li>
                  <li
                    id="menu-item-284"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-284"
                  >
                    <a
                      title="Team"
                      href="https://wpriverthemes.com/anaton/team-members/"
                    >
                      Team
                    </a>
                  </li>
                  <li
                    id="menu-item-280"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-280"
                  >
                    <a
                      title="Team Details"
                      href="https://wpriverthemes.com/anaton/team-single/"
                    >
                      Team Details
                    </a>
                  </li>
                  <li
                    id="menu-item-283"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-283"
                  >
                    <a
                      title="Pricing"
                      href="https://wpriverthemes.com/anaton/pricing/"
                    >
                      Pricing
                    </a>
                  </li>
                  <li
                    id="menu-item-282"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-282"
                  >
                    <a
                      title="Faq"
                      href="https://wpriverthemes.com/anaton/questions-asked/"
                    >
                      Faq
                    </a>
                  </li>
                  <li
                    id="menu-item-281"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-281"
                  >
                    <a
                      title="Get in touch"
                      href="https://wpriverthemes.com/anaton/get-in-touch-with-us/"
                    >
                      Get in touch
                    </a>
                  </li>
                  <li
                    id="menu-item-1214"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1214"
                  >
                    <a
                      title="Coming Soon Page"
                      href="https://wpriverthemes.com/anaton/coming-soon-page/"
                    >
                      Coming Soon Page
                    </a>
                  </li>
                  <li
                    id="menu-item-286"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-286"
                  >
                    <a title="Error Page" href="/anaton/error-404">
                      Error Page
                    </a>
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-308"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-308 dropdown"
              >
                <a
                  title="Projects"
                  href="#"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  Үнийн санал
                  <i class="fa-solid fa-angle-down"></i>
                </a>
                {/* <ul className="dropdown-menu">
                  <li
                    id="menu-item-309"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-309"
                  >
                    <a
                      title="Project Style One"
                      href="https://wpriverthemes.com/anaton/recent-projects/"
                    >
                      Project Style One
                    </a>
                  </li>
                  <li
                    id="menu-item-985"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-985"
                  >
                    <a
                      title="Projects Style Two"
                      href="https://wpriverthemes.com/anaton/projects-style-two/"
                    >
                      Projects Style Two
                    </a>
                  </li>
                  <li
                    id="menu-item-1233"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1233"
                  >
                    <a
                      title="Projects Style Three"
                      href="https://wpriverthemes.com/anaton/projects-style-three/"
                    >
                      Projects Style Three
                    </a>
                  </li>
                  <li
                    id="menu-item-307"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-307"
                  >
                    <a
                      title="Project Details"
                      href="https://wpriverthemes.com/anaton/project-details/"
                    >
                      Project Details
                    </a>
                  </li>
                </ul> */}
              </li>
              {/* <li
                id="menu-item-426"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-426 dropdown"
              >
                <a
                  title="Services"
                  href="#"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  Services
                  <i class="fa-solid fa-angle-down"></i>
                </a>  <ul className="dropdown-menu">
                  <li
                    id="menu-item-428"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-428"
                  >
                    <a
                      title="Services Version One"
                      href="https://wpriverthemes.com/anaton/our-services/"
                    >
                      Services Version One
                    </a>
                  </li>
                  <li
                    id="menu-item-427"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-427"
                  >
                    <a
                      title="Services Version Two"
                      href="https://wpriverthemes.com/anaton/services-version-two/"
                    >
                      Services Version Two
                    </a>
                  </li>
                  <li
                    id="menu-item-1280"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1280"
                  >
                    <a
                      title="Services Version Three"
                      href="https://wpriverthemes.com/anaton/services-version-three/"
                    >
                      Services Version Three
                    </a>
                  </li>
                  <li
                    id="menu-item-1279"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1279"
                  >
                    <a
                      title="Services Version Four"
                      href="https://wpriverthemes.com/anaton/services-version-four/"
                    >
                      Services Version Four
                    </a>
                  </li>
                  <li
                    id="menu-item-1278"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1278"
                  >
                    <a
                      title="Services Version Five"
                      href="https://wpriverthemes.com/anaton/services-version-five/"
                    >
                      Services Version Five
                    </a>
                  </li>
                  <li
                    id="menu-item-1277"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1277"
                  >
                    <a
                      title="Services Version Six"
                      href="https://wpriverthemes.com/anaton/services-version-six/"
                    >
                      Services Version Six
                    </a>
                  </li>
                  <li
                    id="menu-item-1276"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1276"
                  >
                    <a
                      title="Services Version Seven"
                      href="https://wpriverthemes.com/anaton/services-version-seven/"
                    >
                      Services Version Seven
                    </a>
                  </li>
                  <li
                    id="menu-item-1275"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1275"
                  >
                    <a
                      title="Services Version Eight"
                      href="https://wpriverthemes.com/anaton/services-version-eight/"
                    >
                      Services Version Eight
                    </a>
                  </li>
                  <li
                    id="menu-item-429"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-429"
                  >
                    <a
                      title="Service Single"
                      href="https://wpriverthemes.com/anaton/service-single/"
                    >
                      Service Single
                    </a>
                  </li>
                </ul> 
              </li>*/}
              {/* <li
                id="menu-item-43"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-43 dropdown"
              >
                <a
                  title="Blog"
                  href="#"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  Blog
                  <i class="fa-solid fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li
                    id="menu-item-41"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-41"
                  >
                    <a
                      title="Blog Standard"
                      href="https://wpriverthemes.com/anaton/blog-standard/"
                    >
                      Blog Standard
                    </a>
                  </li>
                  <li
                    id="menu-item-40"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-40"
                  >
                    <a
                      title="Blog With Sidebar"
                      href="https://wpriverthemes.com/anaton/blog-sidebar/"
                    >
                      Blog With Sidebar
                    </a>
                  </li>
                  <li
                    id="menu-item-39"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-39"
                  >
                    <a
                      title="Blog Two Column"
                      href="https://wpriverthemes.com/anaton/blog-two-column/"
                    >
                      Blog Two Column
                    </a>
                  </li>
                  <li
                    id="menu-item-38"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38"
                  >
                    <a
                      title="Blog Three Columns"
                      href="https://wpriverthemes.com/anaton/blog-three-columns/"
                    >
                      Blog Three Columns
                    </a>
                  </li>
                  <li
                    id="menu-item-42"
                    className="menu-item menu-item-type-post_type menu-item-object-post menu-item-42"
                  >
                    <a
                      title="Blog Single"
                      href="https://wpriverthemes.com/anaton/expression-acceptance-imprudence-particular/"
                    >
                      Blog Single
                    </a>
                  </li>
                </ul>
              </li> */}
              <li
                id="menu-item-430"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-430"
              >
                <a title="Contact" href="/contact">
                  Холбоо барих
                </a>
              </li>
            </ul>
          </div>

          <div className="attr-right">
            <div className="attr-nav">
              <ul>
                <li className="button border-btn">
                  <a href="https://wpriverthemes.com/anaton/get-in-touch-with-us/">
                    Нэвтрэх
                  </a>
                </li>
              </ul>
            </div>

            <div className="overlay-screen"></div>
          </div>
        </div>
      </nav>
    </header>
  );
};
