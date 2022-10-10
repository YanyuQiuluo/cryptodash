import React from "react";
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from "./ConfirmButton";
import Page from "../Shared/Page";
import CoinGrid from "./CoinGrid";
import CoinImage from "../Shared/CoinImage";

export default function (){
    return <Page name={"settings"}>
        <WelcomeMessage/>
        <CoinGrid topSection/>
        <ConfirmButton/>
        <CoinGrid/>
    </Page>
}