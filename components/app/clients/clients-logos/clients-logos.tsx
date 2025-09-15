import Image from "next/image";
import SliderContainer from "components/app/clients/slider-container/slider-container";
import SliderItem from "components/app/clients/slider-item/slider-item";
// import AudubonLogo from "public/logos/audubon-company.webp";
// import CoinBaseLogo from "public/logos/coinbase-company.webp";
// import ExodusLogo from "public/logos/exodus-company.webp";
// import ExpensifyLogo from "public/logos/expensify-company.webp";
// import ExtraLogo from "public/logos/extra-company.webp";
// import LitentryLogo from "public/logos/litentry-company.webp";
// import PicnicLogo from "public/logos/picnic-company.webp";
// import PinkPandaLogo from "public/logos/pinkpanda-company.webp";
// import RainbowLogo from "public/logos/rainbow-company.webp";
// import ScribewareLogo from "public/logos/scribeware-company.webp";
// import ShopifyLogo from "public/logos/shopify-company.webp";
// import ShowTimeLogo from "public/logos/showtime-company.webp";
// import SlingShotLogo from "public/logos/slingshot-company.webp";
// import SnapCalorieLogo from "public/logos/snapcalorie-company.webp";
// import StatusLogo from "public/logos/status-company.webp";
// import SteakWalletLogo from "public/logos/steakwallet-company.webp";
// import StoriLogo from "public/logos/stori-company.webp";
// import TocsenLogo from "public/logos/tocsen-company.webp";
// import WalletConnectLogo from "public/logos/walletconnect-company.webp";

const ClientsLogos = async () => {
  return (
    <>
      <SliderContainer initialOffsetX={0} contentWidth={1290}>
        <SliderItem width={150}>
          <Image
            src="/logos/audubon-company.webp"
            style={{
              objectFit: "contain",
            }}
            alt="Audubon logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/logos/coinbase-company.webp"
            style={{
              objectFit: "contain",
            }}
            alt="CoinBase logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/logos/exodus-company.webp"
            style={{
              objectFit: "contain",
            }}
            alt="Exodus logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/logos/expensify-company.webp"
            style={{
              objectFit: "contain",
            }}
            alt="Expensify logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/logos/extra-company.webp"
            style={{
              objectFit: "contain",
            }}
            alt="Extra logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/logos/litentry-company.webp"
            style={{
              objectFit: "contain",
            }}
            alt="Litentry logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/logos/picnic-company.webp"
            style={{
              objectFit: "contain",
            }}
            alt="Picnic logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/logos/pinkpanda-company.webp"
            style={{
              objectFit: "contain",
            }}
            alt="PinkPanda logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/logos/rainbow-company.webp"
            style={{
              objectFit: "contain",
            }}
            alt="Rainbow logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/logos/scribeware-company.webp"
            style={{
              objectFit: "contain",
            }}
            alt="Scribeware logo"
          />
        </SliderItem>
      </SliderContainer>
      <SliderContainer initialOffsetX={75} contentWidth={1290}>
        <SliderItem width={150}>
          <Image
            src="/logos/shopify-company.webp"
            style={{
              objectFit: "contain",
            }}
            alt="Shopify logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/logos/showtime-company.webp"
            style={{
              objectFit: "contain",
            }}
            alt="ShowTime logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/logos/slingshot-company.webp"
            style={{
              objectFit: "contain",
            }}
            alt="SlingShot logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/logos/snapcalorie-company.webp"
            style={{
              objectFit: "contain",
            }}
            alt="SnapCalorie logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/logos/status-company.webp"
            style={{
              objectFit: "contain",
            }}
            alt="Status logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/logos/steakwallet-company.webp"
            style={{
              objectFit: "contain",
            }}
            alt="SteakWallet logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/logos/stori-company.webp"
            style={{
              objectFit: "contain",
            }}
            alt="Stori logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/logos/tocsen-company.webp"
            style={{
              objectFit: "contain",
            }}
            alt="Tocsen logo"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/logos/walletconnect-company.webp"
            style={{
              objectFit: "contain",
            }}
            alt="WalletConnect logo"
          />
        </SliderItem>
      </SliderContainer>
    </>
  );
};

export default ClientsLogos;
