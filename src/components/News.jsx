import React, { useState, useEffect } from "react";
import axios from "axios";

function News() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(`../news.json`).then((res) => {
      const newPosts = res.articles;
      setPosts(newPosts);
      console.log(newPosts);
    });
  }, []);
  const articles = [
    {
      title:
        "EQS-News                    PAUL Tech AG: Preliminary figures for the financial year 2022 and for the first half of 2023 – strong growth and positive outlook",
      author: "EQS Group AG",
      published_date: "2023-07-27 18:43:30",
      published_date_precision: "timezone unknown",
      link: "https://www.wallstreet-online.de/nachricht/17181723-eqs-news-paul-tech-ag-preliminary-figures-for-the-financial-year-2022-and-for-the-first-half-of-2023-strong-growth-and-positive-outlook",
      clean_url: "wallstreet-online.de",
      excerpt:
        "EQS-News: PAUL Tech AG / Key word(s): Bond/Real Estate PAUL Tech AG: Preliminary figures for the financial year 2022 and for the first half of 2023 – strong growth and positive outlook 27.07.2023 /…",
      summary:
        "EQS-News: PAUL Tech AG / Key word(s): Bond/Real Estate PAUL Tech AG: Preliminary figures for the financial year 2022 and for the first half of 2023 – strong growth and positive outlook 27.07.2023 / 18:43 CET/CEST The issuer is solely responsible for the content of this announcement. \n \n \n\n\n\n\n \nNachrichtenquelle: \nEQS Group AG\n \n27.07.2023, 18:43 \n  |  \n 33 \n  |  \n \n0 \n  |    \n \n\n\n \n \n \n \nEQS-News\n PAUL Tech AG: Preliminary figures for the financial year 2022 and for the first half of 2023 – strong growth and positive outlook \n \n EQS-News: PAUL Tech AG / Key word(s): Bond/Real Estate PAUL Tech AG: Preliminary figures for the financial year 2022 and for the first half of 2023 – strong growth and positive outlook 27.",
      rights: "wallstreet-online.de",
      rank: 17657,
      topic: "finance",
      country: "DE",
      language: "en",
      authors: "EQS Group AG",
      media:
        "https://assets.wallstreet-online.de/_media/6/source1280/size_645/eqs-group-1280.png",
      is_opinion: false,
      twitter_account: "@wotwitt",
      _score: 14.062253,
      _id: "6a60e90f733e55b80857904c895beaf8",
    },
    {
      title:
        "Why is Tech Mahindra Share Price Trending in Google Trends on July, 27 2023: Check Latest News on Tech Mahindra ...",
      author: "",
      published_date: "2023-07-27 06:14:52",
      published_date_precision: "full",
      link: "https://www.latestly.com/google-trends/27072023/tech-mahindra-share-price",
      clean_url: "latestly.com",
      excerpt:
        "Know why Tech Mahindra Share Price is trending in Google Trends today, on July, 27 2023. Check latest news and articles on Tech Mahindra Share Price updated real-time on Google Trends and LatestLY",
      summary:
        "(Know why Tech Mahindra Share Price is trending in Google Trends today, on . Check latest news and articles on Tech Mahindra Share Price updated real-time on Google Trends and LatestLY)",
      rights: "latestly.com",
      rank: 13754,
      topic: "news",
      country: "IN",
      language: "en",
      authors: "",
      media:
        "https://st1.latestly.com/wp-content/uploads/2018/03/default-img-02-784x441.jpg",
      is_opinion: false,
      twitter_account: "@latestly",
      _score: 13.974242,
      _id: "e169c656669a009c886127e604593e7b",
    },
    {
      title:
        "EQS-News                     GCash verkündet Auslandsexpansion bei der London Tech Week 2023",
      author: "EQS Group AG",
      published_date: "2023-08-01 10:48:06",
      published_date_precision: "timezone unknown",
      link: "https://www.wallstreet-online.de/nachricht/17193522-eqs-news-gcash-verkuendet-auslandsexpansion-london-tech-week-2023",
      clean_url: "wallstreet-online.de",
      excerpt:
        "EQS-News: GCash / Schlagwort(e): Expansion GCash verkündet Auslandsexpansion bei der London Tech Week 2023 01.08.2023 / 10:48 CET/CEST Für den Inhalt der Mitteilung ist der Emittent / Herausgeber…",
      summary:
        "EQS-News: GCash / Schlagwort(e): Expansion  GCash verkündet Auslandsexpansion bei der London Tech Week 2023 01.08.2023 / 10:48 CET/CEST Für den Inhalt der Mitteilung ist der Emittent / Herausgeber verantwortlich. \n \n \n \n GCash verkündet Auslandsexpansion bei der London Tech Week 2023\n \n \n \n \n\n\n\n\n \nNachrichtenquelle: \nEQS Group AG\n \n01.08.2023, 10:48 \n  |  \n 37 \n  |  \n \n0 \n  |    \n \n\n\n \n \n \n \nEQS-News\n  GCash verkündet Auslandsexpansion bei der London Tech Week 2023 \n \n EQS-News: GCash / Schlagwort(e): Expansion  GCash verkündet Auslandsexpansion bei der London Tech Week 2023 01.",
      rights: "wallstreet-online.de",
      rank: 17657,
      topic: "news",
      country: "DE",
      language: "de",
      authors: "EQS Group AG",
      media:
        "https://assets.wallstreet-online.de/_media/6/source1280/size_645/eqs-group-1280.png",
      is_opinion: false,
      twitter_account: "@wotwitt",
      _score: 13.914521,
      _id: "dfa48758306a2f5a0bd69f4fb24d1cd4",
    },
    {
      title: "Meta begins blocking news on Facebook, Instagram in Canada",
      author: "Ryan Lovelace",
      published_date: "2023-08-02 14:30:00",
      published_date_precision: "timezone unknown",
      link: "https://www.washingtontimes.com/news/2023/aug/2/meta-begins-blocking-news-facebook-instagram-canad/",
      clean_url: "washingtontimes.com",
      excerpt:
        "Meta said it started blocking news content on Facebook and Instagram in Canada over a law directing Big Tech companies to pay media outlets for news used on their platforms.",
      summary:
        "Meta said it started blocking news content on Facebook and Instagram in Canada over a law directing Big Tech companies to pay media outlets for news used on their platforms.\n\nThe escalating feud over digital news up north coincides with Meta's fight against antitrust journalism legislation becoming law in the U.S. that has stalled in Congress.\n\nAfter Canada's Legislature passed the Online News Act this year, Meta said it would restrict the flow of news across its platforms. The Big Tech company said Tuesday it will make good on its threat.",
      rights: "washingtontimes.com",
      rank: 907,
      topic: "world",
      country: "US",
      language: "en",
      authors: "Ryan Lovelace,The Washington Times Https",
      media:
        "https://twt-thumbs.washtimes.com/media/image/2023/07/05/Canada_Meta_Ads_66306_c0-125-3000-1875_s1200x700.jpg?5df86175492ddcdc04d9d2b6261257b2d49617ee",
      is_opinion: false,
      twitter_account: "@washtimes",
      _score: 13.767616,
      _id: "d8e1fc2bd42712f33f7b927ccc6033c0",
    },
    {
      title: "Facebook, Instagram News Ban in Canada Officially Begins",
      author: "Teejay",
      published_date: "2023-08-02 06:20:13",
      published_date_precision: "full",
      link: "https://www.hngn.com/articles/250902/20230802/facebook-instagram-news-ban-canada.htm",
      clean_url: "hngn.com",
      excerpt:
        "Facebook and Instagram's news ban or blackout in Canada has officially begun. Meta's Facebook and Instagram have started blocking news in Canada, preventing its users from accessing news articles and…",
      summary:
        "Meta's Facebook and Instagram have started blocking news in Canada, preventing its users from accessing news articles and videos.\n \nThe latest move of Mark Zuckerberg's tech giant is in response to Canada's Online News Act, which requires tech giants to pay news publishers for their content.\n \nFacebook, Instagram Starts News Ban in Canada\n \n \n(Photo : ED JONES/AFP via Getty Images)\nA woman checks her Instagram account as she stands on a street in New York city on October 4, 2021. - Facebook and its Instagram and WhatsApp platforms were hit by a massive outage, impacting potentially tens of millions of people as users flocked to other networks to sound off.",
      rights: "hngn.com",
      rank: 20734,
      topic: "news",
      country: "US",
      language: "en",
      authors: "Teejay",
      media:
        "https://1075914428.rsc.cdn77.org/data/images/full/279790/facebook-and-instagram-news-ban-canada.jpg",
      is_opinion: false,
      twitter_account: "@HNGNcom",
      _score: 13.448705,
      _id: "1bd887c7b36ed3cf8cb9255f05dd1098",
    },
    {
      title: "‘I got inspired by giant strides African Tech space was making'",
      author: "Guardian Nigeria",
      published_date: "2023-07-29 03:07:55",
      published_date_precision: "full",
      link: "https://guardian.ng/saturday-magazine/i-got-inspired-by-giant-strides-african-tech-space-was-making",
      clean_url: "guardian.ng",
      excerpt:
        "When I started my career at a finance company that has a fintech product, I got into tech sales by accident and I loved it. This is mostly because it's an area of strength for me given the transferable skills I had acquired from my entrepreneurial attempts way before I graduated.",
      summary:
        "When I started my career at a finance company that has a fintech product, I got into tech sales by accident and I loved it. This is mostly because it's an area of strength for me given the transferable skills I had acquired from my entrepreneurial attempts way before I graduated.\n\n\nThe post \n‘I got inspired by giant strides African Tech space was making'\n appeared first on \nThe Guardian Nigeria News - Nigeria and World News\n.",
      rights: "guardian.ng",
      rank: 4878,
      topic: "news",
      country: "NG",
      language: "en",
      authors: "Guardian Nigeria",
      media:
        "https://guardian.ng/wp-content/uploads/2023/07/Titilope-Macaulay.jpg",
      is_opinion: false,
      twitter_account: "@GuardianNigeria",
      _score: 13.443576,
      _id: "8f18b2a8a14c872b718fa4740d437274",
    },
    {
      title:
        "Today's tech news live: Samsung Galaxy Ring launch gets closer and more",
      author: "mark.wilson@futurenet.com",
      published_date: "2023-07-31 12:35:06",
      published_date_precision: "full",
      link: "https://www.techradar.com/news/live/fast-charge-july-31",
      clean_url: "techradar.com",
      excerpt:
        "Looking for a quick fix of today's tech news? Our Fast Charge liveblog will plug you into the latest stories.",
      summary:
        "Looking for a quick fix of today's tech news? Our Fast Charge liveblog will plug you into the latest stories.",
      rights: "techradar.com",
      rank: 597,
      topic: "tech",
      country: "US",
      language: "en",
      authors: "Mark Wilson,mark.wilson@futurenet.com",
      media:
        "https://cdn.mos.cms.futurecdn.net/mHP8u2X5MqmQzMJbXSoYiW-1200-80.jpg",
      is_opinion: false,
      twitter_account: "@TechRadar",
      _score: 13.413084,
      _id: "b48d009ab34fa6baa57c6b9d4f9062ca",
    },
    {
      title:
        "Facebook, Instagram Go Dark On News In Canada: What You Need To Know About Meta's Latest Tussle",
      author: "Ananya Gairola",
      published_date: "2023-08-02 06:42:54",
      published_date_precision: "full",
      link: "https://www.benzinga.com/news/23/08/33513219/facebook-instagram-go-dark-on-news-in-canada-what-you-need-to-know-about-metas-latest-tussle",
      clean_url: "benzinga.com",
      excerpt:
        "Facebook and Instagram, owned by Meta, have started blocking access to news for all users in Canada in response to the Online News Act.",
      summary:
        "Amidst a contentious battle between tech giants and Canadian lawmakers over the \nOnline News Act\n, \nFacebook\n and \nInstagram\n, owned by \nMeta Platforms Inc.\n \nMETA\n, have \nstarted blocking news\n access for all users in the country. \nWhat Happened: \nThe Online News Act, passed by the Canadian parliament, aims to force platforms like Facebook and \nAlphabet Inc.'s\n \nGOOG\n \nGOOGL\n \nGoogle \nto negotiate commercial deals with Canadian \nnews publishers for their content\n. \nIn response, on Tuesday, Meta started blocking access to news on its social media platforms for all users in Canada.",
      rights: "benzinga.com",
      rank: 1933,
      topic: "news",
      country: "US",
      language: "en",
      authors: "Ananya Gairola",
      media:
        "https://cdn.benzinga.com/files/images/story/2023/Facebook_Canada.jpeg?width=1200&height=800&fit=crop",
      is_opinion: false,
      twitter_account: "@benzinga",
      _score: 13.37419,
      _id: "bb03c22b9a86db268bb367a5ccb12b89",
    },
    {
      title:
        "Tech Mahindra share price drops 4% after Q1 results; top brokerages retain their cautious views; here's why",
      author: "Nishant Kumar",
      published_date: "2023-07-27 03:51:47",
      published_date_precision: "full",
      link: "https://www.livemint.com/market/stock-market-news/tech-mahindra-share-price-drops-4-after-tech-mahindra-q1-results-brokerages-retain-their-cautious-views-heres-why-11690427659270.html",
      clean_url: "livemint.com",
      excerpt:
        "Tech Mahindra share price: Shares of Tech Mahindra fell 4 per cent after the company reported its Q1FY24 earnings. The company's revenue for Q1FY24 fell 4.1 per cent QoQ. Many brokerage firms have…",
      summary:
        "Shares of Tech Mahindra fell 4 per cent in early trade on Thursday (July 27) on BSE a day after the company reported its Q1FY24 earnings. The stock opened at \n₹\n1,100.05 against the previous close of \n₹\n1144.05 and fell 4 per cent to hit a low of \n₹\n1,097.25.\n \n \n Shares of Tech Mahindra have underperformed the benchmark Sensex in the last one year. Tech Mahindra shares are up 16 per cent in the last one year against a 21 per cent gain in the equity benchmark Sensex. However, the BSE IT index gained just about 8 per cent in the same period.",
      rights: "livemint.com",
      rank: 1404,
      topic: "business",
      country: "IN",
      language: "en",
      authors: "Nishant Kumar",
      media:
        "https://www.livemint.com/lm-img/img/2023/07/27/600x338/stocktraders-kL9B--621x414LiveMint_1690427929799_1690427929984.jpg",
      is_opinion: false,
      twitter_account: "@mint",
      _score: 13.359308,
      _id: "00b34794480e72c1370b50c758fbb338",
    },
    {
      title:
        "Tetra Tech Wins $34 Million U.S. Army Corps of Engineers A-E Services Contract",
      author: "Business Wire",
      published_date: "2023-07-27 13:04:02",
      published_date_precision: "full",
      link: "https://www.marketscreener.com/quote/stock/TETRA-TECH-INC-11172/news/Tetra-Tech-Wins-34-Million-U-S-Army-Corps-of-Engineers-A-E-Services-Contract-44439529/?utm_medium=RSS&utm_content=20230727",
      clean_url: "marketscreener.com",
      excerpt:
        "Tetra Tech, Inc. , a leading provider of high-end consulting and engineering services, announced today that the U.S. Army Corps of Engineers , Walla Walla District, selected Tetra Tech for a $34...",
      summary:
        "(marketscreener.com) \nTetra Tech, Inc. , a leading provider of high-end consulting and engineering services, announced today that the U.S. Army Corps of Engineers , Walla Walla District, selected Tetra Tech for a $34 million, multiple-award contract to provide architectural and engineering design services for civil works infrastructure including flood risk...\nhttps://www.marketscreener.com/quote/stock/TETRA-TECH-INC-11172/news/Tetra-Tech-Wins-34-Million-U-S-Army-Corps-of-Engineers-A-E-Services-C",
      rights: "Copyright 2001 - 2023 Surperformance",
      rank: 3681,
      topic: "finance",
      country: "US",
      language: "en",
      authors: "Business Wire,MarketScreener",
      media: "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
      is_opinion: false,
      twitter_account: null,
      _score: 13.332358,
      _id: "e9deca7a887e25113babbe278fb7493f",
    },
    {
      title:
        "India's Tech Mahindra's shares fall 4% on surprise drop in Q1 profit",
      author: "Reuters",
      published_date: "2023-07-27 03:57:07",
      published_date_precision: "full",
      link: "https://www.marketscreener.com/quote/stock/TECH-MAHINDRA-LIMITED-33647041/news/India-s-Tech-Mahindra-s-shares-fall-4-on-surprise-drop-in-Q1-profit-44431446/?utm_medium=RSS&utm_content=20230726",
      clean_url: "marketscreener.com",
      excerpt:
        "India's Tech Mahindra's shares fell as much as 4% on Thursday after the company posted a surprise 39% drop in its quarterly profit on Wednesday. ...",
      summary:
        "(marketscreener.com) India's Tech Mahindra's shares fell as much as 4% on Thursday after the company posted a surprise 39% drop in its quarterly profit on Wednesday. \nhttps://www.marketscreener.com/quote/stock/TECH-MAHINDRA-LIMITED-33647041/news/India-s-Tech-Mahindra-s-shares-fall-4-on-surprise-drop-in-Q1-profit-44431446/?utm_medium=RSS&utm_content=20230726",
      rights: "Copyright 2001 - 2023 Surperformance",
      rank: 3681,
      topic: "finance",
      country: "US",
      language: "en",
      authors: "MarketScreener,Reuters",
      media: "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
      is_opinion: false,
      twitter_account: null,
      _score: 13.323003,
      _id: "1098b3ff69341e284381f369697403bb",
    },
    {
      title:
        "EQS-News                     GCash banners overseas expansion in London Tech Week 2023",
      author: "EQS Group AG",
      published_date: "2023-08-01 10:48:06",
      published_date_precision: "timezone unknown",
      link: "https://www.wallstreet-online.de/nachricht/17193525-eqs-news-gcash-banners-overseas-expansion-london-tech-week-2023",
      clean_url: "wallstreet-online.de",
      excerpt:
        "01.08.2023 - EQS-News: GCash / Key word(s): Expansion  GCash banners overseas expansion in London Tech Week 2023 01.08.2023 / 10:48 CET/CEST The issuer is solely responsible for the content of this announcement.  GCash banners overseas expansion in London Tech ...",
      summary:
        "EQS-News: GCash / Key word(s): Expansion\n  GCash banners overseas expansion in London Tech Week 2023\n \n 01.08.2023 / 10:48 CET/CEST\n The issuer is solely responsible for the content of this announcement.\n \n \n \n \n \n  GCash banners overseas expansion in London Tech Week 2023\n \n \n LONDON, UK - Media OutReach",
      rights: "wallstreet-online.de",
      rank: 17657,
      topic: "news",
      country: "DE",
      language: "en",
      authors: "EQS Group AG",
      media:
        "https://assets.wallstreet-online.de/_media/6/source1280/size_645/eqs-group-1280.png",
      is_opinion: false,
      twitter_account: "@wotwitt",
      _score: 13.320912,
      _id: "fc58e88df6a8500f6ca26a4293b1fcb0",
    },
    {
      title:
        "'Time for Lindsey Graham to retire,' Elon Musk declares as Graham and Elizabeth Warren press for the creation of a regulator to police Big Tech",
      author: "Alex Nitzberg",
      published_date: "2023-07-29 02:05:00",
      published_date_precision: "full",
      link: "https://www.theblaze.com/news/elon-musk-lindsey-graham-retire",
      clean_url: "theblaze.com",
      excerpt:
        "Elon Musk wants GOP Sen. Lindsey Graham of South Carolina to retire.The wealthy business tycoon's tweet to that effect came in response to the news that Graham has teamed up with Democratic Sen.…",
      summary:
        "Elon Musk wants GOP Sen. Lindsey Graham of South Carolina to retire.\nThe wealthy business tycoon's tweet to that effect came in response to the news that Graham has teamed up with Democratic Sen. Elizabeth Warren of Massachusetts to propose legislation that would establish a regulatory commission to oversee Big Tech companies.\n\"Our Digital Consumer Protection Commission Act would create an independent, bipartisan regulator charged with licensing and policing the nation's biggest tech companies — like Meta, Google and Amazon — to prevent online harm, promote free speech and competition, guard Americans' privacy and protect national security,\" the bipartisan duo wrote in a New York Times opinion \npiece\n.",
      rights: "theblaze.com",
      rank: 3095,
      topic: "news",
      country: "US",
      language: "en",
      authors: "Alex Nitzberg",
      media:
        "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8zNDcwNDAxNy9vcmlnaW4ucG5nIiwiZXhwaXJlc19hdCI6MTY5MTM5ODU2Mn0.juwv_x7IJvcB0JLQqMV_xL5ebhUrkAecoQUaYI2RM7Y/img.png?width=1200&height=600&coordinates=0%2C0%2C0%2C78",
      is_opinion: false,
      twitter_account: "@",
      _score: 13.316362,
      _id: "d56cff4e4995acb048a926f12cbf952a",
    },
    {
      title: "INSIDE WISCONSIN",
      author: "Tech Council",
      published_date: "2023-07-28 15:14:33",
      published_date_precision: "full",
      link: "https://wisconsintechnologycouncil.com/newsroom/inside-wisconsin-by-tom-still/",
      clean_url: "wisconsintechnologycouncil.com",
      excerpt: null,
      summary:
        "by \nTech Council\n | \nJul 27, 2023\n | \nFeatured\n, \nInside Wisconsin\n, \nNEWSROOM\n, \nTech Council News\n | 0 Comments\nBy Tom Still SUPERIOR, Wis. – They are twin cities in many ways, but it's much more fraternal than identical. Superior, Wis., and Duluth, Minn., are both port towns on the western shore of Lake Superior. Separated only by a bay and connected by two bridges, they share...\n\n\n \n \n \nby \nWTC Staff\n | \nJul 20, 2023\n | \nFeatured\n, \nInside Wisconsin\n, \nNEWSROOM\n, \nTech Council News\n | 0 Comments\nBy Tom Still MADISON, Wis.",
      rights: "wisconsintechnologycouncil.com",
      rank: 541454,
      topic: "news",
      country: "unknown",
      language: "en",
      authors: "Tech Council,Wtc Staff",
      media:
        "https://wisconsintechnologycouncil.com/wp-content/uploads/2023/07/Inside-WI-logo-white-BG-600x640-1-283x300.png",
      is_opinion: false,
      twitter_account: null,
      _score: 13.313944,
      _id: "0ca594380963f32eaef85e58d7d8233f",
    },
    {
      title:
        "Bad News Will Actually Be a Boost for These 3 Troubled Tech Stocks",
      author: "Pm Edt",
      published_date: "2023-07-31 19:38:00",
      published_date_precision: "timezone unknown",
      link: "https://www.nasdaq.com/articles/bad-news-will-actually-be-a-boost-for-these-3-troubled-tech-stocks",
      clean_url: "nasdaq.com",
      excerpt: "InvestorPlace - Stock Market News, Stock Advice & Trading Tips",
      summary:
        "While we've all heard the phrase bad news is good news in the capital markets, for certain tech stocks rising from adversity, the adage may yield considerable shareholder profits. As a caveat, one should realize that companies that print red ink often do so for a reason. Usually, it's not a good one. Still, high-return troubled tech stocks continue to delight fortunate speculators.\n\nOne reason why tech stocks turning negative into positive remains a legitimate phenomenon for some organizations comes down to a simple mathematical reality: the market never generates perfectly linear trajectories.",
      rights: "nasdaq.com",
      rank: 713,
      topic: "news",
      country: "US",
      language: "en",
      authors: "InvestorPlace,Josh Enomoto,Pm Edt",
      media:
        "https://www.nasdaq.com/sites/acquia.prod/files/2019-05/0902-Q19%20Total%20Markets%20photos%20and%20gif_CC8.jpg",
      is_opinion: false,
      twitter_account: "@Nasdaq",
      _score: 13.313134,
      _id: "ed2f56214ab5fa91faa463e48262edf2",
    },
    {
      title:
        "In-State 2025 OL Tyler Barrett ends his summer at Virginia Tech for Hokie Fest",
      author: "Hours Ago",
      published_date: "2023-07-30 11:00:00",
      published_date_precision: "full",
      link: "https://www.dailyadvent.com/news/f115422011fdfb91324f41a2a2b0e538-InState-2025-OL-Tyler-Barrett-ends-his-summer-at-Virginia-Tech-for-Hokie-Fest",
      clean_url: "dailyadvent.com",
      excerpt:
        "Virginia Tech has made a huge impression on 2025 OL Tyler Barrett VIDEO: Late Kick: What if Virginia Tech has a turnaround season? Glade Spring (VA) Patrick Henry Class of 2025 offensive lineman Tyler…",
      summary:
        "Virginia Tech has made a huge impression on 2025 \nOL\n \nTyler Barrett\n VIDEO: Late Kick: What if Virginia Tech has a turnaround season?\nGlade Spring (VA) Patrick Henry Class of 2025 offensive lineman Tyler Barrett has become a regular at Virginia Tech this summer, visiting the university unofficially a handful of times.... \n \nRead Full Story\n \n \n \nIf the content contained herein violates any of your rights, including those of copyright, you are requested to immediately notify us using via the following email address operanews-external(at)opera.",
      rights: "dailyadvent.com",
      rank: 21945,
      topic: "news",
      country: "NG",
      language: "en",
      authors: "Hours Ago,ts.com",
      media:
        "https://res.feednews.com/assets/v2/e041b367666cafbc0a93fe34a016b58e?width=1280&height=720&quality=hq&category=us_News_Sports",
      is_opinion: false,
      twitter_account: null,
      _score: 13.30637,
      _id: "da053fd8e0dd86db6114f444318c3992",
    },
    {
      title: "Fuel Tech, Inc. : Stock Market News and Information",
      author: "",
      published_date: "2023-07-27 22:00:00",
      published_date_precision: "timezone unknown",
      link: "https://www.marketscreener.com/quote/stock/FUEL-TECH-INC-9378/news/",
      clean_url: "marketscreener.com",
      excerpt:
        "Fuel Tech, Inc. : News, information and stories for Fuel Tech, Inc. | Nasdaq: FTEK | Nasdaq",
      summary:
        "04:26pm\n BU \n May. 10\n PU \n Fuel Tech : EXECUTIVE PERFORMANCE RSU AGREEMENT - Form 8-K \n May. 10\n PU \n May. 10\n AQ \n Transcript : Fuel Tech, Inc., Q1 2023 Earnings Call, May 10, 2023 \n May. 10\n CI \n Fuel Tech Reports 2023 First Quarter Financial Results \n May. 09\n BU \n May. 09\n CI \n May. 09\n AQ \n May. 09\n MT \n Fuel Tech, Inc. Provides Earnings Guidance for the Year 2023 \n May. 09\n CI \n May. 02\n PU \n May. 01\n BU \n Transcript : Fuel Tech, Inc., Q4 2022 Earnings Call, Mar 08, 2023 \n Mar. 08\n CI \n Mar.",
      rights: "marketscreener.com",
      rank: 3681,
      topic: "finance",
      country: "US",
      language: "en",
      authors: "",
      media: "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
      is_opinion: false,
      twitter_account: "@zonebourse",
      _score: 13.296274,
      _id: "8e4a58017756d6e27b83f33007c0fd59",
    },
    {
      title:
        "Meta starts blocking the news in Canada — its latest standoff with publishers",
      author: "Taylor Hatmaker",
      published_date: "2023-08-02 19:19:14",
      published_date_precision: "full",
      link: "https://news.yahoo.com/meta-starts-blocking-news-canada-191914925.html",
      clean_url: "yahoo.com",
      excerpt:
        "Canadians using Facebook and Instagram should expect to see some gaps in their feeds, starting now. This week, Meta began blocking Canadian access to links and stories from news publishers — the company's response to a bill that would require the tech giant to pay outlets for the right to distribute and profit from their content. \"As we've always said, the law is based on a fundamentally flawed premise,\" Meta policy communications director Andy Stone wrote on Twitter.",
      summary:
        'Canadians using Facebook and Instagram should expect to see some gaps in their feeds, starting now.\nThis week, Meta began blocking Canadian access to links and stories from news publishers — the company\'s response to a bill that would require the tech giant to pay outlets for the right to distribute and profit from their content.\n"As we\'ve always said, the law is based on a fundamentally flawed premise," Meta policy communications director Andy Stone wrote on Twitter. "And, regrettably, the only way we can reasonably comply is to end news availability in Canada.',
      rights: "yahoo.com",
      rank: 31,
      topic: "news",
      country: "US",
      language: "en",
      authors: "Taylor Hatmaker",
      media:
        "https://s.yimg.com/ny/api/res/1.2/OlRbTC6CXuCA3LJn4Yse0w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/techcrunch_350/24aee195b06f7ff124dd76b677390116",
      is_opinion: false,
      twitter_account: "@YahooNews",
      _score: 13.252863,
      _id: "154a4d9f08fe13fdd3a74b946018ebc7",
    },
    {
      title:
        "Tech Mahindra Stocks Live Updates: Tech Mahindra Closes at Rs 1099.9 with -0.74% 1-Month Return",
      author: "Economic Times",
      published_date: "2023-07-28 03:02:00",
      published_date_precision: "full",
      link: "https://economictimes.indiatimes.com/markets/stocks/stock-liveblog/tech-mahindra-stocks-live-updates-28-jul-2023/liveblog/102187436.cms",
      clean_url: "indiatimes.com",
      excerpt:
        "Discover the Tech Mahindra Stock Liveblog, your ultimate resource for real-time updates and insightful analysis on a prominent stock. Keep track of Tech Mahindra with the latest details, including:…",
      summary:
        "Discover the Tech Mahindra Stock Liveblog, your ultimate resource for real-time updates and insightful analysis on a prominent stock. Keep track of Tech Mahindra with the latest details, including: Last traded price 1100.0, Market capitalization: 107207.19, Volume: 7550, Price-to-earnings ratio 24.41, Earnings per share 45.06. Our comprehensive coverage combines fundamental and technical indicators to provide you with a comprehensive view of Tech Mahindra's performance. Stay informed about breaking news that can sway Tech Mahindra's trajectory in the market.",
      rights:
        "Copyright:(C)2023 Bennett Coleman & Co. Ltd, http://info.indiatimes.com/terms/tou.html",
      rank: 296,
      topic: "economics",
      country: "IN",
      language: "en",
      authors: "Economic Times",
      media:
        "https://img.etimg.com/thumb/msid-102187436,width-600,resizemode-4,imglength-7650/markets/stocks/stock-liveblog/tech-mahindra-stocks-live-updates-28-jul-2023.jpg",
      is_opinion: false,
      twitter_account: "@EconomicTimes",
      _score: 13.243345,
      _id: "820c1627e649386bc96b808b282a098b",
    },
    {
      title: "Warren and Graham's Plan to Regulate Big Tech and AI Companies",
      author: "Comed-Ai-N",
      published_date: "2023-07-29 21:15:06",
      published_date_precision: "full",
      link: "https://medium.com/@Comed_AI_n/warren-and-grahams-plan-to-regulate-big-tech-and-ai-companies-tech-news-with-comed-ai-n-627f2c2c373e",
      clean_url: "medium.com",
      excerpt:
        "In this episode, we delve into the proposed legislation by Senators Elizabeth Warren and Lindsey Graham to create a federal agency to regulate Big Tech and AI companies. We take a hilarious yet…",
      summary:
        "Warren and Graham's Plan to Regulate Big Tech and AI Companies | Tech News with Comed-AI-n\nIn this episode, we delve into the proposed legislation by Senators Elizabeth Warren and Lindsey Graham to create a federal agency to regulate Big Tech and AI companies. We take a hilarious yet mildly offensive approach to dissecting their plan, including their lack of understanding of technology and the names of the companies they are targeting. We question the effectiveness of their agency and suggest they focus on more pressing issues like infrastructure.",
      rights: "medium.com",
      rank: 51,
      topic: "entertainment",
      country: "US",
      language: "en",
      authors: "Comed-Ai-N",
      media:
        "https://miro.medium.com/v2/resize:fit:1200/0*RP5ehAgzKAAn2Ga5.jpg",
      is_opinion: false,
      twitter_account: "@Comed_Ai_n",
      _score: 13.233886,
      _id: "719992aec744a23e22aca189dc0c6224",
    },
    {
      title: "Arizona man who extorted Georgia Tech gets prison time",
      author: "",
      published_date: "2023-07-28 20:55:06",
      published_date_precision: "full",
      link: "https://apnews.com/article/georgia-tech-sexual-assault-extortion-pastner-ronald-bell-7a9efb1563bc26d637cf30adaf25e517",
      clean_url: "apnews.com",
      excerpt:
        "Federal prosecutors say an Arizona man accused of trying to extort Georgia Tech by falsely accusing its men's basketball coach of sexual assault has been sentenced to nearly three years in prison.",
      summary:
        "ATLANTA (AP) — An Arizona man accused of trying to extort Georgia Tech by falsely accusing its men's basketball coach of sexual assault has been sentenced to nearly three years in prison, federal prosecutors said.\n\nRonald Bell, 57, of Oro Valley, Arizona, was sentenced Thursday to two years, nine months in prison to be followed by three years of supervised release, U.S. Attorney Ryan K. Buchanan said in a news release. Bell pleaded guilty in March to conspiring with his co-defendant, Jennifer Pendley, and a security guard at Georgia Tech, to the extortion scheme.",
      rights: "apnews.com",
      rank: 353,
      topic: "news",
      country: "US",
      language: "en",
      authors: "",
      media:
        "https://dims.apnews.com/dims4/default/dcac1a4/2147483647/strip/true/crop/700x394+0+28/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F90%2F29%2F4e3c1cc7446089a9101a7bdff4c8%2Fdefaultshareimage-copy.png",
      is_opinion: false,
      twitter_account: "@AP",
      _score: 13.227283,
      _id: "9d09fda74c82935c76ad86159ab84718",
    },
    {
      title: "Tetra Tech, Inc. : Stock Market News and Information",
      author: "",
      published_date: "2023-07-27 13:30:00",
      published_date_precision: "timezone unknown",
      link: "https://www.marketscreener.com/quote/stock/TETRA-TECH-INC-11172/news/",
      clean_url: "marketscreener.com",
      excerpt:
        "Tetra Tech, Inc. : News, information and stories for Tetra Tech, Inc. | Nasdaq: TTEK | Nasdaq",
      summary:
        "09:04am\n BU \n Jul. 19\n BU \n Jul. 12\n MT \n Hamak Gold raises GBP350,000 for Liberia drilling \n Jul. 03\n AN \n Fission Uranium Completes Drill Program To Advance PLS Project \n Jun. 27\n MT \n Jun. 14\n MT \n Tetra Tech Wins $200 Million Contract From US Army Corps of Engineers \n Jun. 13\n MT \n Jun. 13\n BU \n Jun. 13\n CI \n Jun. 05\n MT \n Tetra Tech Awarded GBP60 Million Water Asset Management Contract \n Jun. 02\n AQ \n Tetra Tech Awarded £60 Million Water Asset Management Contract \n Jun. 01\n BU \n Tetra Tech, Inc.",
      rights: "marketscreener.com",
      rank: 3681,
      topic: "finance",
      country: "US",
      language: "en",
      authors: "",
      media: "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
      is_opinion: false,
      twitter_account: "@zonebourse",
      _score: 13.213114,
      _id: "5d47154ae4901377688bba97d4f42a68",
    },
    {
      title: "Arizona man who extorted Georgia Tech gets prison time",
      author: "Georgia News",
      published_date: "2023-07-28 20:55:46",
      published_date_precision: "full",
      link: "https://www.ajc.com/news/georgia-news/arizona-man-who-extorted-georgia-tech-gets-prison-time/KW4NBANGZVDZPBXSSHVOPT5DW4/",
      clean_url: "ajc.com",
      excerpt:
        "ATLANTA (AP) — An Arizona man accused of trying to extort Georgia Tech by falsely accusing its men's basketball coach of sexual assault has been sentenced to nearly three years in prison, federal prosecutors said.",
      summary:
        "ATLANTA (AP) — An Arizona man accused of trying to extort Georgia Tech by falsely accusing its men's basketball coach of sexual assault has been sentenced to nearly three years in prison, federal prosecutors said.\n\nRonald Bell, 57, of Oro Valley, Arizona, was sentenced Thursday to two years, nine months in prison to be followed by three years of supervised release, U.S. Attorney Ryan K. Buchanan said in a news release. Bell pleaded guilty in March to conspiring with his co-defendant, Jennifer Pendley, and a security guard at Georgia Tech, to the extortion scheme.",
      rights: "ajc.com",
      rank: 1226,
      topic: "news",
      country: "US",
      language: "en",
      authors: "Georgia News",
      media: "https://ajc.com/pf/resources/logos/AJC/logo-ogimage.png?d=947",
      is_opinion: false,
      twitter_account: "@ajc",
      _score: 13.188229,
      _id: "87f798ebea3bd866f3e622e984575696",
    },
    {
      title:
        "Breakouts Updates: Tech Mahindra's Stock Price Plummets Below Third Support Level",
      author: "Economic Times",
      published_date: "2023-07-27 03:02:00",
      published_date_precision: "full",
      link: "https://economictimes.indiatimes.com/markets/stocks/stock-liveblog/tech-mahindra-share-price-today-live-updates-27-jul-2023/liveblog/102155599.cms",
      clean_url: "indiatimes.com",
      excerpt:
        "Stay informed with the Tech Mahindra Stock Liveblog, your comprehensive resource for real-time updates and in-depth analysis of a leading stock. Get the latest details on Tech Mahindra, including:…",
      summary:
        "Stay informed with the Tech Mahindra Stock Liveblog, your comprehensive resource for real-time updates and in-depth analysis of a leading stock. Get the latest details on Tech Mahindra, including: Last traded price 1094.65, Market capitalization: 111427.64, Volume: 3297797, Price-to-earnings ratio 23.06, Earnings per share 49.57. Our liveblog combines fundamental and technical insights to provide a holistic view of Tech Mahindra's performance. Stay ahead of the market with breaking news that can influence Tech Mahindra's trajectory.",
      rights:
        "Copyright:(C)2023 Bennett Coleman & Co. Ltd, http://info.indiatimes.com/terms/tou.html",
      rank: 296,
      topic: "economics",
      country: "IN",
      language: "en",
      authors: "Economic Times",
      media:
        "https://img.etimg.com/thumb/msid-102155599,width-600,resizemode-4,imglength-7650/markets/stocks/stock-liveblog/tech-mahindra-share-price-today-live-updates-27-jul-2023.jpg",
      is_opinion: false,
      twitter_account: "@EconomicTimes",
      _score: 13.184822,
      _id: "b05a43e33a7f8d9ce9b43dbb4170c7c6",
    },
    {
      title:
        "Samsung's new foldable smartphones, Twitter rebranding, WhatsApp's new video feature and more top tech news of the week",
      author: "Gadgets Now",
      published_date: "2023-07-30 07:24:00",
      published_date_precision: "full",
      link: "https://www.gadgetsnow.com/slideshows/samsungs-new-foldable-smartphones-twitter-rebranding-whatsapps-new-video-feature-and-more-top-tech-new-of-the-week/photolist/102242606.cms",
      clean_url: "gadgetsnow.com",
      excerpt:
        "This has been quite a busy week as the world saw some big announcements in the tech world, including the launch of latest foldables smartphones from Samsung, Twitter rebranding to ‘X' and WhatsApp's…",
      summary:
        "Gadgets Now Bureau\n30 Jul, 2023, 12:54PM IST\nFacebook\nTwitter\nLinkedin\nEMail\nThis has been quite a busy week as the world saw some big announcements in the tech world, including the launch of latest foldables smartphones from Samsung, Twitter rebranding to ‘X' and WhatsApp's new short video message feature. All these and more top tech news of the week that you should not miss. \n1\n13\n2\n13\n3\n13\n4\n13\n5\n13\n6\n13\n7\n13\n8\n13\n9\n13\n10\n13\n11\n13\n12\n13\n13\n13",
      rights: "gadgetsnow.com",
      rank: 8629,
      topic: "news",
      country: "IN",
      language: "en",
      authors: "Gadgets Now",
      media:
        "https://static.toiimg.com/thumb/msid-102242661,width-800,resizemode-4,imgsize-9626/share.jpg",
      is_opinion: false,
      twitter_account: "@gadgetsnow",
      _score: 13.1641,
      _id: "b290b0d0adf5a83a4dbf4b659b83ca17",
    },
    {
      title:
        "Bad News Will Actually Be a Boost for These 3 Troubled Tech Stocks",
      author: "Josh Enomoto",
      published_date: "2023-07-31 19:38:36",
      published_date_precision: "full",
      link: "https://investorplace.com/2023/07/bad-news-will-actually-be-a-boost-for-these-3-troubled-tech-stocks/",
      clean_url: "investorplace.com",
      excerpt:
        "Although troubled entities should usually be left alone, these tech stocks rising from adversity may intrigue contrarians.",
      summary:
        "While we've all heard the phrase bad news is good news in the capital markets, for certain \ntech stocks\n rising from adversity, the adage may yield considerable shareholder profits. As a caveat, one should realize that companies that print red ink often do so for a reason. Usually, it's not a good one. Still, high-return troubled tech stocks continue to delight fortunate speculators.\n\n\nOne reason why tech stocks turning negative into positive remains a legitimate phenomenon for some organizations comes down to a simple mathematical reality: the market never generates perfectly linear trajectories.",
      rights: "investorplace.com",
      rank: 6323,
      topic: "news",
      country: "US",
      language: "en",
      authors: "Josh Enomoto,Louis Navellier,Luke Lango,Thomas Yeung",
      media:
        "https://investorplace.com/wp-content/uploads/2022/10/stocks-to-buy-greedy1600-1024x576.png",
      is_opinion: false,
      twitter_account: "@InvestorPlace",
      _score: 13.146465,
      _id: "4ea3c06247bb2e9b4b1b1fc192499ce2",
    },
    {
      title:
        "Our View: Democracy: Bipartisan tax plan supports news, small business",
      author: "",
      published_date: "2023-07-28 12:15:00",
      published_date_precision: "timezone unknown",
      link: "https://www.mankatofreepress.com/opinion/editorials/our-view-democracy-bipartisan-tax-plan-supports-news-small-business/article_0ddeb382-2ca8-11ee-8130-1f16b6b8998b.html",
      clean_url: "mankatofreepress.com",
      excerpt:
        "Why it matters: Strong local communities with solid news organizations and civic engagement support democracy.",
      summary:
        "Why it matters: Strong local communities with solid news organizations and civic engagement support democracy.\nPublic goods are often supported by public funds in America, and a bipartisan plan in Congress to provide tax credits for local news organizations and small businesses that support them is an idea that fits perfectly into the principle of investing in the public good.\nThe Community News and Small Business Support Act would provide refundable tax credits of $25,000 for each local news employee in the first year and $15,000 for each employee in years two through five, when the tax credit would sunset.",
      rights: "mankatofreepress.com",
      rank: 19485,
      topic: "news",
      country: "US",
      language: "en",
      authors: "",
      media:
        "https://bloximages.chicago2.vip.townnews.com/mankatofreepress.com/content/tncms/custom/image/5e42277e-6153-11e5-b349-8f12bc751eed.jpg?resize=600%2C315",
      is_opinion: true,
      twitter_account: "@Mankatonews",
      _score: 13.1456375,
      _id: "120523c570f6ede5816b18598809d483",
    },
    {
      title:
        "Meta starts blocking the news in Canada — its latest standoff with publishers",
      author: "Taylor Hatmaker",
      published_date: "2023-08-02 19:19:14",
      published_date_precision: "full",
      link: "https://techcrunch.com/2023/08/02/meta-starts-blocking-the-news-in-canada-its-latest-standoff-with-publishers/",
      clean_url: "techcrunch.com",
      excerpt:
        "Meta is protesting a new Canadian law that would force social giants like Facebook and Instagram to pay for the news content that they host.",
      summary:
        "Canadians using Facebook and Instagram should expect to see some gaps in their feeds, starting now.\n\n\nThis week, Meta began blocking Canadian access to links and stories from news publishers — the company's \nresponse to a bill\n that would require the tech giant to pay outlets for the right to distribute and profit from their content.\n\n\n'As we've always said, the law is based on a fundamentally flawed premise,' Meta policy communications director Andy Stone wrote on Twitter. 'And, regrettably, the only way we can reasonably comply is to end news availability in Canada.",
      rights: "techcrunch.com",
      rank: 163,
      topic: "tech",
      country: "US",
      language: "en",
      authors: "Taylor Hatmaker",
      media:
        "https://techcrunch.com/wp-content/uploads/2022/02/meta-brands-glitch.jpg?resize=1200,675",
      is_opinion: false,
      twitter_account: "@TechCrunch",
      _score: 13.141283,
      _id: "aea4a0ba1d1e03f8e8d00e8e11b873e4",
    },
    {
      title:
        "Audiovisivo: Ittv International Forum e Tech In Entertainment tornano a Venezia con una nuova partnership",
      author: "",
      published_date: "2023-07-27 10:00:00",
      published_date_precision: "timezone unknown",
      link: "https://www.primapaginanews.it/articoli/audiovisivo-ittv-international-forum-e-tech-in-entertainment-tornano-a-venezia-con-una-nuova-partnership-526030",
      clean_url: "primapaginanews.it",
      excerpt: "Eventi in programma il 2 settembre, nell'ambito di Venezia80.",
      summary:
        "Audiovisivo: Ittv International Forum e Tech In Entertainment tornano a Venezia con una nuova partnership \n \n \nEventi in programma il 2 settembre, nell'ambito di Venezia80.\n \n \n \n \n (Prima Pagina News) \n Giovedì 27 Luglio 2023 \n \n \n \n \n \n \n \n \n \n \n \n \n \n Venezia\n - \n 27 lug 2023 (Prima Pagina News) \n \n \nEventi in programma il 2 settembre, nell'ambito di Venezia80.\n \n \n \n RIPRODUZIONE RISERVATA © Copyright Prima Pagina News \nIttv\n \nPPN\n \nPrima Pagina News\n \nTech In Entertainment\n \nVenezia80",
      rights: "primapaginanews.it",
      rank: 407986,
      topic: "news",
      country: "IT",
      language: "it",
      authors: "",
      media:
        "https://www.primapaginanews.it/public_files/files_upload/articoli/immagini/d5155d/526030/eec4cd1968f5e00694250e5d1875ad5158e4521b.jpg",
      is_opinion: false,
      twitter_account: null,
      _score: 13.137461,
      _id: "f5e371239f9515a718648f1237f16ed0",
    },
    {
      title:
        "Kellton Tech Solutions Limited : Stock Market News and Information",
      author: "",
      published_date: "2023-07-29 06:30:00",
      published_date_precision: "timezone unknown",
      link: "https://www.marketscreener.com/quote/stock/KELLTON-TECH-SOLUTIONS-LI-26420596/news/",
      clean_url: "marketscreener.com",
      excerpt:
        "Kellton Tech Solutions Limited : News, information and stories for Kellton Tech Solutions Limited | Bombay Stock Exchange: 519602 | Bombay Stock Exchange",
      summary:
        "11:43pm\n CI \n May. 31\n CI \n May. 30\n CI \n May. 30\n CI \n Kellton Launches its Global Customer Experience and Innovation Lab, Kverse \n Apr. 17\n CI \n Feb. 15\n CI \n Feb. 14\n CI \n Jan. 16\n PU \n Kellton Appoints Vividh Baru as SVP & Global Head of Digital Practice \n Dec. 21\n CI \n Kellton Tech Solutions Names Global Head of Digital Practice \n Dec. 21\n MT \n India Ratings Keeps Kellton Tech Solutions Rating at BBB+ \n Nov. 22\n MT \n Nov. 15\n CI \n Nov. 14\n CI \n 2022\n CI \n 2022\n CI \n 2022\n CI \n Kellton Tech",
      rights: "marketscreener.com",
      rank: 3681,
      topic: "finance",
      country: "US",
      language: "en",
      authors: "",
      media: "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
      is_opinion: false,
      twitter_account: "@zonebourse",
      _score: 13.112882,
      _id: "9ba90ed80e8fd1f77677d0f59bbabc39",
    },
    {
      title:
        "Virginia Tech eliminates early decision option, no longer considers legacy status",
      author: "Dcnewsnow.Com",
      published_date: "2023-08-01 21:02:28",
      published_date_precision: "full",
      link: "https://www.dailyadvent.com/news/06a3c57401fb56a8aef0249e1b329e0d-Virginia-Tech-eliminates-early-decision-option-no-longer-considers-legacy-status",
      clean_url: "dailyadvent.com",
      excerpt:
        "(Photo: Amanda Lee/WFXR News) BLACKSBURG, Va. (DC News Now) — Virginia Tech is eliminating its early decision option and will no longer consider legacy as a factor in admission considerations,…",
      summary:
        "(Photo: Amanda Lee/WFXR News)\nBLACKSBURG, Va. (DC News Now) — \nVirginia Tech\n is eliminating its early decision option and will no longer consider legacy as a factor in admission considerations, beginning in its 2023-2024 admission cycle. The university announced it will also comply with the recent \nU.S.\n Supreme Court decision to remove... \n \nRead Full Story\n \n \n \nIf the content contained herein violates any of your rights, including those of copyright, you are requested to immediately notify us using via the following email address operanews-external(at)opera.",
      rights: "dailyadvent.com",
      rank: 21945,
      topic: "news",
      country: "NG",
      language: "en",
      authors: "Dcnewsnow.Com,Hours Ago",
      media:
        "https://res.feednews.com/assets/v2/80e2e3d12c6e7c2be779578ac5c4cfd0?width=1280&height=720&quality=hq&category=us_Education",
      is_opinion: false,
      twitter_account: null,
      _score: 13.101528,
      _id: "f013cf7c7c23a3fa9d09a38504c38404",
    },
    {
      title:
        "Top Tech News Today: Disney+ Hotstar To Limit Password Sharing, Redmi 12 Launch Date Confirmed,",
      author: "Abp News Bureau",
      published_date: "2023-07-28 19:59:50",
      published_date_precision: "full",
      link: "https://news.abplive.com/technology/top-tech-news-today-july-28-disney-hotstar-password-sharing-redmi-12-india-launch-global-twitter-doing-away-dim-mode-1619134",
      clean_url: "abplive.com",
      excerpt:
        "Disney+ Hotstar is intending to limit password sharing and therefore, it would allow only four devices to have access to a premium subscription account.",
      summary:
        "Days after streaming giant Netflix ended password sharing in India, Walt Disney's streaming service Disney+ Hotstar has decided to launch a crackdown on password sharing in the country. According to news agency Reuters, Disney+ Hotstar is intending to limit password sharing and therefore, it would allow only four devices to have access to a premium subscription account. The report added, citing two sources with direct knowledge of the matter, this is the streaming company's attempt to check password sharing in India.",
      rights: "abplive.com",
      rank: 20613,
      topic: "business",
      country: "GB",
      language: "en",
      authors: "ABP News Bureau",
      media:
        "https://feeds.abplive.com/onecms/images/uploaded-images/2023/07/29/272bffcb4681de1009384a6b8f218a071690573917200295_original.png?impolicy=abp_cdn&imwidth=1200&imheight=628",
      is_opinion: false,
      twitter_account: "https://news.abplive.com/",
      _score: 13.092815,
      _id: "4adb656f347267f64c28cadace5f2f85",
    },
    {
      title:
        "Tech Mahindra Stocks Live Updates: Tech Mahindra Closes at Rs 1145.65 with a 6-Month Beta of 0.1656",
      author: "Economic Times",
      published_date: "2023-08-03 03:04:00",
      published_date_precision: "full",
      link: "https://economictimes.indiatimes.com/markets/stocks/stock-liveblog/tech-mahindra-stocks-live-updates-03-aug-2023/liveblog/102371458.cms",
      clean_url: "indiatimes.com",
      excerpt:
        "Welcome to the Tech Mahindra Stock Liveblog, your real-time source for the latest updates and comprehensive analysis on a prominent stock. Dive into the current details of Tech Mahindra, including:…",
      summary:
        "Welcome to the Tech Mahindra Stock Liveblog, your real-time source for the latest updates and comprehensive analysis on a prominent stock. Dive into the current details of Tech Mahindra, including: Last traded price 1140.0, Market capitalization: 111666.44, Volume: 4229, Price-to-earnings ratio 25.42, Earnings per share 45.06. Our liveblog offers a complete overview of Tech Mahindra through a blend of fundamental and technical indicators. Stay informed about breaking news that can shape Tech Mahindra's performance in the market.",
      rights:
        "Copyright:(C)2023 Bennett Coleman & Co. Ltd, http://info.indiatimes.com/terms/tou.html",
      rank: 296,
      topic: "economics",
      country: "IN",
      language: "en",
      authors: "Economic Times",
      media:
        "https://img.etimg.com/thumb/msid-102371458,width-600,resizemode-4,imglength-7650/markets/stocks/stock-liveblog/tech-mahindra-stocks-live-updates-03-aug-2023.jpg",
      is_opinion: false,
      twitter_account: "@EconomicTimes",
      _score: 13.084065,
      _id: "cb3a56edc7dd71df68cffedec4c7a65f",
    },
    {
      title:
        "Utah Tech football announces the addition of six transfer portal players as camp begins",
      author: "Email",
      published_date: "2023-08-02 02:20:37",
      published_date_precision: "full",
      link: "https://www.stgeorgeutah.com/news/archive/2023/08/01/ggg-spo-utah-tech-football-announces-the-addition-of-six-transfer-portal-players-as-camp-begins/",
      clean_url: "stgeorgeutah.com",
      excerpt:
        "ST. GEORGE — The Utah Tech football team lost four top players from last year's squad to the transfer portal, then used the portal to try to reload. According to a press release, on the same day their…",
      summary:
        "Utah Tech football players, shown here in a file photo against Northern Iowa last year, return to the field in fall camp, St. George, Utah, Aug. 1, 2023 | Photo by Brooklyn Fehr, UT Athletics, St. George News \n \n \nST. GEORGE — \nThe Utah Tech football team lost four top players from last year's squad to the transfer portal, then used the portal to try to reload.\n\n\nFifth-year Utah Tech head football coach Paul Peterson addresses the troops at a practice in this file photo, St. George, Utah, Aug. 13, 2022 | Photo by E.",
      rights: "stgeorgeutah.com",
      rank: 21007,
      topic: "news",
      country: "US",
      language: "en",
      authors: "Email,Twitter",
      media:
        "https://www.stgeorgeutah.com/wp-content/uploads/2022/10/UTfootballmain.jpg",
      is_opinion: false,
      twitter_account: null,
      _score: 13.071456,
      _id: "89880eeb736dd14436a5169068632467",
    },
    {
      title: "AI News: Impact on Big Tech Earnings and Job Market",
      author: "businesstelegrh",
      published_date: "2023-07-29 11:02:30",
      published_date_precision: "full",
      link: "https://www.bloomberg.com/news/newsletters/2023-07-29/ai-news-impact-on-big-tech-earnings-and-job-market",
      clean_url: "bloomberg.com",
      excerpt:
        "Big tech earnings presented a mixed picture of AI this week as workers across industries felt the impacts of the technology. Artificial intelligence is influencing many industries, including digital…",
      summary:
        "Big tech earnings presented a mixed picture of AI this week as workers across industries felt the impacts of the technology.\n\n\nArtificial intelligence is influencing many industries, including \ndigital entertainment\n, \nmedicine\n and \nhealth care\n. But big tech earnings reports this week suggested that the technology isn't quite front and center when it comes down to revenue gains and stock reactions.",
      rights: "businesstelegraph.co.uk",
      rank: 92,
      topic: "news",
      country: "US",
      language: "en",
      authors: "businesstelegraph",
      media:
        "https://usercontent.one/wp/www.businesstelegraph.co.uk/wp-content/uploads/2023/07/AI-News-Impact-on-Big-Tech-Earnings-and-Job-Market.jpg?media=1683224819",
      is_opinion: false,
      twitter_account: null,
      _score: 13.068692,
      _id: "c1a71644407413c53babfd24109da05f",
    },
    {
      title: "Be strong in the fight against Big Tech, Canada",
      author: "Linda Solomon Wood",
      published_date: "2023-07-29 18:10:44",
      published_date_precision: "full",
      link: "https://www.nationalobserver.com/2023/07/29/opinion/be-strong-fight-against-big-tech-canada",
      clean_url: "nationalobserver.com",
      excerpt:
        "Big Tech is trying to crush Canada's efforts to sustain its news industry by making scary threats and attacking Canadians' right to freely access local news. But Canada must not back down.",
      summary:
        "On his popular podcast \nReal Talk\n, host Ryan Jespersen recently asked me if I thought the federal government should back down from its standoff with Google and Meta. \n'Absolutely not!' I said. 'Ottawa needs to double down.'\nBig Tech is trying to crush Canada's efforts to sustain its news industry by making scary threats and attacking Canadians' right to freely access local news.\nBut Canada must not back down.\nThe Online News Act, passed a few weeks ago, aims to divert $300 million per year from the approximately $10 billion in untaxed revenue Google and Meta make on ad sales in Canada.",
      rights: "nationalobserver.com",
      rank: 13502,
      topic: "news",
      country: "CA",
      language: "en",
      authors: "Linda Solomon Wood",
      media:
        "https://www.nationalobserver.com/sites/nationalobserver.com/files/styles/nat_social/public/img/2023/07/29/2023_2d_rosalind_linda_dsc0420_b_3.jpeg?itok=o2oYmo7r",
      is_opinion: true,
      twitter_account: "@NatObserver",
      _score: 13.054297,
      _id: "51a5c809d53d8f7bced797ef78d8d478",
    },
    {
      title: "Big Tech and the race to save journalism",
      author: "Silence Mugadzaweta",
      published_date: "2023-07-29 06:00:00",
      published_date_precision: "timezone unknown",
      link: "https://www.newsday.co.zw/opinion-analysis/article/200014611/big-tech-and-the-race-to-save-journalism",
      clean_url: "newsday.co.zw",
      excerpt: "Big Tech and the race to save journalism",
      summary:
        "Decisions by Facebook, Google and other Tech giants are now outpacing or motivating strategies for publishers. \n \nThe impact of Big Tech on media and journalism has been the biggest tornado to hit the industry, their omniscient forcing a rethink of business models for media houses across the globe.\n \nDecisions by Facebook, Google and other Tech giants are now outpacing or motivating strategies for publishers.\n \nThere is no consensus or assurance that publishers will work well with Big Techs.\n \nAt one point, news organisations were so bent on investing on social media, but with algorithmic opacity, it's tantamount to building your house on someone's land.",
      rights: "newsday.co.zw",
      rank: 27307,
      topic: "news",
      country: "ZW",
      language: "en",
      authors: "Silence Mugadzaweta",
      media:
        "https://cdn.thestandard.co.zw/images/newsday/uploads/2023/07/5n3wXHL5nCKMg6DaR3eNtfGJ50iUUMcz7fuN5ZQs.gif",
      is_opinion: true,
      twitter_account: "@NewsDayZimbabwe",
      _score: 13.044155,
      _id: "1f9473f9ecd64bf44b01e42da445a0fc",
    },
    {
      title:
        "Biden plans to sign order curbing US tech investments in China by mid-August -Bloomberg",
      author: "Reuters",
      published_date: "2023-07-28 16:54:31",
      published_date_precision: "full",
      link: "https://www.marketscreener.com/news/latest/Biden-plans-to-sign-order-curbing-US-tech-investments-in-China-by-mid-August-Bloomberg--44456505/?utm_medium=RSS&utm_content=20230728",
      clean_url: "marketscreener.com",
      excerpt:
        "U.S. President Joe Biden is planning to sign an executive order to limit critical U.S. technology investments in China by mid-August, Bloomberg news reported on Friday, citing people familiar with...\n - \n Today at 12:54 pm\n - MarketScreener",
      summary:
        "(marketscreener.com) U.S. President Joe Biden is planning to sign an executive order to limit critical U.S. technology investments in China by mid-August, Bloomberg news reported on Friday, citing people familiar with the internal deliberations.\nhttps://www.marketscreener.com/news/latest/Biden-plans-to-sign-order-curbing-US-tech-investments-in-China-by-mid-August-Bloomberg--44456505/?utm_medium=RSS&utm_content=20230728",
      rights: "Copyright 2001 - 2023 Surperformance",
      rank: 3681,
      topic: "finance",
      country: "US",
      language: "en",
      authors: "MarketScreener,Reuters",
      media:
        "https://img.zonebourse.com/reuters/2023-07/2023-07-28T090252Z_1_LYNXMPEJ6R0BH_RTROPTP_3_USA-BIDEN.JPG",
      is_opinion: false,
      twitter_account: null,
      _score: 13.039199,
      _id: "884c805a6edabeb1272e7a2be822be06",
    },
    {
      title:
        "Tech Mahindra Stocks Live Updates: Tech Mahindra Sees 1.44% Decline in Stock Price, SMA3 at Rs 1128.68",
      author: "Economic Times",
      published_date: "2023-08-02 03:01:00",
      published_date_precision: "full",
      link: "https://economictimes.indiatimes.com/markets/stocks/stock-liveblog/tech-mahindra-stocks-live-updates-02-aug-2023/liveblog/102333666.cms",
      clean_url: "indiatimes.com",
      excerpt:
        "Stay informed with the Tech Mahindra Stock Liveblog, your comprehensive resource for real-time updates and in-depth analysis of a leading stock. Get the latest details on Tech Mahindra, including:…",
      summary:
        "Stay informed with the Tech Mahindra Stock Liveblog, your comprehensive resource for real-time updates and in-depth analysis of a leading stock. Get the latest details on Tech Mahindra, including: Last traded price 1130.25, Market capitalization: 109902.24, Volume: 798947, Price-to-earnings ratio 25.01, Earnings per share 45.06. Our liveblog combines fundamental and technical insights to provide a holistic view of Tech Mahindra's performance. Stay ahead of the market with breaking news that can influence Tech Mahindra's trajectory.",
      rights: "indiatimes.com",
      rank: 296,
      topic: "economics",
      country: "IN",
      language: "en",
      authors: "Economic Times",
      media:
        "https://img.etimg.com/thumb/msid-102333666,width-600,resizemode-4,imglength-7650/markets/stocks/stock-liveblog/tech-mahindra-stocks-live-updates-02-aug-2023.jpg",
      is_opinion: false,
      twitter_account: "@EconomicTimes",
      _score: 13.0271015,
      _id: "584a85a58bec11e13f7eab5a4048e3fb",
    },
    {
      title: "Latest News in Nigeria on 29.07.2023 — page 4",
      author: "",
      published_date: "2023-07-29 09:18:14",
      published_date_precision: "full",
      link: "https://www.legit.ng/latest/?utm_source=sendios&utm_medium=email&mail_id=20263625976&utm_campaign=5&page=4",
      clean_url: "legit.ng",
      excerpt:
        "LATEST and most recent NEWS headlines and live updates from Nigeria and around the world on Legit.ng. — page 4",
      summary:
        '"Your mother is proud": Tech lady working with Google takes her mum to office, video goes viral on TikTok\n\nA tech lady who works with Good proudly took her mother to work when they were asked to do so by the tech giant. Her mother was proud to have followed her.',
      rights: "legit.ng",
      rank: 9619,
      topic: "news",
      country: "NG",
      language: "en",
      authors: "",
      media: "https://static-legit.akamaized.net/legit/img/logo_fb.png",
      is_opinion: false,
      twitter_account: "@legitngnews",
      _score: 13.026919,
      _id: "1bcf058c187bea3882855bfbc600719d",
    },
    {
      title:
        "FTC Chair Lina Khan cracks down on Big Tech, prepares for possible threats from AI",
      author: "CBS News",
      published_date: "2023-07-27 11:30:41",
      published_date_precision: "full",
      link: "https://www.cbsnews.com/video/ftc-chair-lina-khan-cracks-down-on-big-tech-prepares-for-possible-threats-from-ai",
      clean_url: "cbsnews.com",
      excerpt:
        'First on "CBS Mornings," FTC Chair Lina Khan speaks with CBS News senior national correspondent John Dickerson about her push to keep Big Tech from getting too big and crack down on non-compete clauses. Plus, she addresses possible emerging threats from artificial intelligence.',
      summary:
        'FTC Chair Lina Khan cracks down on Big Tech, prepares for possible threats from AI First on "CBS Mornings," FTC Chair Lina Khan speaks with CBS News senior national correspondent John Dickerson about her push to keep Big Tech from getting too big and crack down on non-compete clauses. Plus, she addresses possible emerging threats from artificial intelligence.',
      rights: "cbsnews.com",
      rank: 204,
      topic: "news",
      country: "US",
      language: "en",
      authors: "CBS News",
      media:
        "https://assets3.cbsnewsstatic.com/hub/i/r/2023/07/27/8df13c4d-d64a-42b1-a649-c54c99367b73/thumbnail/1200x630/de3b6f4f5404d38cdf7bb8267c850e2d/0727-cmo-ftcchair-dickerson-mid-2159624-640x360.jpg?v=86db2ab42e1f4996c0f037a20ce5a325",
      is_opinion: false,
      twitter_account: "@CBSMornings",
      _score: 13.017582,
      _id: "1b8ecdf3e569d62ef844003ee95969db",
    },
    {
      title:
        "Elizabeth Warren and Lindsey Graham want a new agency to regulate tech",
      author: "Newsource",
      published_date: "2023-07-27 10:43:06",
      published_date_precision: "full",
      link: "https://keyt.com/news/2023/07/27/elizabeth-warren-and-lindsey-graham-want-a-new-agency-to-regulate-tech",
      clean_url: "keyt.com",
      excerpt:
        "By Brian Fung, CNN Washington (CNN) — Two US senators are calling for the creation of a new federal agency to regulate tech companies such as",
      summary:
        "By Brian Fung, CNN Washington (CNN) — Two US senators are calling for the creation of a new federal agency to regulate tech companies such as Amazon, Google and Meta, in the latest push by members of Congress to clamp down on Big Tech. Under the proposal released Thursday by Sen. Elizabeth Warren, a Massachusetts\n\n\nThe post \nElizabeth Warren and Lindsey Graham want a new agency to regulate tech\n appeared first on \nNews Channel 3-12\n.",
      rights: "keyt.com",
      rank: 14380,
      topic: "news",
      country: "US",
      language: "en",
      authors: "Cnn Newsource",
      media:
        "https://keyt.b-cdn.net/2023/07/N0mDH5cm-cnn-L19jb21wb25lbnRzL2ltYWdlL2luc3RhbmNlcy9jbG9uZS10aHVtYm5haWwtNjc4ZGIzYWI0ZTU0NjIyZWQ5MWMxNzVkZGM5ZjdlYmU-L19wYWdlcy9oX2E0MmU5YmMwNjBiYzZlMmY3OTJlMjY1ZGU0NTlhMzdm-860x573.jpg",
      is_opinion: false,
      twitter_account: "@newschannel312",
      _score: 12.988422,
      _id: "f3dc2f1a60698702b6257236ce9bf562",
    },
    {
      title: "Arizona man who extorted Georgia Tech gets prison time",
      author: "Associated Press",
      published_date: "2023-07-28 21:30:08",
      published_date_precision: "full",
      link: "https://www.abc15.com/media/v/content/7a9efb1563bc26d637cf30adaf25e517",
      clean_url: "abc15.com",
      excerpt:
        "Federal prosecutors say an Arizona man accused of trying to extort Georgia Tech by falsely accusing its men's basketball coach of sexual assault has been sentenced to nearly three years in prison",
      summary:
        "An Arizona man accused of trying to extort Georgia Tech by falsely accusing its men's basketball coach of sexual assault has been sentenced to nearly three years in prison, federal prosecutors said.\nRonald Bell, 57, of Oro Valley, Arizona, was sentenced Thursday to two years, nine months in prison to be followed by three years of supervised release, U.S. Attorney Ryan K. Buchanan said in a news release. Bell pleaded guilty in March to conspiring with his co-defendant, Jennifer Pendley, and a security guard at Georgia Tech, to the extortion scheme.",
      rights: "abc15.com",
      rank: 4629,
      topic: "sport",
      country: "US",
      language: "en",
      authors: "Associated Press",
      media:
        "https://ewscripps.brightspotcdn.com/dims4/default/050f875/2147483647/strip/true/crop/640x336+0+72/resize/1200x630!/quality/90/?url=https%3A%2F%2Fmediaassets.wcpo.com%2Fphoto%2F2015%2F02%2F18%2FWCPO_jail_1424286803476_13434168_ver1.0_640_480.jpg",
      is_opinion: false,
      twitter_account: "@abc15",
      _score: 12.982383,
      _id: "35080d4fff03724d631849fc7b9c8831",
    },
    {
      title:
        "EDUCATION SPOTLIGHT: Florida Tech Professor Debbie Carstens Earns FAA Faculty/Researcher Excellence Award",
      author: "Adam Lowenstein",
      published_date: "2023-08-02 04:03:03",
      published_date_precision: "full",
      link: "https://spacecoastdaily.com/2023/08/education-spotlight-florida-tech-professor-debbie-carstens-earns-faa-faculty-researcher-excellence-award/",
      clean_url: "spacecoastdaily.com",
      excerpt:
        "Debbie Carstens, graduate program chair and professor of aviation human factors at the College of Aeronautics, was awarded the 2023 Jimenez Faculty/Research Award from the Partnership to Enhance…",
      summary:
        "By \nAdam Lowenstein, Florida Tech News Bureau\n  //  August 2, 2023 \n \n \nDebbie Carstens, graduate program chair and professor of aviation human factors at the College of Aeronautics, was awarded the 2023 Jimenez Faculty/Research Award from the Partnership to Enhance General Aviation Safety, Accessibility and Sustainability, a Federal Aviation Administration Center of Excellence for General Aviation. (Florida Tech image)\n\n\nBREVARD COUNTY • MELBOURNE, FLORIDA – Debbie Carstens, graduate program chair and professor of aviation human factors at the College of Aeronautics, was awarded the 2023 Jimenez Faculty/Research Award from the Partnership to Enhance General Aviation Safety, Accessibility and Sustainability, a Federal Aviation Administration Center of Excellence for General Aviation.",
      rights: "spacecoastdaily.com",
      rank: 8835,
      topic: "science",
      country: "US",
      language: "en",
      authors: "Adam Lowenstein,Florida Tech News Bureau,Space Coast Daily",
      media:
        "https://spacecoastdaily.com/wp-content/uploads/2023/08/Florida-Tech-Professor-Debbie-Carstens-600.jpg",
      is_opinion: false,
      twitter_account: null,
      _score: 12.982079,
      _id: "b5392e77be4ce65615749e3713537741",
    },
    {
      title: "Meta blocks news on Facebook and Instagram in Canada",
      author: "",
      published_date: "2023-08-02 12:01:22",
      published_date_precision: "full",
      link: "https://www.ghacks.net/2023/08/02/meta-blocks-news-in-canada",
      clean_url: "ghacks.net",
      excerpt:
        "The blocking of news content on Facebook and Instagram by Meta in response to Canada's Online News Act has sparked a significant battle.",
      summary:
        "Meta, the company that owns Facebook and Instagram, has taken a decisive step by blocking news content on its platforms for Canadian users. The move comes as a response to Canada's newly passed Online News Act, which aims to ensure fair revenue sharing between tech giants like Meta and Google and Canadian news outlets.\n\nADVERTISEMENT\n\nThis legislation, similar to those previously proposed in Australia and California, has been a matter of contention, leading to a clash between Big Tech and Canadian news organizations.",
      rights: "ghacks.net",
      rank: 5813,
      topic: "news",
      country: "DE",
      language: "en",
      authors: "",
      media:
        "https://www.ghacks.net/wp-content/uploads/2023/08/Meta-Blocks-News-in-Canada.jpg",
      is_opinion: false,
      twitter_account: null,
      _score: 12.9475155,
      _id: "7e27eff3c6c405e54059f3767eb81b69",
    },
    {
      title: "Tetra Tech, Inc. : News et Informations Boursières",
      author: "",
      published_date: "2023-07-28 08:00:00",
      published_date_precision: "timezone unknown",
      link: "https://www.zonebourse.com/cours/action/TETRA-TECH-INC-11172/actualite/",
      clean_url: "zonebourse.com",
      excerpt:
        "Tetra Tech, Inc. : Actualités, news et informations Action Tetra Tech, Inc. | TTEK | US88162G1031 | Nasdaq",
      summary:
        "08:24\n08:16\n \n 27/07\n 27/07\n MT \n 12/07\n MT \n Hamak Gold lève 350 000 GBP pour des forages au Libéria \n 03/07\n AN \n Vente d'initié : Tetra Tech \n 14/06\n MT \n 13/06\n MT \n 13/06\n CI \n Vente d'initié : Tetra Tech \n 05/06\n MT \n 01/06\n CI \n TETRA TECH, INC. : Détachement de dividende \n 23/05\n FA \n 18/05\n MT \n Transcript : Tetra Tech, Inc., Q2 2023 Earnings Call, May 11, 2023 \n 11/05\n CI \n TETRA TECH, INC. : Baird maintient sa recommandation neutre \n 11/05\n ZM \n 10/05\n MT \n 10/05\n CI \n 10/05\n CI \n Tetra Tech, Inc.",
      rights: "zonebourse.com",
      rank: 42648,
      topic: "news",
      country: "FR",
      language: "fr",
      authors: "",
      media: "https://www.zonebourse.com/images/twitter_ZB_fdnoir.png",
      is_opinion: false,
      twitter_account: "@zonebourse",
      _score: 12.941874,
      _id: "e3bc95775b864db55d39fe61e46173aa",
    },
    {
      title:
        "This week in food tech: New fund shows food investments are still simmering",
      author: "TechCrunch",
      published_date: "2023-07-30 10:35:39",
      published_date_precision: "full",
      link: "https://flipboard.com/@Techcrunch/this-week-in-food-tech-new-fund-shows-food-investments-are-still-simmering/a-_JjhTCrLR-O8m_qpK34-0A%3Aa%3A3199687-20456a5a1e%2Ftechcrunch.com",
      clean_url: "flipboard.com",
      excerpt:
        "TechCrunch - If you're adventurous with your food, or just like to keep up with the fast-moving food tech industry, here's a roundup of this week's stories and some notable news we weren't able to cover. Supply Change Capital The venture capital fund madness we've seen all year has made its way to the food …",
      summary:
        "This week in food tech: New fund shows food investments are still simmering\n\nIf you're adventurous with your food, or just like to keep up with the fast-moving food tech industry, here's a roundup of this week's stories and some notable news we weren't able to cover. Supply Change Capital The venture capital fund madness we've seen all year has made its way to the food …",
      rights: "flipboard.com",
      rank: 988,
      topic: "tech",
      country: "US",
      language: "en",
      authors: "Christine Hall,TechCrunch",
      media:
        "https://ic-cdn.flipboard.com/techcrunch.com/2b1d9e22ff82f09ffac3e195064e1c417a2ead16/_medium.jpeg",
      is_opinion: false,
      twitter_account: "@flipboard",
      _score: 12.927995,
      _id: "9761a21fa5220c40719d15a1252dd04f",
    },
    {
      title: "Arizona man who extorted Georgia Tech gets prison time",
      author: "The Arizona Republic",
      published_date: "2023-07-28 22:20:21",
      published_date_precision: "full",
      link: "https://www.azcentral.com/story/news/local/arizona/2023/07/28/arizona-man-who-extorted-georgia-tech-gets-prison-time/70489605007/",
      clean_url: "azcentral.com",
      excerpt:
        "Ronald Bell, 57, of Oro Valley was sentenced Thursday to two years, nine months in prison, U.S. Attorney Ryan K. Buchanan said in a news release.",
      summary:
        "ATLANTA — An Arizona man accused of trying to extort Georgia Tech by falsely accusing its men's basketball coach of sexual assault has been sentenced to nearly three years in prison, federal prosecutors said.\nRonald Bell, 57, of Oro Valley, Arizona, was sentenced Thursday to two years, nine months in prison to be followed by three years of supervised release, U.S. Attorney Ryan K. Buchanan said in a news release. Bell pleaded guilty in March to conspiring with his co-defendant, Jennifer Pendley, and a security guard at Georgia Tech, to the extortion scheme.",
      rights: "azcentral.com",
      rank: 1090,
      topic: "news",
      country: "US",
      language: "en",
      authors: "The Arizona Republic",
      media:
        "https://www.gannett-cdn.com/-mm-/a52d27d719acec0dc337e4dd747e16b12aa7f86e/c=0-277-5375-3314/local/-/media/2017/01/28/Phoenix/Phoenix/636212185743156629-tech.jpg?auto=webp&format=pjpg&width=1200",
      is_opinion: false,
      twitter_account: "@azcentral",
      _score: 12.917056,
      _id: "780ff69ea05ebcc32f2fd451177e0e0b",
    },
    {
      title:
        "Meta's Gauntlet: FB, Insta to start blocking news in Canada as they don't want to pay publishers",
      author: "Published On",
      published_date: "2023-08-02 07:43:09",
      published_date_precision: "full",
      link: "https://www.firstpost.com/tech/news-analysis/metas-gauntlet-fb-insta-to-start-blocking-news-in-canada-as-they-dont-want-to-pay-publishers-12948162.html",
      clean_url: "firstpost.com",
      excerpt:
        "Meta believes that there is economic value in news and is therefore going to block all news links from Facebook and Instagram in Canada. Canada is the latest country that is pushing social media…",
      summary:
        "Meta believes that there is economic value in news and is therefore going to block all news links from Facebook and Instagram in Canada. Canada is the latest country that is pushing social media platforms to pay news outlets for their content \n \n \n \nMeta, the parent company of Facebook and Instagram, has taken a significant step by starting the process of blocking access to news content on its platforms for all users in Canada. This decision is a response to the Online News Act passed by the Canadian parliament, which requires big tech firms like Meta and Google to negotiate commercial agreements with Canadian news publishers for using their content.",
      rights: "firstpost.com",
      rank: 2136,
      topic: "tech",
      country: "IN",
      language: "en",
      authors: "Mehul Reuben Das,Published On",
      media:
        "https://images.firstpost.com/wp-content/uploads/2023/08/Metas-Gauntlet_-FB-Insta-to-start-blocking-news-in-Canada-as-they-dont-want-to-pay-publishers.jpg",
      is_opinion: false,
      twitter_account: "@firstpost",
      _score: 12.904556,
      _id: "4159672ba0c78cbdf785a391cde43f89",
    },
  ];
  return (
    <div id="news" className="w-10/12 mx-auto">
      <h2 className="mb-12 pb-4 text-center text-3xl font-bold">Latest articles</h2>
      <ul>
        <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12 h-screen overflow-auto no-scrollbar">
          {articles.map((post) => (
            <li key={post._id}>
              <div className="mb-6 lg:mb-0">
                <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border">
                  <div className="flex">
                    <div
                      className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg "
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <img src={post.media} className="w-full border border-2" />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-3 text-sm font-bold">{post.title}</h5>
                    <p className="mb-4 text-neutral-500">
                      <small className="text-xs">
                        Published <u>{post.published_date}</u> by&nbsp;
                        <a href="#!">{post.author}</a>
                      </small>
                    </p>
                    <p className="mb-4 pb-2 text-xs">{post.excerpt}</p>
                    <div className="flex justify-between">
                      <a
                        href={post.link}
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="inline-block rounded-full bg-blue-400 bold text-white px-5 pt-2 pb-1 text-xs font-medium uppercase leading-normal "
                      >
                        Read more
                      </a>
                      <div className="flex items-center">
                        <img className="h-3 mx-1 w-auto" src="https://th.bing.com/th/id/OIP.YJI6uzDgHOrtLFKE0HiH4QHaFP?w=275&h=195&c=7&r=0&o=5&pid=1.7" />
                        <small>{post.rank}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
export default News;
