import React from "react";

import Layout from "../components/layout";
import womenIllustration from "../images/womenIllustration.png";



function IndexPage() {
  return (
    <Layout>

<<<<<<< HEAD

      <section className="text-center">
        <img
          alt="Women gathering for teamwork"
          className="block w-1/2 mx-auto mb-8"
          src={womenIllustration}
        />


        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Hey there! Welcome to your first Gatsby site.
        </h2>
=======
      <section class="text-custom-300">
            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <div class="text-center lg:w-2/3 w-full">
                    <h1 class="title-font sm:text-4xl text-6xl mb-4 font-medium	 text-black font-mono">
                        Accomplish your goals by becoming confident with money. </h1>
                    <p class="leading-relaxed mb-8 font-normal">
                     In 2020, there continues to be a lack of economic education for girls and women. This further contributes to gender gaps in pay and income.
                     What does Monji want to do about it? We want to help you explore the possibilities of a financially literate future. Leave fear at the door, and let's have some fun!
                    </p>
                    <div class="flex justify-center">
                        <button
                            class="border-2 border-custom-300  text-custom-300 rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-custom-200 hover:text-custom-300 transition ease-in-out duration-700">
                             Take me the future!
                            </button>
                    </div>
                </div>
            </div>
        </section>
        <section class="">
            <div class="container mx-auto flex px-10 py-8 items-center justify-center flex-col">
                <img class="lg:w-15/15 md:w-15/5 w-20/6 mb-10 object-cover object-center rounded" alt="hero"
                    src={womenIllustration}/>
            </div>
        </section>
        <section class="">
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="flex flex-col text-center w-full mb-20">
                    <h2 class="text-xs text-black tracking-widest font-medium title-font mb-1">You are not alone.</h2>
                    <h1 class="sm:text-4xl text-4xl font-medium title-font text-black">Do you relate?
                    </h1>
                </div>
                <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-1/3">
                        <div class="flex rounded-lg h-full bg-custom-100 p-8 flex-col">
                        <div class="flex items-center mb-3">
                                <h2 class="text-gray-700 text-lg title-font font-medium"> <br></br></h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-white font-medium text-xl">2 out of 3 women say they feel
                                that they have little knowledge of financial products and services. </p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                           <div class="flex rounded-lg h-full bg-custom-100 p-8 flex-col">
                            <div class="flex items-center mb-3">
                                <h2 class="text-gray-700 text-lg title-font font-medium"><br></br></h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-white font-medium text-xl">50% of women admit they are
                                often nervous about the financial choices they make.</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                           <div class="flex rounded-lg h-full bg-custom-100 p-8 flex-col">
                            <div class="flex items-center mb-3">
                                <h2 class="text-gray-700 text-lg title-font font-medium"></h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-white font-medium text-xl">9 out of 10 women 
                                will be solely responsible for their finances at some point in their lives, 
                                yet research shows they continue to lack confidence when it comes to managing money.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="text-black">
            <div class="container px-5 py-24 mx-auto">
                <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                <svg id="Capa_1" enable-background="new 0 0 409.294 409.294" height="200" viewBox="0 0 409.294 409.294" width="200" class="inline-block text-custom-300 py-3"
                xmlns="http://www.w3.org/2000/svg">
                <path d="m0 204.647v175.412h175.412v-175.412h-116.941c0-64.48 52.461-116.941 116.941-116.941v-58.471c-96.728 0-175.412 78.684-175.412 175.412z"/>
                <path d="m409.294 87.706v-58.471c-96.728 0-175.412 78.684-175.412 175.412v175.412h175.412v-175.412h-116.941c0-64.48 52.461-116.941 116.941-116.941z"/>
                </svg>
                    <p class="leading-relaxed text-lg">I wish there were easier ways to access financial information. I want to start my own business!
                    </p>
                    <span class="inline-block h-1 w-10 rounded bg-custom-100 mt-8 mb-6"></span>
                    <h2 class="text-black font-medium title-font tracking-wider text-sm">Ana</h2>
                    <p class="text-black">18, USA</p>
                </div>
            </div>
        </section>

>>>>>>> 3a8084b9582a8c54a010a7154b52a0666550756f

    </Layout>
  );
}

export default IndexPage;
