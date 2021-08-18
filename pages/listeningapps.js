import Header from "components/Header";
import Head from "next/head";
import Footer from "components/Footer";
import Image from "next/image";
import Fade from "react-reveal/Fade";

function listeningapps() {
  return (
    <div>
      <Head>
        <title>Listening Apps | Audible.in</title>
        <link rel="icon" href="https://www.audible.in/favicon.ico" />
      </Head>
      <Header />
      <main className="w-[82vw] flex flex-col mt-10 items-center overflow-x-hidden justify-center mx-auto dark:text-gray-100">
        <Fade left>
          <div className="mb-5">
            <Image
              src="https://m.media-amazon.com/images/G/31//AudibleIN/2018/audibleweb/October/how_to_listen_top_banner_desktop._CB1198675309_.jpg"
              width={960}
              height={300}
              alt="alt-banner"
            />
          </div>
        </Fade>
        <Fade right>
          <h1 className="text-3xl mt-5 justify-self-start mb-10 font-medium">
            Start your journey with these great first listens
          </h1>
        </Fade>
        <Fade left>
          <Image
            src="https://m.media-amazon.com/images/G/31/AudibleIN/en_IN/images/creative/landing/ADBLCRE-3844_Trial_Devices_Listen_banner3._CB481983512_.jpg"
            width={1000}
            height={392}
            alt="alt-banner"
          />
          <div className="flex w-[72vw] mt-10 mb-10 justify-between">
            <div className="grid">
              <div className="flex justify-center space-x-3">
                <div className="mr-3">
                  <Image
                    src="https://m.media-amazon.com/images/G/31/AudibleIN/en_IN/images/creative/landing/Android-Logo._CB460855871_.png"
                    width={30}
                    height={35}
                    alt="alt-logo"
                  />
                </div>
                <p className="font-semibold text-md mt-1 text-center">
                  Android
                </p>
              </div>
              <button className="text-center px-10 py-2 my-1 mt-2 w-80 transition duration-500 ease-in-out transform rounded-sm bg-darkYellow hover:bg-lightYellow hover:-translate-y-1 hover:scale-110 focus:outline-none">
                Get The App
              </button>
              <a
                className="text-center mt-2 text-sm font-medium text-blue-800"
                href="https://help.audible.in/s/android-page?pf_rd_p=eddefac0-a15d-46f2-a315-c8c4d3a0847c&pf_rd_r=P53GBC99AF8RKYKJNHJJ"
              >
                Visit the Support Page
              </a>
            </div>
            <div className="grid">
              <div className="flex justify-center space-x-3">
                <div className="mr-3">
                  <Image
                    src="https://m.media-amazon.com/images/G/31/AudibleIN/en_IN/images/creative/landing/Apple-Logo._CB460855871_.png"
                    width={30}
                    height={35}
                    alt="alt-logo"
                  />
                </div>
                <p className="font-semibold text-md mt-1 text-center">
                  iPhone/iPod Touch
                </p>
              </div>
              <button className="text-center px-10 py-2 my-1 mt-2 w-80 transition duration-500 ease-in-out transform rounded-sm bg-darkYellow hover:bg-lightYellow hover:-translate-y-1 hover:scale-110 focus:outline-none">
                Get The App
              </button>
              <a
                className="text-center mt-2 text-sm font-medium text-blue-800"
                href="https://help.audible.in/s/android-page?pf_rd_p=eddefac0-a15d-46f2-a315-c8c4d3a0847c&pf_rd_r=P53GBC99AF8RKYKJNHJJ"
              >
                Visit the Support Page
              </a>
            </div>
          </div>
        </Fade>
        <Fade right>
          <Image
            src="https://m.media-amazon.com/images/G/31/AudibleIN/en_IN/images/creative/1055_tabletbanner._CB482795836_.jpg"
            width={1000}
            height={392}
            alt="alt-banner"
          />
          <div className="flex w-[72vw] mt-10 mb-10 justify-between">
            <div className="grid">
              <div className="flex justify-center space-x-3">
                <div className="mr-3">
                  <Image
                    src="https://m.media-amazon.com/images/G/31/AudibleIN/en_IN/images/creative/landing/Android-Logo._CB460855871_.png"
                    width={30}
                    height={35}
                    alt="alt-logo"
                  />
                </div>
                <p className="font-semibold text-md mt-1 text-center">
                  Android
                </p>
              </div>
              <button className="text-center px-10 py-2 my-1 mt-2 w-80 transition duration-500 ease-in-out transform rounded-sm bg-darkYellow hover:bg-lightYellow hover:-translate-y-1 hover:scale-110 focus:outline-none">
                Get The App
              </button>
              <a
                className="text-center mt-2 text-sm font-medium text-blue-800"
                href="https://help.audible.in/s/android-page?pf_rd_p=47f52103-8935-40c7-8550-0733cb5fbf11&pf_rd_r=P53GBC99AF8RKYKJNHJJ"
              >
                Visit the Support Page
              </a>
            </div>
            <div className="grid">
              <div className="flex justify-center space-x-3">
                <div className="mr-3">
                  <Image
                    src="https://m.media-amazon.com/images/G/31/AudibleIN/en_IN/images/creative/landing/Apple-Logo._CB460855871_.png"
                    width={30}
                    height={35}
                    alt="alt-logo"
                  />
                </div>
                <p className="font-semibold text-md mt-1 text-center">iPad</p>
              </div>
              <button className="text-center px-10 py-2 my-1 mt-2 w-80 transition duration-500 ease-in-out transform rounded-sm bg-darkYellow hover:bg-lightYellow hover:-translate-y-1 hover:scale-110 focus:outline-none">
                Get The App
              </button>
              <a
                className="text-center mt-2 text-sm font-medium text-blue-800"
                href="https://help.audible.in/s/ios_page?pf_rd_p=47f52103-8935-40c7-8550-0733cb5fbf11&pf_rd_r=P53GBC99AF8RKYKJNHJJ"
              >
                Visit the Support Page
              </a>
            </div>
          </div>
        </Fade>
        <Fade left>
          <Image
            src="https://m.media-amazon.com/images/G/31/AudibleIN/en_IN/images/creative/landing/12-16-13_Device_Center_us_R3_10._CB449949503_.jpg"
            width={1000}
            height={392}
            alt="alt-banner"
          />
          <div className="flex w-[72vw] mt-10 mb-10 justify-between">
            <div className="grid">
              <div className="flex justify-center space-x-3">
                <div className="mr-3">
                  <Image
                    src="https://m.media-amazon.com/images/G/31/AudibleIN/en_IN/images/creative/landing/audible_cloud_player._CB485936020_.png"
                    width={51}
                    height={29}
                    alt="alt-logo"
                  />
                </div>
                <p className="font-semibold text-md mt-1 text-center">
                  Stream Your Audio
                </p>
              </div>
              <button className="text-center px-10 py-2 my-1 mt-2 w-80 transition duration-500 ease-in-out transform rounded-sm bg-darkYellow hover:bg-lightYellow hover:-translate-y-1 hover:scale-110 focus:outline-none">
                Get The App
              </button>
            </div>
            <div className="grid">
              <div className="flex justify-center space-x-3">
                <div className="mr-3">
                  <Image
                    src="https://m.media-amazon.com/images/G/31/AudibleIN/en_IN/images/creative/landing/Apple-Logo._CB460855871_.png"
                    width={30}
                    height={35}
                    alt="alt-logo"
                  />
                </div>
                <p className="font-semibold text-md mt-1 text-center">
                  Apple Books & iTunes
                </p>
              </div>
              <button className="text-center px-10 py-2 my-1 mt-2 w-80 transition duration-500 ease-in-out transform rounded-sm bg-darkYellow hover:bg-lightYellow hover:-translate-y-1 hover:scale-110 focus:outline-none">
                Get The App
              </button>
            </div>
          </div>
        </Fade>
        <div>
          <Fade right>
            <h3 className="my-2 text-xl mt-20 font-medium dark:text-gray-100">
              Still have questions?
            </h3>
          </Fade>
          <Fade left>
            <div className="text-center mb-20 mt-6">
              <a className="text-center cursor-pointer mt-2 text-sm font-medium text-blue-800">
                Contact us
              </a>
            </div>
          </Fade>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default listeningapps;
