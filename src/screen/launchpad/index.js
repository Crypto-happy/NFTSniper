import { AiOutlineArrowDown } from "react-icons/ai";
import { Images_Src } from "../../config/images";

const LaunchPad = () => {
  return (
    <div className="page-launchpad">
      <div className="page-launchpad__content">
        <div className="page-launchpad__content__header">
          <div className="page-launchpad__content__header__title">
            {"NFT Global Launchpad"}
          </div>
          <div className="page-launchpad__content__header__text">
            {
              "SURVIVE is the first metaverse project backed by NFT Global. BUY NOW $SURY and get instantly 30% PROFIT on your investment"
            }
          </div>
        </div>
        <div className="page-launchpad__content__body">
          <div className="page-launchpad__content__body__time">
            {"Private Sale Ended"}
          </div>
          <div className="page-launchpad__content__body__time-box">
            <div className="page-launchpad__content__body__time-box__item">
              <div>{"-"}</div>
              <div>{"Days"}</div>
            </div>
            <div className="page-launchpad__content__body__time-box__item">
              <div>{"-"}</div>
              <div>{"Hours"}</div>
            </div>
            <div className="page-launchpad__content__body__time-box__item">
              <div>{"-"}</div>
              <div>{"Minutes"}</div>
            </div>
            <div className="page-launchpad__content__body__time-box__item">
              <div>{"-"}</div>
              <div>{"Seconds"}</div>
            </div>
          </div>
          <div className="page-launchpad__content__body__amount-box">
            <div className="page-launchpad__content__body__amount-box__item">
              <div>{"Total Amount"}</div>
              <div>{"33000000000 SURY"}</div>
            </div>
            <div className="page-launchpad__content__body__amount-box__item">
              <div>{"Max. Buy in"}</div>
              <div>{"10 BNB"}</div>
            </div>
            <div className="page-launchpad__content__body__amount-box__item">
              <div>{"Min.Buy in"}</div>
              <div>{"0.5 BNB"}</div>
            </div>
            <div className="page-launchpad__content__body__amount-box__item">
              <div>{"$SURY per BNB"}</div>
              <div>{"22000000 SURY"}</div>
            </div>
          </div>
          <div className="page-launchpad__content__body__from-to-box">
            <div className="page-launchpad__content__body__from-to-box__item">
              <div>{"From"}</div>
              <div>{"Balance: 0.49793"}</div>
            </div>
            <div className="page-launchpad__content__body__from-to-box__item">
              <div>{"1"}</div>
              <div className="flex ">
                <button className="page-launchpad__content__body__from-to-box__item__max-btn">
                  {"MAX"}
                </button>
                <div className="flex">
                  <img
                    src={Images_Src.bnb}
                    className="page-launchpad__content__body__from-to-box__item__bnb-icon"
                    alt="bnb"
                  />
                  <div>{"BNB"}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-launchpad__content__body__arrow">
            <AiOutlineArrowDown />
          </div>
          <div className="page-launchpad__content__body__from-to-box">
            <div className="page-launchpad__content__body__from-to-box__item">
              <div>{"To"}</div>
              <div>{"Balance: 0"}</div>
            </div>
            <div className="page-launchpad__content__body__from-to-box__item">
              <div>{"22000000"}</div>
              <div className="flex">
                <img
                  src={Images_Src.bnb}
                  className="page-launchpad__content__body__from-to-box__item__bnb-icon"
                  alt="bnb"
                />
                <div>{"SURY"}</div>
              </div>
            </div>
          </div>
          <div className="page-launchpad__content__body__buy-btn">
            <button>{"BUY"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchPad;
