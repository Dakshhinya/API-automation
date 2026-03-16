export const listOfferScenarios={

    valid:(buId:number)=>({
        buId :buId,
        page:"1",
        limit:"10",
        q:"",
        status:"ALL",
        sortBy:"DATE",
        order:"DESC"
    })
};