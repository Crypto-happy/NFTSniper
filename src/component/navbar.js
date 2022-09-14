import { Images_Src } from "../config/images";

const NavBar = () => {
  // const autoComplete = () => ({
  //   showResults: true,
  //   axiosRequest: null,
  //   search: "",
  //   collections: [],
  //   items: [],
  //   changed() {
  //     if (this.axiosRequest) {
  //       this.axiosRequest.cancel();
  //     }

  //     this.axiosRequest = window.axios.CancelToken.source();

  //     let { data } = window.axios
  //       .get(`/api/collection/search?query=${this.search}`, {
  //         cancelToken: this.axiosRequest.token,
  //       })
  //       .then((data) => {
  //         this.collections = data.data.collections;
  //         this.items = data.data.items;

  //         if (this.totalItemsCount > 0) {
  //           this.showResults = true;
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   },
  //   get totalItemsCount() {
  //     return this.items.length + this.collections.length;
  //   },
  //   clickedOnCollection(collection) {
  //     window.location.replace("/collection/" + collection.slug);
  //   },
  //   clickedOnItem(item) {
  //     window.location.replace(
  //       "/collection/" + item.project.slug + "?item=" + item.id
  //     );
  //   },
  // });

  return (
    <nav>
      <div className="max-w-7xl mx-auto pt-5 px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-wrap items-center">
          <span className="flex items-center pr-4 sm:pr-5 md:hidden">
            <img
              className="w-7 h-7"
              src={Images_Src.hamburger}
              alt="hamburger"
            />
          </span>
          <div className="md:hidden w-32 sm:w-40 flex">
            <a href="nftsniper.html">
              <img src={Images_Src.navLogo} />
            </a>
          </div>
          <div className="nav-search flex items-center md:pr-8 md:flex-1 mt-4 md:mt-0 order-2 md:order-first">
            <div
              className="relative w-full"
              style={{ width: "400px" }}
              x-data="autoComplete()"
            >
              <input
                className="w-full bg-gray rounded-full border border-primary py-2 pr-12 leading-7 text-md px-6"
                type="text"
                x-model="search"
                placeholder="Search for collections and NFTs"
                search
              />
              <img src="" className="absolute right-6 top-3" />
              <ul
                x-cloak
                x-show="showResults"
                false
                className="custom-scrollbar overflow-y-scroll absolute w-full z-50 bg-gray rounded-lg mt-1 shadow-md md:min-w-20"
                className="{'h-80': totalItemsCount &gt; 6}"
              >
                <template x-for="item in collections" key="item">
                  <li className="px-2 md:px-3 py-1 md:py-2 cursor-pointer border-gray-dark border-b flex items-center">
                    <div className="flex items-center w-8">
                      <img
                        className="w-10 rounded-md"
                        src="item.image.cover"
                        src="images/https:-nftsniper.net"
                      />
                    </div>
                    <div className="w-full flex flex-col sm:flex-row items-center pl-3">
                      <div
                        className="{'xl:w-6/12': item.is_released, 'lg:w-4/12': !item.is_released}"
                        className="w-full xl:w-6/12 sm:text-base text-secondary font-bold leading-none"
                        x-text="item.name"
                      ></div>
                      <template x-if="item.is_released">
                        <div className="flex w-full xl:w-6/12">
                          <div className="flex flex-col w-full md:w-1/2 justify-center items-start md:items-end">
                            <div className="uppercase text-gray-light text-xxs">
                              Floor Price
                            </div>
                            <div className="flex items-center">
                              <img
                                src="https://howrare.xyz/assets/img/near-protocol-logo.svg"
                                className="w-3 h-3 mr-1"
                              />
                              <div
                                className="text-xs"
                                x-text="item.price.floor"
                              ></div>
                            </div>
                          </div>
                          <div className="flex flex-col w-full md:w-1/2 justify-center items-start md:items-end">
                            <div className="uppercase text-gray-light text-xxs">
                              Volume{" "}
                              <span className="table-head-pill text-xxs">
                                24h
                              </span>
                            </div>
                            <div className="flex items-center">
                              <img
                                src="https://howrare.xyz/assets/img/near-protocol-logo.svg"
                                className="w-3 h-3 mr-1"
                              />
                              <div
                                className="text-xs"
                                x-text="item.volume"
                              ></div>
                              <div className="hidden flex ml-1">
                                <img
                                  src="images/images-volume-up.svg"
                                  className="mr-1"
                                />
                                <div className="text-primary text-xs">
                                  <span x-text="item.volume_percentage"></span>{" "}
                                  %
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </template>
                      <template x-if="!item.is_released">
                        <div className="flex flex-wrap w-full lg:w-8/12">
                          <div className="flex flex-col w-1/2 md:w-2/12 justify-end items-start md:items-end">
                            <div className="uppercase text-gray-light text-xxs">
                              Mint Price
                            </div>
                            <div className="flex items-center">
                              <img
                                src="https://howrare.xyz/assets/img/near-protocol-logo.svg"
                                className="w-3 h-3 mr-1"
                              />
                              <div
                                className="text-xs"
                                x-text="item.price.mint"
                              ></div>
                            </div>
                          </div>
                          <div className="flex flex-col w-1/2 md:w-2/12 justify-end items-start md:items-end">
                            <div className="uppercase text-gray-light text-xxs">
                              Items
                            </div>
                            <div className="flex items-center">
                              <div
                                className="text-xs"
                                x-text="item.items"
                              ></div>
                            </div>
                          </div>
                          <div className="flex flex-col w-1/2 md:w-3/12 justify-end items-start md:items-end">
                            <div className="uppercase text-gray-light text-xxs">
                              Mint Date
                            </div>
                            <div className="flex items-center">
                              <div className="hidden sm:block mr-1">
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
                              </div>
                              <div
                                className="text-xs"
                                x-text="item.release_date_formatted"
                              ></div>
                            </div>
                          </div>
                          <div className="flex w-1/2 md:w-5/12 justify-start md:justify-end items-center">
                            <div data-date="item.release_date">
                              <div
                                x-cloak
                                x-data="countDown($el.parentElement.dataset.date)"
                                x-init="countDown($el.parentElement.dataset.date)"
                              >
                                <div
                                  x-cloak
                                  x-show="releaseCounter"
                                  className="rounded-full bg-gradient-to-r from-yellow to-red p-px"
                                >
                                  <div className="py-1 px-4 flex bg-gray rounded-full leading-5">
                                    <img
                                      src="images/images-moon.svg"
                                      className="mr-3"
                                    />
                                    <span x-text="releaseCounter"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </template>
                    </div>
                  </li>
                </template>
                <template x-for="item in items" key="item">
                  <li className="px-2 md:px-3 py-1 md:py-2 cursor-pointer border-gray-dark border-b flex items-center">
                    <div className="flex items-center w-8">
                      <img
                        className="w-10 rounded-md"
                        src="item.image.main"
                        src="images/https:-nftsniper.net"
                      />
                    </div>
                    <div className="w-full flex flex-col sm:flex-row items-center pl-3">
                      <div
                        className="w-full xl:w-6/12 text-secondary sm:text-base font-bold leading-none"
                        x-text="item.name"
                      ></div>
                      <div className="flex w-full xl:w-6/12 justify-end mt-2 sm:mt-0">
                        <div className="flex flex-col w-full md:w-1/2 justify-center items-start md:items-end">
                          <div className="uppercase text-gray-light text-xxs">
                            <template x-if="item.listing !== null">
                              <span>Price for sale</span>
                            </template>
                            <template x-if="item.listing === null">
                              <span>Mint price</span>
                            </template>
                          </div>
                          <div className="flex items-center">
                            <img
                              src="https://howrare.xyz/assets/img/near-protocol-logo.svg"
                              className="w-3 h-3 mr-1"
                            />
                            <template x-if="item.listing !== null">
                              <div
                                className="text-xs"
                                x-text="parseFloat(item.listing.price).toFixed(2)"
                              ></div>
                            </template>
                            <template x-if="item.listing === null &amp;&amp; item.project.mint_price !== null">
                              <div
                                className="text-xs"
                                x-text="parseFloat(item.project.mint_price).toFixed(2)"
                              ></div>
                            </template>
                            <template x-if="item.listing === null &amp;&amp; item.project.mint_price === null">
                              <div className="text-xs">0</div>
                            </template>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </template>
              </ul>
            </div>

            <div className="ml-auto space-x-4 md:space-x-8 flex items-center">
              <div className="stats">
                <div className="stat">
                  <span>2</span>collections
                </div>
                <div className="stat">
                  <span>6632</span>sales
                </div>
                <div className="stat">
                  <span>431.49K</span>volume
                </div>
              </div>

              <div
                className="relative"
                x-data="{ open: false }"
                //  @click.away="open = false" @close.stop="open = false"
              >
                <div
                //  @click="open = ! open"
                >
                  <span className="text-gray-light hover:text-white cursor-pointer">
                    <img src="https://howrare.xyz/assets/img/light_mode.svg" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
