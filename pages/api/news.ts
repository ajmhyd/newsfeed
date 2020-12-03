import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  res.status(200).json({
    "articles": [
      {
        "source": {
          "id": null,
          "name": "ValueWalk"
        },
        "author": "Anna Peel",
        "title": "MT: Discover The Best Opportunities For Investments In 2021",
        "description": "Trading and Investment Solutions in 2021 The global pandemic has disrupted economic systems around the world. In 2020, lingering lockdowns caused skyrocketing employment. Millions of consumers had to adjust to the new reality. Office jobs became remote, and m…",
        "url": "https://www.valuewalk.com/2020/12/best-opportunities-investments-2021/",
        "urlToImage": "https://www.valuewalk.com/wp-content/uploads/2020/09/Investors_1599846214.jpg",
        "publishedAt": "2020-12-03T16:23:33Z",
        "content": "Trading and Investment Solutions in 2021\r\nThe global pandemic has disrupted economic systems around the world. In 2020, lingering lockdowns caused skyrocketing employment. Millions of consumers had t… [+4209 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "newsBTC"
        },
        "author": "Cole Petersen",
        "title": "Bitcoin Surges After Bulls Defend Key Level; What Analysts are Watching For",
        "description": "Bitcoin is in the process of pushing higher today, with bulls aiming at sending the cryptocurrency up towards the resistance that it has long faced within the mid-to-upper $19,000 region. If the selling pressure here remains constant and continues hampering t…",
        "url": "https://www.newsbtc.com/analysis/btc/bitcoin-surges-after-bulls-defend-key-level-what-analysts-are-watching-for/",
        "urlToImage": "https://www.newsbtc.com/wp-content/uploads/2020/11/aron-visuals-3jBU9TbKW7o-unsplash.jpg",
        "publishedAt": "2020-12-03T16:16:55Z",
        "content": "Bitcoin is in the process of pushing higher today, with bulls aiming at sending the cryptocurrency up towards the resistance that it has long faced within the mid-to-upper $19,000 region.\r\nIf the sel… [+2268 chars]"
      },
      {
        "source": {
          "id": "bloomberg",
          "name": "Bloomberg"
        },
        "author": null,
        "title": "Beyond Bitcoin: These Cryptocurrencies Are Doing Even Better",
        "description": null,
        "url": "https://www.bloomberg.com/news/articles/2020-12-03/ethereum-xet-xrp-litecoin-xlc-cryptocurrency-alternative-to-bitcoin-btc",
        "urlToImage": null,
        "publishedAt": "2020-12-03T16:16:11Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "The Economist"
        },
        "author": "The Economist",
        "title": "Will central-bank digital currencies break the banking system?",
        "description": "Perhaps. But that might not be so bad",
        "url": "https://www.economist.com/finance-and-economics/2020/12/05/will-central-bank-digital-currencies-break-the-banking-system",
        "urlToImage": "https://www.economist.com/img/b/1280/720/90/sites/default/files/images/print-edition/20201205_FND000_1.jpg",
        "publishedAt": "2020-12-03T16:07:51Z",
        "content": "IMAGINE IT IS 2035 and a financial crisis is raging. Credit is drying up; banks share prices look like ski slopes and every news report features sweaty traders in shirtsleeves tugging at their collar… [+6000 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "FXStreet"
        },
        "author": "Lorenzo Stroe",
        "title": "Bitcoin to hit mainstream adoption within four years as trust in sovereign fiat currencies erodes",
        "description": "Institutional interest in Bitcoin has experienced a massive increase over the past year, which has translated into significant growth in value, with t",
        "url": "https://www.fxstreet.com/cryptocurrencies/news/bitcoin-to-hit-mainstream-adoption-within-four-years-as-trust-in-sovereign-fiat-currencies-erodes-202012031601",
        "urlToImage": "https://editorial.fxstreet.com/images/Markets/Currencies/Digital Currencies/Bitcoin/bitcoin_3_Large.jpg",
        "publishedAt": "2020-12-03T16:01:12Z",
        "content": "<ul><li>Bitcoin price has hit a new all-time high on December 1 thanks to renewed interest in the digital asset.</li><li>The support of cryptocurrencies by PayPal has been one of the major triggers o… [+3605 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Bitcoinist"
        },
        "author": "Tony Spilotro",
        "title": "Bitcoin Billionaires Author Expects Asset To Be As World Changing As Facebook",
        "description": "Bitcoin has the potential to be revolutionary and has drawn comparisons to many of the most powerful assets and technologies on the planet. On the asset side, it is earning its place alongside gold and currencies, while as a technology could be as groundbreak…",
        "url": "https://bitcoinist.com/bitcoin-billionaires-author-expects-asset-to-be-as-world-changing-as-facebook/",
        "urlToImage": "https://bitcoinist.com/wp-content/uploads/2020/12/bitcoin-billionaires-world-change-facebook-Depositphotos_190237866_xl-2015-1920x1104.jpg",
        "publishedAt": "2020-12-03T16:00:11Z",
        "content": "Bitcoin has the potential to be revolutionary and has drawn comparisons to many of the most powerful assets and technologies on the planet. On the asset side, it is earning its place alongside gold a… [+2982 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Cointelegraph"
        },
        "author": "Cointelegraph By Kollen Post",
        "title": "Stripe will offer bank accounts, with help from Goldman Sachs and Citi",
        "description": "More integration between upstart fintechs and the old guard of financial services as Stripe looks to offer bank accounts.",
        "url": "https://cointelegraph.com/news/stripe-is-launching-new-banking-services-alongside-goldman-sachs-and-citigroup",
        "urlToImage": "https://s3.cointelegraph.com/uploads/2020-12/4498e677-c2e4-4ec2-bec0-982ff6828e3d.jpg",
        "publishedAt": "2020-12-03T15:43:35Z",
        "content": "Online payments giant and Cash App owner Stripe is stepping into a new realm of financial services for vendors.\r\nPer a Wall Street Journal exclusive on Thursday, Stripe is looking to offer customers … [+538 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": "Reuters Editorial",
        "title": "How American investors are buying bitcoin - Reuters.com",
        "description": "Bitcoin has grabbed headlines this week with its ascent to an all-time high. Yet, a trend has been playing out that could change the face of the cryptocurrency market: a massive flow of coin to North America from East Asia. Ciara Lee reports.",
        "url": "https://www.reuters.com/video/watch/idOVD7GKP6Z",
        "urlToImage": "https://static.reuters.com/resources/r/?d=20201203&i=OVD7GKP6Z&r=OVD7GKP6Z&t=2",
        "publishedAt": "2020-12-03T15:24:07Z",
        "content": "Posted \r\nBitcoin has grabbed headlines this week with its ascent to an all-time high. Yet, a trend has been playing out that could change the face of the cryptocurrency market: a massive flow of coin… [+51 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CNBC"
        },
        "author": "AJ Horch",
        "title": "How to gift stock market wealth to loved ones during the holiday season",
        "description": "Stocks are a great way to spread holiday cheer and give the gift of wealth. But would-be gift givers need to be mindful of brokerage, tax and market issues.",
        "url": "https://www.cnbc.com/2020/12/03/how-to-gift-stock-market-wealth-to-loved-ones-during-holiday-season-.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/104106413-GettyImages-554370543.jpg?v=1532563986",
        "publishedAt": "2020-12-03T15:18:46Z",
        "content": "This holiday season give the gift that can keep on creating wealth: stocks. Along with appreciating value, the gift of a stock will also serve as a valuable learning experience for any investor.\r\nBut… [+3355 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "newsBTC"
        },
        "author": "Tony Spilotro",
        "title": "Bitcoin Bulls And Bears Reach Standoff, BTC Consolidates Below $20K",
        "description": "Bitcoin volatility earlier in this week reached some of the most explosive price action in the asset’s history. In just a four hour window, the cryptocurrency rose and fell more than $1,000 each way, gyrating back and forth as buyers and sellers attempt equil…",
        "url": "https://www.newsbtc.com/analysis/btc/bitcoin-bulls-and-bears-reach-standoff-btc-consolidates-below-20k/",
        "urlToImage": "https://www.newsbtc.com/wp-content/uploads/2020/12/bitcoin-bull-bear-Depositphotos_56495113_xl-2015-scaled.jpg",
        "publishedAt": "2020-12-03T15:09:57Z",
        "content": "Bitcoin volatility earlier in this week reached some of the most explosive price action in the asset’s history. In just a four hour window, the cryptocurrency rose and fell more than $1,000 each way,… [+2198 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CoinDesk"
        },
        "author": "Danny Nelson",
        "title": "Darknet Markets Face Headwinds After Year of Mixed Results",
        "description": "Darknet markets are falling off the radar and watching their customer base level off.",
        "url": "https://www.coindesk.com/index.php?p=550390",
        "urlToImage": "https://static.coindesk.com/wp-content/uploads/2019/12/hydra-1200x628.jpg",
        "publishedAt": "2020-12-03T15:07:59Z",
        "content": "Darknet markets are having a rough 2020.\r\nCOVID-19 has wreaked havoc on all shipping-centric industries, drug sellers included. Criminologist Andréanne Bergeron estimates that only 21% of darknet mar… [+1860 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "3iQ Corp.",
        "title": "3iQ Receives Receipt for The Ether Fund Final Prospectus",
        "description": "NOT FOR DISTRIBUTION TO U.S. NEWSWIRE SERVICES OR FOR DISSEMINATION IN THE UNITED STATES.TORONTO, Dec. 03, 2020 (GLOBE NEWSWIRE) -- 3iQ Corp. is pleased to...",
        "url": "https://finance.yahoo.com/news/3iq-receives-receipt-ether-fund-150300169.html",
        "urlToImage": "https://s.yimg.com/uu/api/res/1.2/MVK_kVnRxxP7RWY59a_1Eg--~B/aD00MTt3PTI1MDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/globenewswire.com/ef8863684a3efa6d34f568c0649cd0e4",
        "publishedAt": "2020-12-03T15:03:00Z",
        "content": "NOT FOR DISTRIBUTION TO U.S. NEWSWIRE SERVICES OR FOR DISSEMINATION IN THE UNITED STATES.\r\nTORONTO, Dec. 03, 2020 (GLOBE NEWSWIRE) -- 3iQ Corp. is pleased to announce that The Ether Fund (the Fund) h… [+5046 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Seeking Alpha"
        },
        "author": "Victor Dergunov",
        "title": "Bitcoin: This Time It Really Is Different",
        "description": "It's been a long three years since Bitcoin investors witnessed ATHs around the infamous $20,000 level.",
        "url": "https://seekingalpha.com/article/4392760-bitcoin-this-time-really-is-different",
        "urlToImage": "https://static3.seekingalpha.com/uploads/2020/12/3/48200183-16069797792532449.jpg",
        "publishedAt": "2020-12-03T14:55:51Z",
        "content": "Source\r\nBitcoin (BTC-USD) has appreciated by roughly 500% in under two years now. Incidentally, this is also about BTC's price appreciation since the Mid-March meltdown bottom about nine months ago. … [+6390 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Cointelegraph"
        },
        "author": "Cointelegraph By Andrey Shevchenko",
        "title": "Kraken pledges $150,000 to Ethereum devs in latest Gitcoin Grants Round",
        "description": "The exchange will contribute to a $1M matching pool in the latest Gitcoin Grants Round.",
        "url": "https://cointelegraph.com/news/kraken-pledges-150-000-to-ethereum-devs-in-latest-gitcoin-grants-round",
        "urlToImage": "https://s3.cointelegraph.com/uploads/2020-12/a737bbb1-3ada-4c24-8863-7ca36d838dc6.jpg",
        "publishedAt": "2020-12-03T14:49:13Z",
        "content": "The Kraken cryptocurrency exchange announced that it would match $150,000 in donations to support open-source Ethereum (ETH) projects on Gitcoin.\r\nGitcoin is a developer funding platform relying on a… [+1536 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "bwinck@businessinsider.com (Ben Winck)",
        "title": "US stocks edge towards new records after jobless claims fall more than expected",
        "description": "New claims for unemployment insurance totaled an unadjusted 712,000 for the week that ended Saturday, beating the consensus estimate of 775,000.",
        "url": "https://www.businessinsider.com/stock-market-news-today-near-records-weekly-jobless-claims-stimulus-2020-12",
        "urlToImage": "https://images2.markets.businessinsider.com/5fc8eac7037cbd00186138bf?format=jpeg",
        "publishedAt": "2020-12-03T14:48:04Z",
        "content": "Getty Images / Xinhua News Agency\r\n<ul><li>US stocks gained slightly on Thursday after falling jobless claims offered an encouraging sign of labor-market improvement.</li><li>New weekly claims for un… [+4531 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Cointelegraph"
        },
        "author": "Cointelegraph By William Suberg",
        "title": "Bitcoin arrives on Wall Street: S&P Dow Jones launching crypto indexes in 2021",
        "description": "In the latest big move to incorporate crypto by traditional finance, 550 coins will appear in the new indexes from next year.",
        "url": "https://cointelegraph.com/news/bitcoin-arrives-on-wall-street-s-p-dow-jones-launching-crypto-indexes-in-2021",
        "urlToImage": "https://s3.cointelegraph.com/uploads/2020-11/de5ae070-9c71-4237-bdb1-b22af0cc472f.jpg",
        "publishedAt": "2020-12-03T14:45:28Z",
        "content": "The company behind the S&amp;P 500, S&amp;P Dow Jones Indices, will debut cryptocurrency indexes in 2021, it has confirmed.\r\nIn a press release on Dec. 3, S&amp;P Dow Jones Indices (S&amp;P DJI), a s… [+1498 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Zerohedge.com"
        },
        "author": "Tyler Durden",
        "title": "Agreeing To Disagree",
        "description": "Agreeing To Disagree\n\n Tyler Durden\n \nThu, 12/03/2020 - 09:45\n\n By Michael Every of Rabobank\r\n\n\nAgreeing to disagree\r\n\n\nWe have an agreement! Or rather a series of agreements. However, it still seems that we are really agreeing to disagree all over.\r\n\n\nOn the…",
        "url": "https://www.zerohedge.com/markets/agreeing-disagree",
        "urlToImage": "https://zh-prod-1cc738ca-7d3b-4a72-b792-20bd8d8fa069.storage.googleapis.com/s3fs-public/styles/max_650x650/public/2020-12/agree%20to%20disagree.png?itok=eR8V1h1A",
        "publishedAt": "2020-12-03T14:45:00Z",
        "content": "By Michael Every of Rabobank\r\nAgreeing to disagree\r\nWe have an agreement! Or rather a series of agreements. However, it still seems that we are really agreeing to disagree all over.\r\nOn the US fiscal… [+7040 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CNBC"
        },
        "author": "MacKenzie Sigalos",
        "title": "This family bet everything on bitcoin when it was $900 and bought more when it crashed in 2018",
        "description": "This family sold everything it owned in 2017 to make a big bet on bitcoin. Four years and 40 countries later, and it's still all in on cryptocurrencies.",
        "url": "https://www.cnbc.com/2020/12/03/bitcoin-family-invested-their-retirement-and-savings-in-bitcoin-ethereum-litecoin.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/106805488-1606965798321-Portugal2019.jpg?v=1606968358",
        "publishedAt": "2020-12-03T14:41:55Z",
        "content": "Didi Taihuttu, his wife, and three kids bet all they have on bitcoin.\r\nIn 2017, CNBC spoke to the Dutch family of five when they were in the process of liquidating their assets from a profitable busi… [+5809 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CoinDesk"
        },
        "author": "Danny Nelson",
        "title": "S&P Dow Jones Indices to Launch Crypto Indexes in 2021",
        "description": "Financial data provider S&P Dow Jones Indices is launching a crypto asset index in 2021.",
        "url": "https://www.coindesk.com/sp-dow-jones-indices-to-launch-crypto-indexes-in-2021",
        "urlToImage": "https://static.coindesk.com/wp-content/uploads/2016/05/stocks-1200x628.jpg",
        "publishedAt": "2020-12-03T14:33:44Z",
        "content": "S&amp;P Dow Jones Indices, a major financial data provider, said Thursday it will launch a customizable cryptocurrency indexing service in partnership with crypto tax service Lukka in 2021\r\nThe comin… [+643 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CoinDesk"
        },
        "author": "Sebastian Sinclair",
        "title": "Kraken Exchange to Offer First Grants for Open-Source Ethereum Projects",
        "description": "The Kraken cryptocurrency exchange says it will match grants offered to open-source Ethereum projects on the Gitcoin platform.",
        "url": "https://www.coindesk.com/kraken-match-150k-grants-ethereum-developers",
        "urlToImage": "https://static.coindesk.com/wp-content/uploads/2018/11/kraken-jessee-1200x628.jpg",
        "publishedAt": "2020-12-03T14:30:32Z",
        "content": "Kraken has announced it will help fund open-source Ethereum projects in a first for the U.S.-based cryptocurrency exchange.\r\nIn a blog post Thursday, Kraken said it will collaborate with Gitcoin, an … [+1287 chars]"
      }
    ]
  })
}
