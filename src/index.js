import React from "react";
import ReactDOM from "react-dom";
import FlowerDetail from "./FlowerDetail";
import aster from "./Flowers/aster.jpg"
import azalea from "./Flowers/azalea.jpg"
import begonia from "./Flowers/begonia.jpg"
import black_eyes_susan from "./Flowers/black_eyes_susan.jpg"
import butterfly_bush from "./Flowers/butterfly_bush.jpg"
import calendula from "./Flowers/calendula.jpg"
import calibrachoa from "./Flowers/calibrachoa.jpg"
import fuschia from "./Flowers/Fuschia.jpg"
import gardenia from "./Flowers/Gardenia.jpg"

const App = () => {
  return (
    <div>
      <h1>🌸 The Flower Shop 🌸</h1>
      <div className="group-1">
        <FlowerDetail flowerName="Aster" image={aster} link="https://www.burpee.com/perennials/asters/aster-raydons-favorite--prod002855.html?utm_medium=AFFAD&utm_content=AFFPROMO&utm_campaign=AFFILIATE&utm_source=TnL5HPStwNw&CID=BPEAFF&ranMID=36039&ranEAID=TnL5HPStwNw&ranSiteID=TnL5HPStwNw-ypkfQa_BFhnhGEl3jWhL4Q&siteID=TnL5HPStwNw-ypkfQa_BFhnhGEl3jWhL4Q" />
        <FlowerDetail flowerName="Azalea" image={azalea} link="https://www.amazon.com/Encore-Autumn-Royalty-Azalea-Plants/dp/B01MUFX7T8/ref=sr_1_2?dchild=1&keywords=Azalea&qid=1607799422&sr=8-2&linkCode=ogi"/>
        <FlowerDetail flowerName="Begonia" image={begonia} link="https://www.provenwinners.com/plants/begonia/funky-orange-begonia-x-hybrida"/>
      </div>

      <div className="group-2">
        <FlowerDetail flowerName="Black Eyed Susan" image={black_eyes_susan} link="https://www.burpee.com/perennials/rudbeckia/rudbeckia-goldsturm-prod000098.html?utm_medium=AFFAD&utm_content=AFFPROMO&utm_campaign=AFFILIATE&utm_source=TnL5HPStwNw&CID=BPEAFF&ranMID=36039&ranEAID=TnL5HPStwNw&ranSiteID=TnL5HPStwNw-bosNsWuWIf3Y0Gp5NcUebw&siteID=TnL5HPStwNw-bosNsWuWIf3Y0Gp5NcUebw"/>
        <FlowerDetail flowerName="Butterfly Bush" image={butterfly_bush} link="https://www.provenwinners.com/plants/buddleia/miss-violet-butterfly-bush-buddleia-x"/>
        <FlowerDetail flowerName="Calendula" image={calendula} link="https://www.burpee.com/flowers/calendula/calendula-oktoberfest-prod000143.html?utm_medium=AFFAD&utm_content=AFFPROMO&utm_campaign=AFFILIATE&utm_source=TnL5HPStwNw&CID=BPEAFF&ranMID=36039&ranEAID=TnL5HPStwNw&ranSiteID=TnL5HPStwNw-V.B9B.3nNrg56MIJkuDYUw&siteID=TnL5HPStwNw-V.B9B.3nNrg56MIJkuDYUw"/>
      </div>

      <div className="group-3">
        <FlowerDetail flowerName="Calibrachoa" image={calibrachoa} link="https://www.provenwinners.com/plants/calibrachoa/superbells-double-ruby-double-calibrachoa-calibrachoa-hybrid"/>
        <FlowerDetail flowerName="Fuschia" image={fuschia} link="https://www.amazon.com/Purple-Fuchsia-Hanging-Flowers-Particles/dp/B08VW5SDKF/ref=sr_1_2?dchild=1&keywords=fuschia+plant&qid=1619635859&sr=8-2"/>
        <FlowerDetail flowerName="Gardenia" image={gardenia} link="https://www.amazon.com/AMERICAN-EXCHANGE-Gardenia-Veitchii-Plant/dp/B08J8H17MK/?linkCode=ogi"/>
      </div>
    </div>
  )
}

ReactDOM.render (
  <App />,
  document.querySelector("#root")
);
