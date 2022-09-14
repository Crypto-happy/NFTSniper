import React, { useState } from "react";
import { Images_Src } from "../config/images";

const Content = () => {
  const [releaseCounter, setReleaseCounter] = useState(false);
  //   function trendingCollections() {
  //     return {
  //       sortDir: "desc",
  //       sortByColumn: "volume",
  //       headings: [
  //         {
  //           key: "id",
  //           value: "#",
  //           sortEnabled: false,
  //         },
  //         {
  //           key: "name",
  //           value: "Name",
  //           sortEnabled: false,
  //         },
  //         {
  //           key: "volume",
  //           value: '<span>Volume<span className="table-head-pill">24h',
  //           sortEnabled: false,
  //         },
  //         {
  //           key: "cap",
  //           value: "Market Cap",
  //           sortEnabled: false,
  //         },
  //         {
  //           key: "price",
  //           value: '<span>Avg. Price<span className="table-head-pill">24h',
  //           sortEnabled: false,
  //         },
  //         {
  //           key: "sales",
  //           value: '<span>Sales<span className="table-head-pill">24h',
  //           sortEnabled: false,
  //         },
  //         {
  //           key: "score",
  //           value: "Score",
  //           sortEnabled: false,
  //         },
  //       ],
  //       projects: [],
  //       async init() {
  //         await this.loadData();
  //       },
  //       sortBy(key) {
  //         this.sortByColumn = key;

  //         if (this.sortDir === null || this.sortDir === "desc") {
  //           this.sortDir = "asc";
  //         } else {
  //           this.sortDir = "desc";
  //         }

  //         this.loadData();
  //       },
  //       async loadData() {
  //         let { data } = await window.axios.get(
  //           `/api/collection/trending?sortBy=${this.sortByColumn}&sortDir=${this.sortDir}`
  //         );

  //         this.projects = data.data;

  //         var event = new CustomEvent("reload-profile");
  //         window.dispatchEvent(event);
  //       },
  //     };
  //   }

  //   dataBroadcast = () => ({
  //     init() {
  //       window.axios
  //         .get(`/api/votes/collect`, {
  //           params: {
  //             projectIds: [
  //               6089, 6065, 3920, 760, 5355, 6524, 6382, 6064, 3922, 6590, 5643,
  //               6010, 6576, 5210,
  //             ],
  //           },
  //         })
  //         .then((data) => {
  //           var event = new CustomEvent("broadcast-votes", { detail: data.data });
  //           window.dispatchEvent(event);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     },
  //   });

  return (
    <div>
      <div className="my-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
      <div className="pb-4 max-w-7xl mx-auto px-4 lg:px-8">
        <a
          href="https://discord.gg/solslothsociety"
          className="block xs:hidden mb-4"
        >
          <img
            className="w-full"
            src="images/storage-KJRNBaBjkgvLmMem9E9MjxXY7L0BkFb0JFcRZIoF.gif"
            alt="Advertise on NFTSniper"
          />
        </a>
        <a
          href="https://discord.gg/solslothsociety"
          className="hidden xs:block lg:hidden mb-4"
        >
          <img
            className="w-full"
            src="images/storage-IRcErp2TiQnQsfmbhxU7g9HrC5TovPwP2Ph2UOhN.gif"
            alt="Advertise on NFTSniper"
          />
        </a>
        <div className="flex justify-between mb-6 md:mb-8">
          <div className="flex-shrink-0 mr-4 flex flex-col justify-center">
            <h2 className="leading-none">
              <img
                src="https://howrare.xyz/assets/img/lightning.svg"
                style={{
                  display: " inline",
                  marginTop: "-3px",
                  marginRight: "8px",
                }}
                alt="lightning"
              />
              Featured
            </h2>
          </div>
        </div>
        <div className="mb-10 md:mb-20">
          <div className="grid gap-y-8 gap-x-4 sm:gap-x-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            <a
              href="solana-monke-rejects.html"
              className="block transform hover:-translate-y-1 transition rounded-lg bg-gradient-to-r from-yellow to-red p-[2px]"
            >
              <div className="bg-gray rounded-lg flex flex-col relative h-full">
                <div className="absolute -top-4 flex text-xs justify-center inset-x-0 w-full z-10">
                  <div
                    x-data="countDown('2022-02-05 19:00:00')"
                    x-init="countDown"
                  >
                    <div
                      x-cloak
                      className={
                        "rounded-full bg-gradient-to-r from-yellow to-red p-px " +
                        (releaseCounter ? "block" : "hidden")
                      }
                    >
                      <div className="py-1 px-4 flex bg-gray rounded-full leading-5">
                        <img
                          src={Images_Src.moon}
                          className="mr-3"
                          alt="moon"
                        />
                        <span x-text="releaseCounter"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex-grow">
                  <img
                    loading="lazy"
                    src="https://paras-cdn.imgix.net/bafybeigc6z74rtwmigcoo5eqcsc4gxwkganqs4uq5nuz4dwlhjhrurofeq?w=800&auto=format,compress"
                    className="rounded-lg w-full min-h-full object-cover"
                    style={{ maxHeight: "15rem" }}
                    alt="alt"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="mt-auto p-2 sm:p-3">
                    <div className="overflow-ellipsis overflow-hidden lg:leading-6 text-secondary font-bold sm:text-base lg:text-lg">
                      Antisocial Ape Club
                    </div>
                    <span className="text-gray-500 text-xxs sm:text-xs mt-1 flex items-center">
                      <span
                        className="hidden sm:block mr-2"
                        style={{ marginTop: "5px" }}
                      >
                        <svg
                          width="12"
                          height="14"
                          viewbox="0 0 12 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.43311 0.333376C8.71614 0.332711 8.93993 0.552601 8.94059 0.845787L8.94125 1.34554C10.7777 1.48946 11.9908 2.74084 11.9928 4.65988L12 10.2771C12.0026 12.3693 10.6882 13.6567 8.58121 13.66L3.43459 13.6667C1.3408 13.6694 0.00988213 12.3514 0.00724926 10.2531L4.41826e-06 4.70186C-0.00262402 2.77016 1.16769 1.52212 3.00412 1.35353L3.00346 0.853783C3.0028 0.560597 3.22001 0.34004 3.50963 0.34004C3.79925 0.339374 4.01646 0.559264 4.01712 0.85245L4.01778 1.31888L7.92759 1.31355L7.92694 0.84712C7.92628 0.553933 8.14349 0.334043 8.43311 0.333376ZM8.70166 9.79464H8.69508C8.3923 9.80197 8.14941 10.0558 8.156 10.3624C8.15665 10.6689 8.40085 10.9214 8.70363 10.9281C9.01234 10.9274 9.26246 10.6735 9.2618 10.3604C9.2618 10.0472 9.01102 9.79464 8.70166 9.79464ZM3.27794 9.7953C2.97516 9.80863 2.7382 10.0625 2.73886 10.369C2.75268 10.6755 3.0028 10.9154 3.30558 10.9014C3.60244 10.8881 3.83874 10.6342 3.82492 10.3277C3.81834 10.0279 3.57414 9.79464 3.27794 9.7953ZM5.9898 9.79197C5.68702 9.80597 5.45072 10.0592 5.45072 10.3657C5.46454 10.6722 5.71466 10.9114 6.01744 10.8981C6.31364 10.8841 6.5506 10.6309 6.53678 10.3237C6.5302 10.0245 6.286 9.79131 5.9898 9.79197ZM3.27465 7.3965C2.97187 7.40983 2.73557 7.66371 2.73622 7.97022C2.74939 8.27673 3.00017 8.51661 3.30295 8.50262C3.59915 8.48929 3.83545 8.23542 3.82163 7.92891C3.81504 7.62906 3.5715 7.39584 3.27465 7.3965ZM5.98717 7.37318C5.68439 7.38651 5.44743 7.64038 5.44808 7.9469C5.46125 8.25341 5.71203 8.49262 6.01481 8.4793C6.31101 8.4653 6.54731 8.2121 6.53414 7.90558C6.5269 7.60573 6.28336 7.37252 5.98717 7.37318ZM8.69903 7.37652C8.39625 7.38318 8.15929 7.62972 8.15994 7.93624V7.94357C8.16653 8.25008 8.41665 8.48263 8.72009 8.47597C9.01629 8.46864 9.25259 8.21476 9.24601 7.90825C9.23218 7.61506 8.99457 7.37585 8.69903 7.37652ZM7.92891 2.33971L4.01909 2.34504L4.01975 2.8841C4.01975 3.17129 3.8032 3.39784 3.51358 3.39784C3.22396 3.39851 3.00609 3.17262 3.00609 2.88543L3.00543 2.37236C1.72191 2.50096 1.01169 3.25525 1.01366 4.70052L1.01432 4.90775L10.9798 4.89443V4.66121C10.9514 3.22859 10.2327 2.47697 8.94257 2.36503L8.94323 2.8781C8.94323 3.16463 8.72009 3.39185 8.43706 3.39185C8.14744 3.39251 7.92957 3.16596 7.92957 2.87944L7.92891 2.33971Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="-mb-1">5 Feb - 19:00</span>
                    </span>
                  </div>
                  <div className="border-t border-gray-dark p-2 sm:px-3 flex items-center">
                    <span className="text-gray-light text-xxs uppercase mr-3">
                      Floor price:
                    </span>
                    <span className="text-base md:text-xl flex items-center font-bold">
                      <img
                        src="https://howrare.xyz/assets/img/near-protocol-logo.svg"
                        className="w-6 h-6 mr-1 md:mr-3"
                        style={{ width: "20px" }}
                        alt="protocol"
                      />
                      4.2
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="sleepy-solsloth-society.html"
              className="block transform hover:-translate-y-1 transition rounded-lg bg-gradient-to-r from-yellow to-red p-[2px]"
            >
              <div className="bg-gray rounded-lg flex flex-col relative h-full">
                <div className="absolute -top-4 flex text-xs justify-center inset-x-0 w-full z-10">
                  <div x-data="countDown('')" x-init="countDown">
                    <div
                      x-cloak
                      x-show="releaseCounter"
                      className={
                        "rounded-full bg-gradient-to-r from-yellow to-red p-px " +
                        (releaseCounter ? "block" : "hidden")
                      }
                    >
                      <div className="py-1 px-4 flex bg-gray rounded-full leading-5">
                        <img
                          src={Images_Src.moon}
                          className="mr-3"
                          alt="moon"
                        />
                        <span x-text="releaseCounter"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex-grow">
                  <img
                    loading="lazy"
                    src="https://paras-cdn.imgix.net/bafkreie4ohxbaz4ocr6eddrfmfivfb3d67uymefuy4ubuh2qijodtrpgee?w=800&auto=format,compress"
                    className="rounded-lg w-full min-h-full object-cover"
                    style={{ maxHeight: "15rem" }}
                    alt="alt"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="mt-auto p-2 sm:p-3">
                    <div className="overflow-ellipsis overflow-hidden lg:leading-6 text-secondary font-bold sm:text-base lg:text-lg">
                      NEARNauts
                    </div>
                    <span className="text-gray-500 text-xxs sm:text-xs mt-1 flex items-center">
                      <span
                        className="hidden sm:block mr-2"
                        style={{ marginTop: "5px" }}
                      >
                        <svg
                          width="12"
                          height="14"
                          viewbox="0 0 12 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.43311 0.333376C8.71614 0.332711 8.93993 0.552601 8.94059 0.845787L8.94125 1.34554C10.7777 1.48946 11.9908 2.74084 11.9928 4.65988L12 10.2771C12.0026 12.3693 10.6882 13.6567 8.58121 13.66L3.43459 13.6667C1.3408 13.6694 0.00988213 12.3514 0.00724926 10.2531L4.41826e-06 4.70186C-0.00262402 2.77016 1.16769 1.52212 3.00412 1.35353L3.00346 0.853783C3.0028 0.560597 3.22001 0.34004 3.50963 0.34004C3.79925 0.339374 4.01646 0.559264 4.01712 0.85245L4.01778 1.31888L7.92759 1.31355L7.92694 0.84712C7.92628 0.553933 8.14349 0.334043 8.43311 0.333376ZM8.70166 9.79464H8.69508C8.3923 9.80197 8.14941 10.0558 8.156 10.3624C8.15665 10.6689 8.40085 10.9214 8.70363 10.9281C9.01234 10.9274 9.26246 10.6735 9.2618 10.3604C9.2618 10.0472 9.01102 9.79464 8.70166 9.79464ZM3.27794 9.7953C2.97516 9.80863 2.7382 10.0625 2.73886 10.369C2.75268 10.6755 3.0028 10.9154 3.30558 10.9014C3.60244 10.8881 3.83874 10.6342 3.82492 10.3277C3.81834 10.0279 3.57414 9.79464 3.27794 9.7953ZM5.9898 9.79197C5.68702 9.80597 5.45072 10.0592 5.45072 10.3657C5.46454 10.6722 5.71466 10.9114 6.01744 10.8981C6.31364 10.8841 6.5506 10.6309 6.53678 10.3237C6.5302 10.0245 6.286 9.79131 5.9898 9.79197ZM3.27465 7.3965C2.97187 7.40983 2.73557 7.66371 2.73622 7.97022C2.74939 8.27673 3.00017 8.51661 3.30295 8.50262C3.59915 8.48929 3.83545 8.23542 3.82163 7.92891C3.81504 7.62906 3.5715 7.39584 3.27465 7.3965ZM5.98717 7.37318C5.68439 7.38651 5.44743 7.64038 5.44808 7.9469C5.46125 8.25341 5.71203 8.49262 6.01481 8.4793C6.31101 8.4653 6.54731 8.2121 6.53414 7.90558C6.5269 7.60573 6.28336 7.37252 5.98717 7.37318ZM8.69903 7.37652C8.39625 7.38318 8.15929 7.62972 8.15994 7.93624V7.94357C8.16653 8.25008 8.41665 8.48263 8.72009 8.47597C9.01629 8.46864 9.25259 8.21476 9.24601 7.90825C9.23218 7.61506 8.99457 7.37585 8.69903 7.37652ZM7.92891 2.33971L4.01909 2.34504L4.01975 2.8841C4.01975 3.17129 3.8032 3.39784 3.51358 3.39784C3.22396 3.39851 3.00609 3.17262 3.00609 2.88543L3.00543 2.37236C1.72191 2.50096 1.01169 3.25525 1.01366 4.70052L1.01432 4.90775L10.9798 4.89443V4.66121C10.9514 3.22859 10.2327 2.47697 8.94257 2.36503L8.94323 2.8781C8.94323 3.16463 8.72009 3.39185 8.43706 3.39185C8.14744 3.39251 7.92957 3.16596 7.92957 2.87944L7.92891 2.33971Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="-mb-1">&mdash;</span>
                    </span>
                  </div>
                  <div className="border-t border-gray-dark p-2 sm:px-3 flex items-center">
                    <span className="text-gray-light text-xxs uppercase mr-3">
                      Mint price:
                    </span>
                    <span className="text-base md:text-xl flex items-center font-bold">
                      <img
                        src="https://howrare.xyz/assets/img/near-protocol-logo.svg"
                        className="w-6 h-6 mr-1 md:mr-3"
                        style={{ width: "20px" }}
                        alt="protocol"
                      />
                      0.77
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="sol-solpacas.html"
              className="block transform hover:-translate-y-1 transition rounded-lg bg-gradient-to-r from-yellow to-red p-[2px]"
            >
              <div className="bg-gray rounded-lg flex flex-col relative h-full">
                <div className="absolute -top-4 flex text-xs justify-center inset-x-0 w-full z-10">
                  <div
                    x-data="countDown('2022-02-17 17:30:00')"
                    x-init="countDown"
                  >
                    <div
                      x-cloak
                      x-show="releaseCounter"
                      className={
                        "rounded-full bg-gradient-to-r from-yellow to-red p-px " +
                        (releaseCounter ? "block" : "hidden")
                      }
                    >
                      <div className="py-1 px-4 flex bg-gray rounded-full leading-5">
                        <img
                          src={Images_Src.moon}
                          className="mr-3"
                          alt="moon"
                        />
                        <span x-text="releaseCounter"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex-grow">
                  <img
                    loading="lazy"
                    src={Images_Src.solpacas}
                    className="rounded-lg w-full min-h-full object-cover"
                    style={{ maxHeight: "15rem" }}
                    alt="solpacas"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="mt-auto p-2 sm:p-3">
                    <div className="overflow-ellipsis overflow-hidden lg:leading-6 text-secondary font-bold sm:text-base lg:text-lg">
                      Solpacas
                    </div>
                    <span className="text-gray-500 text-xxs sm:text-xs mt-1 flex items-center">
                      <span
                        className="hidden sm:block mr-2"
                        style={{ marginTop: "5px" }}
                      >
                        <svg
                          width="12"
                          height="14"
                          viewbox="0 0 12 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.43311 0.333376C8.71614 0.332711 8.93993 0.552601 8.94059 0.845787L8.94125 1.34554C10.7777 1.48946 11.9908 2.74084 11.9928 4.65988L12 10.2771C12.0026 12.3693 10.6882 13.6567 8.58121 13.66L3.43459 13.6667C1.3408 13.6694 0.00988213 12.3514 0.00724926 10.2531L4.41826e-06 4.70186C-0.00262402 2.77016 1.16769 1.52212 3.00412 1.35353L3.00346 0.853783C3.0028 0.560597 3.22001 0.34004 3.50963 0.34004C3.79925 0.339374 4.01646 0.559264 4.01712 0.85245L4.01778 1.31888L7.92759 1.31355L7.92694 0.84712C7.92628 0.553933 8.14349 0.334043 8.43311 0.333376ZM8.70166 9.79464H8.69508C8.3923 9.80197 8.14941 10.0558 8.156 10.3624C8.15665 10.6689 8.40085 10.9214 8.70363 10.9281C9.01234 10.9274 9.26246 10.6735 9.2618 10.3604C9.2618 10.0472 9.01102 9.79464 8.70166 9.79464ZM3.27794 9.7953C2.97516 9.80863 2.7382 10.0625 2.73886 10.369C2.75268 10.6755 3.0028 10.9154 3.30558 10.9014C3.60244 10.8881 3.83874 10.6342 3.82492 10.3277C3.81834 10.0279 3.57414 9.79464 3.27794 9.7953ZM5.9898 9.79197C5.68702 9.80597 5.45072 10.0592 5.45072 10.3657C5.46454 10.6722 5.71466 10.9114 6.01744 10.8981C6.31364 10.8841 6.5506 10.6309 6.53678 10.3237C6.5302 10.0245 6.286 9.79131 5.9898 9.79197ZM3.27465 7.3965C2.97187 7.40983 2.73557 7.66371 2.73622 7.97022C2.74939 8.27673 3.00017 8.51661 3.30295 8.50262C3.59915 8.48929 3.83545 8.23542 3.82163 7.92891C3.81504 7.62906 3.5715 7.39584 3.27465 7.3965ZM5.98717 7.37318C5.68439 7.38651 5.44743 7.64038 5.44808 7.9469C5.46125 8.25341 5.71203 8.49262 6.01481 8.4793C6.31101 8.4653 6.54731 8.2121 6.53414 7.90558C6.5269 7.60573 6.28336 7.37252 5.98717 7.37318ZM8.69903 7.37652C8.39625 7.38318 8.15929 7.62972 8.15994 7.93624V7.94357C8.16653 8.25008 8.41665 8.48263 8.72009 8.47597C9.01629 8.46864 9.25259 8.21476 9.24601 7.90825C9.23218 7.61506 8.99457 7.37585 8.69903 7.37652ZM7.92891 2.33971L4.01909 2.34504L4.01975 2.8841C4.01975 3.17129 3.8032 3.39784 3.51358 3.39784C3.22396 3.39851 3.00609 3.17262 3.00609 2.88543L3.00543 2.37236C1.72191 2.50096 1.01169 3.25525 1.01366 4.70052L1.01432 4.90775L10.9798 4.89443V4.66121C10.9514 3.22859 10.2327 2.47697 8.94257 2.36503L8.94323 2.8781C8.94323 3.16463 8.72009 3.39185 8.43706 3.39185C8.14744 3.39251 7.92957 3.16596 7.92957 2.87944L7.92891 2.33971Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="-mb-1">17 Feb - 17:30</span>
                    </span>
                  </div>
                  <div className="border-t border-gray-dark p-2 sm:px-3 flex items-center">
                    <span className="text-gray-light text-xxs uppercase mr-3">
                      Floor price:
                    </span>
                    <span className="text-base md:text-xl flex items-center font-bold">
                      <img
                        src="https://howrare.xyz/assets/img/near-protocol-logo.svg"
                        className="w-6 h-6 mr-1 md:mr-3"
                        style={{ width: "20px" }}
                        alt="protocol"
                      />
                      0.15
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="sol-boryoku-dragonz.html"
              className="block transform hover:-translate-y-1 transition rounded-lg bg-gradient-to-r from-yellow to-red p-[2px]"
            >
              <div className="bg-gray rounded-lg flex flex-col relative h-full">
                <div className="absolute -top-4 flex text-xs justify-center inset-x-0 w-full z-10">
                  <div
                    x-data="countDown('2021-11-04 00:31:56')"
                    x-init="countDown"
                  >
                    <div
                      x-cloak
                      x-show="releaseCounter"
                      className={
                        "rounded-full bg-gradient-to-r from-yellow to-red p-px " +
                        (releaseCounter ? "block" : "hidden")
                      }
                    >
                      <div className="py-1 px-4 flex bg-gray rounded-full leading-5">
                        <img
                          src={Images_Src.moon}
                          className="mr-3"
                          alt="moon"
                        />
                        <span x-text="releaseCounter"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex-grow">
                  <img
                    loading="lazy"
                    src="https://paras-cdn.imgix.net/bafybeih6ez2egirigswpmtkgm73vfmcwxxkj2own64glo3k3ykwirtm25u?w=800&auto=format,compress"
                    className="rounded-lg w-full min-h-full object-cover"
                    style={{ maxHeight: "15rem" }}
                    alt="alt"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="mt-auto p-2 sm:p-3">
                    <div className="overflow-ellipsis overflow-hidden lg:leading-6 text-secondary font-bold sm:text-base lg:text-lg">
                      B&#333;ryoku Dragonz
                    </div>
                    <span className="text-gray-500 text-xxs sm:text-xs mt-1 flex items-center">
                      <span
                        className="hidden sm:block mr-2"
                        style={{ marginTop: "5px" }}
                      >
                        <svg
                          width="12"
                          height="14"
                          viewbox="0 0 12 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.43311 0.333376C8.71614 0.332711 8.93993 0.552601 8.94059 0.845787L8.94125 1.34554C10.7777 1.48946 11.9908 2.74084 11.9928 4.65988L12 10.2771C12.0026 12.3693 10.6882 13.6567 8.58121 13.66L3.43459 13.6667C1.3408 13.6694 0.00988213 12.3514 0.00724926 10.2531L4.41826e-06 4.70186C-0.00262402 2.77016 1.16769 1.52212 3.00412 1.35353L3.00346 0.853783C3.0028 0.560597 3.22001 0.34004 3.50963 0.34004C3.79925 0.339374 4.01646 0.559264 4.01712 0.85245L4.01778 1.31888L7.92759 1.31355L7.92694 0.84712C7.92628 0.553933 8.14349 0.334043 8.43311 0.333376ZM8.70166 9.79464H8.69508C8.3923 9.80197 8.14941 10.0558 8.156 10.3624C8.15665 10.6689 8.40085 10.9214 8.70363 10.9281C9.01234 10.9274 9.26246 10.6735 9.2618 10.3604C9.2618 10.0472 9.01102 9.79464 8.70166 9.79464ZM3.27794 9.7953C2.97516 9.80863 2.7382 10.0625 2.73886 10.369C2.75268 10.6755 3.0028 10.9154 3.30558 10.9014C3.60244 10.8881 3.83874 10.6342 3.82492 10.3277C3.81834 10.0279 3.57414 9.79464 3.27794 9.7953ZM5.9898 9.79197C5.68702 9.80597 5.45072 10.0592 5.45072 10.3657C5.46454 10.6722 5.71466 10.9114 6.01744 10.8981C6.31364 10.8841 6.5506 10.6309 6.53678 10.3237C6.5302 10.0245 6.286 9.79131 5.9898 9.79197ZM3.27465 7.3965C2.97187 7.40983 2.73557 7.66371 2.73622 7.97022C2.74939 8.27673 3.00017 8.51661 3.30295 8.50262C3.59915 8.48929 3.83545 8.23542 3.82163 7.92891C3.81504 7.62906 3.5715 7.39584 3.27465 7.3965ZM5.98717 7.37318C5.68439 7.38651 5.44743 7.64038 5.44808 7.9469C5.46125 8.25341 5.71203 8.49262 6.01481 8.4793C6.31101 8.4653 6.54731 8.2121 6.53414 7.90558C6.5269 7.60573 6.28336 7.37252 5.98717 7.37318ZM8.69903 7.37652C8.39625 7.38318 8.15929 7.62972 8.15994 7.93624V7.94357C8.16653 8.25008 8.41665 8.48263 8.72009 8.47597C9.01629 8.46864 9.25259 8.21476 9.24601 7.90825C9.23218 7.61506 8.99457 7.37585 8.69903 7.37652ZM7.92891 2.33971L4.01909 2.34504L4.01975 2.8841C4.01975 3.17129 3.8032 3.39784 3.51358 3.39784C3.22396 3.39851 3.00609 3.17262 3.00609 2.88543L3.00543 2.37236C1.72191 2.50096 1.01169 3.25525 1.01366 4.70052L1.01432 4.90775L10.9798 4.89443V4.66121C10.9514 3.22859 10.2327 2.47697 8.94257 2.36503L8.94323 2.8781C8.94323 3.16463 8.72009 3.39185 8.43706 3.39185C8.14744 3.39251 7.92957 3.16596 7.92957 2.87944L7.92891 2.33971Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="-mb-1">4 Nov - 00:31</span>
                    </span>
                  </div>
                  <div className="border-t border-gray-dark p-2 sm:px-3 flex items-center">
                    <span className="text-gray-light text-xxs uppercase mr-3">
                      Floor price:
                    </span>
                    <span className="text-base md:text-xl flex items-center font-bold">
                      <img
                        src="https://howrare.xyz/assets/img/near-protocol-logo.svg"
                        className="w-6 h-6 mr-1 md:mr-3"
                        style={{ width: "20px" }}
                        alt="protocol"
                      />
                      343
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <h2 className="leading-none">All Collections</h2>
        <h3 className="text-sm md:text-base text-gray-light mt-3 uppercase mb-7 md:mb-8"></h3>
        <div className="relative border-gray md:border-t">
          <div className="custom-scrollbar overflow-x-auto -mr-4 lg:mr-0">
            <table className="collections-table text-right border-collapse table-auto w-full">
              <thead>
                <tr className="text-left text-xxs md:text-xs text-gray-light font-bold uppercase border-b border-gray">
                  <template x-for="heading in headings">
                    <th
                      className="pr-6 py-2 cursor-pointer"
                      x-ref="heading.key"
                    >
                      <div
                        className="flex items-center"
                        // className="heading.key === 'name' || heading.key === 'projectId' ? '' : 'justify-end'"
                      >
                        <template x-if="heading.sortEnabled">
                          <div
                            className="transform mr-2"
                            // className="{
                            //              'text-primary': heading.key === sortByColumn,
                            //              'rotate-180': sortDir === 'asc'
                            //              }"
                          >
                            <svg
                              className="block"
                              width="8"
                              height="4"
                              viewBox="0 0 8 4"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.67063 3.88492C3.70733 3.92045 3.75644 3.9495 3.81372 3.96957C3.871 3.98964 3.93475 4.00012 3.99946 4.00012C4.06417 4.00012 4.12791 3.98964 4.1852 3.96957C4.24248 3.9495 4.29158 3.92045 4.32828 3.88492L7.92857 0.418494C7.97024 0.378511 7.99468 0.331681 7.99923 0.283091C8.00377 0.234501 7.98826 0.186009 7.95436 0.142884C7.92047 0.0997591 7.86949 0.0636506 7.80697 0.0384816C7.74445 0.0133126 7.67278 4.57172e-05 7.59974 0.000122401L0.399176 0.000122401C0.326308 0.000323029 0.2549 0.0137606 0.192632 0.0389898C0.130364 0.0642191 0.079592 0.100286 0.0457757 0.143311C0.0119594 0.186336 -0.00362155 0.234692 0.000708374 0.283178C0.0050383 0.331664 0.0291153 0.378446 0.0703501 0.418494L3.67063 3.88492Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </template>
                        <div
                          className="flex flex-shrink-0 items-center whitespace-nowrap"
                          x-html="heading.value"
                        ></div>
                      </div>
                    </th>
                  </template>
                  <th
                    className="pr-6 py-2 cursor-pointer"
                    x-ref="heading.key"
                    x-ref="id"
                  >
                    <div
                      className="flex items-center justify-end"
                      //   className="heading.key === 'name' || heading.key === 'projectId' ? '' : 'justify-end'"
                    >
                      <template x-if="heading.sortEnabled">
                        <div
                          className="transform mr-2"
                          //   className="{
                          //               'text-primary': heading.key === sortByColumn,
                          //                 'rotate-180': sortDir === 'asc'
                          //               }"
                        >
                          <svg
                            className="block"
                            width="8"
                            height="4"
                            viewBox="0 0 8 4"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.67063 3.88492C3.70733 3.92045 3.75644 3.9495 3.81372 3.96957C3.871 3.98964 3.93475 4.00012 3.99946 4.00012C4.06417 4.00012 4.12791 3.98964 4.1852 3.96957C4.24248 3.9495 4.29158 3.92045 4.32828 3.88492L7.92857 0.418494C7.97024 0.378511 7.99468 0.331681 7.99923 0.283091C8.00377 0.234501 7.98826 0.186009 7.95436 0.142884C7.92047 0.0997591 7.86949 0.0636506 7.80697 0.0384816C7.74445 0.0133126 7.67278 4.57172e-05 7.59974 0.000122401L0.399176 0.000122401C0.326308 0.000323029 0.2549 0.0137606 0.192632 0.0389898C0.130364 0.0642191 0.079592 0.100286 0.0457757 0.143311C0.0119594 0.186336 -0.00362155 0.234692 0.000708374 0.283178C0.0050383 0.331664 0.0291153 0.378446 0.0703501 0.418494L3.67063 3.88492Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </template>
                      <div
                        className="flex flex-shrink-0 items-center whitespace-nowrap"
                        x-html="heading.value"
                      >
                        #
                      </div>
                    </div>
                  </th>
                  <th
                    className="pr-6 py-2 cursor-pointer"
                    x-ref="heading.key"
                    x-ref="name"
                  >
                    <div
                      className="flex items-center"
                      //   className="heading.key === 'name' || heading.key === 'projectId' ? '' : 'justify-end'"
                    >
                      <template x-if="heading.sortEnabled">
                        <div
                          className="transform mr-2"
                          //   className="{
                          //               'text-primary': heading.key === sortByColumn,
                          //               'rotate-180': sortDir === 'asc'
                          //               }"
                        >
                          <svg
                            className="block"
                            width="8"
                            height="4"
                            viewBox="0 0 8 4"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.67063 3.88492C3.70733 3.92045 3.75644 3.9495 3.81372 3.96957C3.871 3.98964 3.93475 4.00012 3.99946 4.00012C4.06417 4.00012 4.12791 3.98964 4.1852 3.96957C4.24248 3.9495 4.29158 3.92045 4.32828 3.88492L7.92857 0.418494C7.97024 0.378511 7.99468 0.331681 7.99923 0.283091C8.00377 0.234501 7.98826 0.186009 7.95436 0.142884C7.92047 0.0997591 7.86949 0.0636506 7.80697 0.0384816C7.74445 0.0133126 7.67278 4.57172e-05 7.59974 0.000122401L0.399176 0.000122401C0.326308 0.000323029 0.2549 0.0137606 0.192632 0.0389898C0.130364 0.0642191 0.079592 0.100286 0.0457757 0.143311C0.0119594 0.186336 -0.00362155 0.234692 0.000708374 0.283178C0.0050383 0.331664 0.0291153 0.378446 0.0703501 0.418494L3.67063 3.88492Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </template>
                      <div
                        className="flex flex-shrink-0 items-center whitespace-nowrap"
                        x-html="heading.value"
                      >
                        Collection
                      </div>
                    </div>
                  </th>
                  <th
                    className="pr-6 py-2 cursor-pointer"
                    x-ref="heading.key"
                    x-ref="score"
                  >
                    <div
                      className="flex items-center justify-end"
                      //   className="heading.key === 'name' || heading.key === 'projectId' ? '' : 'justify-end'"
                    >
                      <template x-if="heading.sortEnabled">
                        <div
                          className="transform mr-2"
                          //   className="{
                          //               'text-primary': heading.key === sortByColumn,
                          //               'rotate-180': sortDir === 'asc'
                          //               }"
                        >
                          <svg
                            className="block"
                            width="8"
                            height="4"
                            viewBox="0 0 8 4"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.67063 3.88492C3.70733 3.92045 3.75644 3.9495 3.81372 3.96957C3.871 3.98964 3.93475 4.00012 3.99946 4.00012C4.06417 4.00012 4.12791 3.98964 4.1852 3.96957C4.24248 3.9495 4.29158 3.92045 4.32828 3.88492L7.92857 0.418494C7.97024 0.378511 7.99468 0.331681 7.99923 0.283091C8.00377 0.234501 7.98826 0.186009 7.95436 0.142884C7.92047 0.0997591 7.86949 0.0636506 7.80697 0.0384816C7.74445 0.0133126 7.67278 4.57172e-05 7.59974 0.000122401L0.399176 0.000122401C0.326308 0.000323029 0.2549 0.0137606 0.192632 0.0389898C0.130364 0.0642191 0.079592 0.100286 0.0457757 0.143311C0.0119594 0.186336 -0.00362155 0.234692 0.000708374 0.283178C0.0050383 0.331664 0.0291153 0.378446 0.0703501 0.418494L3.67063 3.88492Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </template>
                      <div
                        className="flex flex-shrink-0 items-center whitespace-nowrap"
                        x-html="heading.value"
                      >
                        Floor Price
                      </div>
                    </div>
                  </th>
                  <th
                    className="pr-6 py-2 cursor-pointer"
                    x-ref="heading.key"
                    x-ref="price"
                  >
                    <div
                      className="flex items-center justify-end"
                      //   className="heading.key === 'name' || heading.key === 'projectId' ? '' : 'justify-end'"
                    >
                      <template x-if="heading.sortEnabled">
                        <div
                          className="transform mr-2"
                          //   className="{
                          //               'text-primary': heading.key === sortByColumn,
                          //               'rotate-180': sortDir === 'asc'
                          //               }"
                        >
                          <svg
                            className="block"
                            width="8"
                            height="4"
                            viewBox="0 0 8 4"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.67063 3.88492C3.70733 3.92045 3.75644 3.9495 3.81372 3.96957C3.871 3.98964 3.93475 4.00012 3.99946 4.00012C4.06417 4.00012 4.12791 3.98964 4.1852 3.96957C4.24248 3.9495 4.29158 3.92045 4.32828 3.88492L7.92857 0.418494C7.97024 0.378511 7.99468 0.331681 7.99923 0.283091C8.00377 0.234501 7.98826 0.186009 7.95436 0.142884C7.92047 0.0997591 7.86949 0.0636506 7.80697 0.0384816C7.74445 0.0133126 7.67278 4.57172e-05 7.59974 0.000122401L0.399176 0.000122401C0.326308 0.000323029 0.2549 0.0137606 0.192632 0.0389898C0.130364 0.0642191 0.079592 0.100286 0.0457757 0.143311C0.0119594 0.186336 -0.00362155 0.234692 0.000708374 0.283178C0.0050383 0.331664 0.0291153 0.378446 0.0703501 0.418494L3.67063 3.88492Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </template>
                      <div
                        className="flex flex-shrink-0 items-center whitespace-nowrap"
                        x-html="heading.value"
                      >
                        <span>Owners</span>
                      </div>
                    </div>
                  </th>
                  <th
                    className="pr-6 py-2 cursor-pointer"
                    x-ref="heading.key"
                    x-ref="sales"
                  >
                    <div
                      className="flex items-center justify-end"
                      //   className="heading.key === 'name' || heading.key === 'projectId' ? '' : 'justify-end'"
                    >
                      <template x-if="heading.sortEnabled">
                        <div
                          className="transform mr-2"
                          //   className="{
                          //               'text-primary': heading.key === sortByColumn,
                          //               'rotate-180': sortDir === 'asc'
                          //               }"
                        >
                          <svg
                            className="block"
                            width="8"
                            height="4"
                            viewBox="0 0 8 4"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.67063 3.88492C3.70733 3.92045 3.75644 3.9495 3.81372 3.96957C3.871 3.98964 3.93475 4.00012 3.99946 4.00012C4.06417 4.00012 4.12791 3.98964 4.1852 3.96957C4.24248 3.9495 4.29158 3.92045 4.32828 3.88492L7.92857 0.418494C7.97024 0.378511 7.99468 0.331681 7.99923 0.283091C8.00377 0.234501 7.98826 0.186009 7.95436 0.142884C7.92047 0.0997591 7.86949 0.0636506 7.80697 0.0384816C7.74445 0.0133126 7.67278 4.57172e-05 7.59974 0.000122401L0.399176 0.000122401C0.326308 0.000323029 0.2549 0.0137606 0.192632 0.0389898C0.130364 0.0642191 0.079592 0.100286 0.0457757 0.143311C0.0119594 0.186336 -0.00362155 0.234692 0.000708374 0.283178C0.0050383 0.331664 0.0291153 0.378446 0.0703501 0.418494L3.67063 3.88492Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </template>
                      <div
                        className="flex flex-shrink-0 items-center whitespace-nowrap"
                        x-html="heading.value"
                      >
                        <span>Sales</span>
                        <span className="table-head-pill">24h</span>
                      </div>
                    </div>
                  </th>
                  <th
                    className="pr-6 py-2 cursor-pointer"
                    x-ref="heading.key"
                    x-ref="volume"
                  >
                    <div
                      className="flex items-center justify-end"
                      //   className="heading.key === 'name' || heading.key === 'projectId' ? '' : 'justify-end'"
                    >
                      <template x-if="heading.sortEnabled">
                        <div
                          className="transform mr-2"
                          //   className="{
                          //               'text-primary': heading.key === sortByColumn,
                          //               'rotate-180': sortDir === 'asc'
                          //               }"
                        >
                          <svg
                            className="block"
                            width="8"
                            height="4"
                            viewBox="0 0 8 4"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.67063 3.88492C3.70733 3.92045 3.75644 3.9495 3.81372 3.96957C3.871 3.98964 3.93475 4.00012 3.99946 4.00012C4.06417 4.00012 4.12791 3.98964 4.1852 3.96957C4.24248 3.9495 4.29158 3.92045 4.32828 3.88492L7.92857 0.418494C7.97024 0.378511 7.99468 0.331681 7.99923 0.283091C8.00377 0.234501 7.98826 0.186009 7.95436 0.142884C7.92047 0.0997591 7.86949 0.0636506 7.80697 0.0384816C7.74445 0.0133126 7.67278 4.57172e-05 7.59974 0.000122401L0.399176 0.000122401C0.326308 0.000323029 0.2549 0.0137606 0.192632 0.0389898C0.130364 0.0642191 0.079592 0.100286 0.0457757 0.143311C0.0119594 0.186336 -0.00362155 0.234692 0.000708374 0.283178C0.0050383 0.331664 0.0291153 0.378446 0.0703501 0.418494L3.67063 3.88492Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </template>
                      <div
                        className="flex flex-shrink-0 items-center whitespace-nowrap"
                        x-html="heading.value"
                      >
                        <span>Volume</span>
                        <span className="table-head-pill">24h</span>
                      </div>
                    </div>
                  </th>
                  <th
                    className="pr-6 py-2 cursor-pointer"
                    x-ref="heading.key"
                    x-ref="cap"
                  >
                    <div
                      className="flex items-center justify-end"
                      //   className="heading.key === 'name' || heading.key === 'projectId' ? '' : 'justify-end'"
                    >
                      <template x-if="heading.sortEnabled">
                        <div
                          className="transform mr-2"
                          //   className="{
                          //               'text-primary': heading.key === sortByColumn,
                          //               'rotate-180': sortDir === 'asc'
                          //               }"
                        >
                          <svg
                            className="block"
                            width="8"
                            height="4"
                            viewBox="0 0 8 4"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.67063 3.88492C3.70733 3.92045 3.75644 3.9495 3.81372 3.96957C3.871 3.98964 3.93475 4.00012 3.99946 4.00012C4.06417 4.00012 4.12791 3.98964 4.1852 3.96957C4.24248 3.9495 4.29158 3.92045 4.32828 3.88492L7.92857 0.418494C7.97024 0.378511 7.99468 0.331681 7.99923 0.283091C8.00377 0.234501 7.98826 0.186009 7.95436 0.142884C7.92047 0.0997591 7.86949 0.0636506 7.80697 0.0384816C7.74445 0.0133126 7.67278 4.57172e-05 7.59974 0.000122401L0.399176 0.000122401C0.326308 0.000323029 0.2549 0.0137606 0.192632 0.0389898C0.130364 0.0642191 0.079592 0.100286 0.0457757 0.143311C0.0119594 0.186336 -0.00362155 0.234692 0.000708374 0.283178C0.0050383 0.331664 0.0291153 0.378446 0.0703501 0.418494L3.67063 3.88492Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </template>
                      <div
                        className="flex flex-shrink-0 items-center whitespace-nowrap"
                        x-html="heading.value"
                      >
                        Market Cap
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-xs md:text-base">
                  <td className="border-t border-gray">
                    <div className="flex items-center">
                      <div
                        data-id="project.id"
                        data-slug="project.slug"
                        className="mr-3 flex lg:hidden"
                        data-id="6524"
                        data-slug="sol-the-priestchain-the-churchain-trilogy"
                      >
                        <div x-data="star($el.parentElement.dataset.id, $el.parentElement.dataset.slug, '#ffffff')">
                          <div
                            className="w-7 h-7 bg-gray rounded-md flex items-center justify-center cursor-pointer"
                            //  @click.prevent="toggleWatch()"
                            //  @profile-loaded.window="dataLoaded($event.detail)"
                            //  :style="`background: ${backgroundColor}`"
                            style={{ background: null }}
                          >
                            <svg
                              focusable="false"
                              data-icon="star"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              width="18"
                              height="18"
                            >
                              <path
                                fill="#00B87F"
                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                fill="#ffffff"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span
                        className=" pr-3 py-3 flex items-center"
                        x-text="`${key + 1}`"
                      >
                        1
                      </span>
                    </div>
                  </td>
                  <td className="border-t border-gray pr-6 py-3">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-14">
                        <a
                          href="project.url"
                          href="https://nftsniper.net/collection/sol-the-priestchain-the-churchain-trilogy"
                        >
                          <img
                            loading="lazy"
                            src="project.image.profile"
                            className="w-14 h-14 object-cover rounded-md"
                            src="https://paras-cdn.imgix.net/bafybeigc6z74rtwmigcoo5eqcsc4gxwkganqs4uq5nuz4dwlhjhrurofeq?w=800&auto=format,compress"
                            alt="alt"
                          />
                        </a>
                      </div>
                      <div className="text-left pl-2 md:pl-4">
                        <a
                          href="project.url"
                          className="block text-secondary font-bold mb-1"
                          x-text="project.name"
                          href="https://nftsniper.net/collection/sol-the-priestchain-the-churchain-trilogy"
                        >
                          Antisocial Ape Club
                        </a>
                        <div className="leading-none flex-col lg:flex-row flex items-start text-xxs">
                          <div className="flex items-center">
                            <span className="uppercase mr-2 text-gray-light">
                              Supply:
                            </span>
                            <span
                              className="lg:text-xs"
                              x-text="project.supply"
                            >
                              3333
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="border-t border-gray pr-6 py-3">
                    <div className="flex items-center justify-end">
                      <span className="w-4 h-4 mr-2">
                        <img
                          src="https://howrare.xyz/assets/img/near-protocol-logo.svg"
                          alt="protocol"
                        />
                      </span>
                      <span
                        className="whitespace-nowrap"
                        x-text="project.volume"
                      >
                        11.50
                      </span>
                    </div>
                    <div className="hidden flexOff items-center justify-end">
                      <svg
                        className="block"
                        width="8"
                        height="4"
                        viewBox="0 0 8 4"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.67063 3.88492C3.70733 3.92045 3.75644 3.9495 3.81372 3.96957C3.871 3.98964 3.93475 4.00012 3.99946 4.00012C4.06417 4.00012 4.12791 3.98964 4.1852 3.96957C4.24248 3.9495 4.29158 3.92045 4.32828 3.88492L7.92857 0.418494C7.97024 0.378511 7.99468 0.331681 7.99923 0.283091C8.00377 0.234501 7.98826 0.186009 7.95436 0.142884C7.92047 0.0997591 7.86949 0.0636506 7.80697 0.0384816C7.74445 0.0133126 7.67278 4.57172e-05 7.59974 0.000122401L0.399176 0.000122401C0.326308 0.000323029 0.2549 0.0137606 0.192632 0.0389898C0.130364 0.0642191 0.079592 0.100286 0.0457757 0.143311C0.0119594 0.186336 -0.00362155 0.234692 0.000708374 0.283178C0.0050383 0.331664 0.0291153 0.378446 0.0703501 0.418494L3.67063 3.88492Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <span
                        className="text-xs"
                        x-text="project.volume_percentage"
                      >
                        32
                      </span>
                    </div>
                  </td>
                  <td className="border-t border-gray pr-6 py-3">
                    <div className="flex items-center justify-end">
                      <div className="flex items-center">
                        <span className="uppercase mr-1">1222</span>
                      </div>
                    </div>
                  </td>
                  <td className="border-t border-gray pr-6 py-3">
                    <div className="flex items-center justify-end">
                      <div className="flex items-center">
                        <span className="uppercase mr-1">55</span>
                        <span
                          className="lg:text-xs text-gray-light"
                          style={{ color: "#ff473e", opacity: "0.8" }}
                          x-text="project.supply"
                        >
                          (-13)
                        </span>
                      </div>
                    </div>
                    <div className="hidden flexOff items-center justify-end">
                      <svg
                        className="block"
                        width="8"
                        height="4"
                        viewBox="0 0 8 4"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.67063 3.88492C3.70733 3.92045 3.75644 3.9495 3.81372 3.96957C3.871 3.98964 3.93475 4.00012 3.99946 4.00012C4.06417 4.00012 4.12791 3.98964 4.1852 3.96957C4.24248 3.9495 4.29158 3.92045 4.32828 3.88492L7.92857 0.418494C7.97024 0.378511 7.99468 0.331681 7.99923 0.283091C8.00377 0.234501 7.98826 0.186009 7.95436 0.142884C7.92047 0.0997591 7.86949 0.0636506 7.80697 0.0384816C7.74445 0.0133126 7.67278 4.57172e-05 7.59974 0.000122401L0.399176 0.000122401C0.326308 0.000323029 0.2549 0.0137606 0.192632 0.0389898C0.130364 0.0642191 0.079592 0.100286 0.0457757 0.143311C0.0119594 0.186336 -0.00362155 0.234692 0.000708374 0.283178C0.0050383 0.331664 0.0291153 0.378446 0.0703501 0.418494L3.67063 3.88492Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <span
                        className="text-xs"
                        x-text="project.price.percentage"
                      >
                        91
                      </span>
                    </div>
                  </td>
                  <td className="border-t border-gray pr-6 py-3">
                    <div className="flex items-center justify-end">
                      <div className="flex items-center">
                        <span className="uppercase mr-1">$12,321</span>
                        <span
                          className="lg:text-xs text-gray-light"
                          style={{ color: "#0eeba3", opacity: "0.8" }}
                          x-text="project.supply"
                        >
                          (+36%)
                        </span>
                      </div>
                    </div>
                    <div className="hidden flexOff items-center justify-end">
                      <svg
                        className="block"
                        width="8"
                        height="4"
                        viewBox="0 0 8 4"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.67063 3.88492C3.70733 3.92045 3.75644 3.9495 3.81372 3.96957C3.871 3.98964 3.93475 4.00012 3.99946 4.00012C4.06417 4.00012 4.12791 3.98964 4.1852 3.96957C4.24248 3.9495 4.29158 3.92045 4.32828 3.88492L7.92857 0.418494C7.97024 0.378511 7.99468 0.331681 7.99923 0.283091C8.00377 0.234501 7.98826 0.186009 7.95436 0.142884C7.92047 0.0997591 7.86949 0.0636506 7.80697 0.0384816C7.74445 0.0133126 7.67278 4.57172e-05 7.59974 0.000122401L0.399176 0.000122401C0.326308 0.000323029 0.2549 0.0137606 0.192632 0.0389898C0.130364 0.0642191 0.079592 0.100286 0.0457757 0.143311C0.0119594 0.186336 -0.00362155 0.234692 0.000708374 0.283178C0.0050383 0.331664 0.0291153 0.378446 0.0703501 0.418494L3.67063 3.88492Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <span
                        className="text-xs"
                        x-text="project.sales_percentage"
                      >
                        88
                      </span>
                    </div>
                  </td>
                  <td className="border-t border-gray pr-6 py-3">
                    <div className="flex items-center justify-end">
                      <span x-text="project.score">$852,321</span>
                    </div>
                  </td>
                </tr>
                <tr className="text-xs md:text-base">
                  <td className="border-t border-gray">
                    <div className="flex items-center">
                      <div
                        data-id="project.id"
                        data-slug="project.slug"
                        className="mr-3 flex lg:hidden"
                        data-id="6524"
                        data-slug="sol-the-priestchain-the-churchain-trilogy"
                      >
                        <div x-data="star($el.parentElement.dataset.id, $el.parentElement.dataset.slug, '#ffffff')">
                          <div
                            className="w-7 h-7 bg-gray rounded-md flex items-center justify-center cursor-pointer"
                            //  @click.prevent="toggleWatch()"
                            //  @profile-loaded.window="dataLoaded($event.detail)"
                            //  :style="`background: ${backgroundColor}`"
                            style={{ background: "null" }}
                          >
                            <svg
                              focusable="false"
                              data-icon="star"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              width="18"
                              height="18"
                            >
                              <path
                                fill="#00B87F"
                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                fill="#ffffff"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span
                        className=" pr-3 py-3 flex items-center"
                        x-text="`${key + 1}`"
                      >
                        2
                      </span>
                    </div>
                  </td>
                  <td className="border-t border-gray pr-6 py-3">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-14">
                        <a
                          href="project.url"
                          href="https://nftsniper.net/collection/sol-the-priestchain-the-churchain-trilogy"
                        >
                          <img
                            loading="lazy"
                            src="project.image.profile"
                            className="w-14 h-14 object-cover rounded-md"
                            src="https://paras-cdn.imgix.net/bafkreie4ohxbaz4ocr6eddrfmfivfb3d67uymefuy4ubuh2qijodtrpgee?w=800&auto=format,compress"
                            alt="alt"
                          />
                        </a>
                      </div>
                      <div className="text-left pl-2 md:pl-4">
                        <a
                          href="project.url"
                          className="block text-secondary font-bold mb-1"
                          x-text="project.name"
                          href="https://nftsniper.net/collection/sol-the-priestchain-the-churchain-trilogy"
                        >
                          NEARNauts
                        </a>
                        <div className="leading-none flex-col lg:flex-row flex items-start text-xxs">
                          <div className="flex items-center">
                            <span className="uppercase mr-2 text-gray-light">
                              Supply:
                            </span>
                            <span
                              className="lg:text-xs"
                              x-text="project.supply"
                            >
                              3333
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="border-t border-gray pr-6 py-3">
                    <div className="flex items-center justify-end">
                      <span className="w-4 h-4 mr-2">
                        <img
                          src="https://howrare.xyz/assets/img/near-protocol-logo.svg"
                          alt="protocol"
                        />
                      </span>
                      <span
                        className="whitespace-nowrap"
                        x-text="project.volume"
                      >
                        55
                      </span>
                    </div>
                    <div className="hidden flexOff items-center justify-end">
                      <svg
                        className="block"
                        width="8"
                        height="4"
                        viewBox="0 0 8 4"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.67063 3.88492C3.70733 3.92045 3.75644 3.9495 3.81372 3.96957C3.871 3.98964 3.93475 4.00012 3.99946 4.00012C4.06417 4.00012 4.12791 3.98964 4.1852 3.96957C4.24248 3.9495 4.29158 3.92045 4.32828 3.88492L7.92857 0.418494C7.97024 0.378511 7.99468 0.331681 7.99923 0.283091C8.00377 0.234501 7.98826 0.186009 7.95436 0.142884C7.92047 0.0997591 7.86949 0.0636506 7.80697 0.0384816C7.74445 0.0133126 7.67278 4.57172e-05 7.59974 0.000122401L0.399176 0.000122401C0.326308 0.000323029 0.2549 0.0137606 0.192632 0.0389898C0.130364 0.0642191 0.079592 0.100286 0.0457757 0.143311C0.0119594 0.186336 -0.00362155 0.234692 0.000708374 0.283178C0.0050383 0.331664 0.0291153 0.378446 0.0703501 0.418494L3.67063 3.88492Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <span
                        className="text-xs"
                        x-text="project.volume_percentage"
                      >
                        32
                      </span>
                    </div>
                  </td>
                  <td className="border-t border-gray pr-6 py-3">
                    <div className="flex items-center justify-end">
                      <div className="flex items-center">
                        <span className="uppercase mr-1">5523</span>
                      </div>
                    </div>
                  </td>
                  <td className="border-t border-gray pr-6 py-3">
                    <div className="flex items-center justify-end">
                      <div className="flex items-center">
                        <span className="uppercase mr-1">421</span>
                        <span
                          className="lg:text-xs text-gray-light"
                          style={{ color: "#ff473e", opacity: "0.8" }}
                          x-text="project.supply"
                        >
                          (-121)
                        </span>
                      </div>
                    </div>
                    <div className="hidden flexOff items-center justify-end">
                      <svg
                        className="block"
                        width="8"
                        height="4"
                        viewBox="0 0 8 4"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.67063 3.88492C3.70733 3.92045 3.75644 3.9495 3.81372 3.96957C3.871 3.98964 3.93475 4.00012 3.99946 4.00012C4.06417 4.00012 4.12791 3.98964 4.1852 3.96957C4.24248 3.9495 4.29158 3.92045 4.32828 3.88492L7.92857 0.418494C7.97024 0.378511 7.99468 0.331681 7.99923 0.283091C8.00377 0.234501 7.98826 0.186009 7.95436 0.142884C7.92047 0.0997591 7.86949 0.0636506 7.80697 0.0384816C7.74445 0.0133126 7.67278 4.57172e-05 7.59974 0.000122401L0.399176 0.000122401C0.326308 0.000323029 0.2549 0.0137606 0.192632 0.0389898C0.130364 0.0642191 0.079592 0.100286 0.0457757 0.143311C0.0119594 0.186336 -0.00362155 0.234692 0.000708374 0.283178C0.0050383 0.331664 0.0291153 0.378446 0.0703501 0.418494L3.67063 3.88492Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <span
                        className="text-xs"
                        x-text="project.price.percentage"
                      >
                        91
                      </span>
                    </div>
                  </td>
                  <td className="border-t border-gray pr-6 py-3">
                    <div className="flex items-center justify-end">
                      <div className="flex items-center">
                        <span className="uppercase mr-1">$151,313</span>
                        <span
                          className="lg:text-xs text-gray-light"
                          style={{ color: "#0eeba3", opacity: "0.8" }}
                          x-text="project.supply"
                        >
                          (+96%)
                        </span>
                      </div>
                    </div>
                    <div className="hidden flexOff items-center justify-end">
                      <svg
                        className="block"
                        width="8"
                        height="4"
                        viewBox="0 0 8 4"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.67063 3.88492C3.70733 3.92045 3.75644 3.9495 3.81372 3.96957C3.871 3.98964 3.93475 4.00012 3.99946 4.00012C4.06417 4.00012 4.12791 3.98964 4.1852 3.96957C4.24248 3.9495 4.29158 3.92045 4.32828 3.88492L7.92857 0.418494C7.97024 0.378511 7.99468 0.331681 7.99923 0.283091C8.00377 0.234501 7.98826 0.186009 7.95436 0.142884C7.92047 0.0997591 7.86949 0.0636506 7.80697 0.0384816C7.74445 0.0133126 7.67278 4.57172e-05 7.59974 0.000122401L0.399176 0.000122401C0.326308 0.000323029 0.2549 0.0137606 0.192632 0.0389898C0.130364 0.0642191 0.079592 0.100286 0.0457757 0.143311C0.0119594 0.186336 -0.00362155 0.234692 0.000708374 0.283178C0.0050383 0.331664 0.0291153 0.378446 0.0703501 0.418494L3.67063 3.88492Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <span
                        className="text-xs"
                        x-text="project.sales_percentage"
                      >
                        88
                      </span>
                    </div>
                  </td>
                  <td className="border-t border-gray pr-6 py-3">
                    <div className="flex items-center justify-end">
                      <span x-text="project.score">$2,563,331</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <br />
        <br />
      </div>
      <div x-data="dataBroadcast()" x-init="init()"></div>
    </div>
  );
};

export default Content;
