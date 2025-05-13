import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';

import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationList from './src/components/QuotationList';

function url(qtdDias) {
  return `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${qtdDias}`;
}

async function getListCoin(url) {
  let response = await fetch(url);
  let returnApi = await response.json();

  const queryCoinsList = returnApi.prices.map((item) => {
    const date = new Date(item[0]);
    return {
      data: `${date.getDate().toString().padStart(2, '0')}/${
        (date.getMonth() + 1).toString().padStart(2, '0')
      }/${date.getFullYear()}`,
      value: item[1],
    };
  });

  const data = queryCoinsList.reverse();
  
  return data;
}

async function getPriceCoinsGraphic(url) {
  let response = await fetch(url);
  let returnApi = await response.json();

  const pricesOnly = returnApi.prices.map((item) => item[1]);
  return pricesOnly;
}

export default function App() {
  const [coinsList, setCoinsList] = useState([]);
  const [coinsListGraphic, setCoinsListGraphic] = useState([0]);
  const [days, setDays] = useState(30);
  const [updateData, setUpdateData] = useState(true);
  const [price, setPrice] = useState();

  function updateDays(number) {
    setDays(number);
    setUpdateData(true);
  }

  function priceCotation() {
    if (coinsListGraphic.length > 0) {
      const lastPrice = coinsListGraphic[coinsListGraphic.length - 1];
      setPrice(lastPrice);
    }
  }

  useEffect(() => {
    if (!updateData) return;

    const fetchData = async () => {
      try {
        const urlApi = url(days);
        const listData = await getListCoin(urlApi);
        const graphicData = await getPriceCoinsGraphic(urlApi);

        setCoinsList(listData);
        setCoinsListGraphic(graphicData);   
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setUpdateData(false);
      }
    };

    fetchData();
  }, [updateData, days]);

  useEffect(() => {
    if (coinsListGraphic.length > 0) {
      const lastPrice = coinsListGraphic[coinsListGraphic.length - 1];
      setPrice(lastPrice);
    }
  }, [coinsListGraphic]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#f50b41" barStyle="dark-content" />
      <CurrentPrice lastCotation={price} />
      <HistoryGraphic infoDataGraphic={coinsListGraphic}/>
      <QuotationList filterDay={updateDays} listTransactions={coinsList}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
});
