import fs from "fs"
import curve from "@curvefi/api"
import keys from "./config.json"

//console.log(keys);

const PRO_ID : string = keys.project_id;
console.log(PRO_ID);

(async () => {
    // 1. Dev
    // await curve.init('JsonRpc', {url: 'http://localhost:8545/', privateKey: ''}, { gasPrice: 0, maxFeePerGas: 0, maxPriorityFeePerGas: 0, chainId: 1 });
    // OR
    // await curve.init('JsonRpc', {}, {}); // In this case JsonRpc url, privateKey, fee data and chainId will be specified automatically

    // 2. Infura
    curve.init("Infura", { network: "homestead", apiKey: PRO_ID }, { chainId: 1 });
    
    // 3. Web3 provider
    // curve.init('Web3', { externalProvider: <WEB3_PROVIDER> }, { chainId: 1 });
    
    // Fetch factory pools
    await curve.fetchFactoryPools();
    await curve.getCryptoFactoryPoolList();
})()