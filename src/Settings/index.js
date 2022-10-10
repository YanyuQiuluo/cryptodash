import React from "react";
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from "./ConfirmButton";
import Page from "../Shared/Page";
import CoinGrid from "./CoinGrid";
import Search from './Search';
import CoinImage from "../Shared/CoinImage";

export default function (){
    return <Page name={"settings"}>
        <WelcomeMessage/>
        <CoinGrid topSection/>
        <ConfirmButton/>
        <Search/>
        <CoinGrid/>
    </Page>
}