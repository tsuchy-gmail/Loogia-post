import React, { useState } from 'react';
import MaterialTable from 'material-table';
import { id, key, tamanoId, tamanoKey } from '../id';
import { Button, Select } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';


let reqBody = localStorage.requestBody ? JSON.parse(localStorage.requestBody) : {

  "name": "capacity",
  "depot": {
    "name": "新宿デポ",
    "geocode": {
      "lat": 35.699226,
      "lng": 139.704526
    }
  },
  "carriers": [{
    "id": "car1",
    "capacities": [{
      "dimId": "weight",
      "size": 1500
    }],
    "startTime": "20200825T230024+0900"
  },
  {
    "id": "car2",
    "capacities": [{
      "dimId": "weight",
      "size": 1500
    }],
    "startTime": "20200825T223024+0900"
  },
  ],

  "spots": [{
    "id": "spot1",
    "geocode": {
      "lat": 34.489914,
      "lng": 133.946455
    }
  },
  {
    "id": "spot2",
    "geocode": {
      "lat": 34.490863,
      "lng": 133.945888
    }
  },
  {
    "id": "spot3",
    "geocode": {
      "lat": 34.491376,
      "lng": 133.945924
    }
  },
  {
    "id": "spot4",
    "geocode": {
      "lat": 34.490800,
      "lng": 133.947012
    }
  },
  {
    "id": "spot5",
    "geocode": {
      "lat": 34.49173,
      "lng": 133.945973
    }
  },
  {
    "id": "spot6",
    "geocode": {
      "lat": 34.491471,
      "lng": 133.946215
    }
  },
  {
    "id": "spot7",
    "geocode": {
      "lat": 34.491541,
      "lng": 133.947345
    }
  },
  {
    "id": "spot8",
    "geocode": {
      "lat": 34.490971,
      "lng": 133.946297
    }
  },
  {
    "id": "spot9",
    "geocode": {
      "lat": 34.490987,
      "lng": 133.946823
    }
  },
  {
    "id": "spot10",
    "geocode": {
      "lat": 34.491018,
      "lng": 133.94733
    }
  },
  {
    "id": "spot11",
    "geocode": {
      "lat": 34.490705,
      "lng": 133.946296
    }
  },
  {
    "id": "spot12",
    "geocode": {
      "lat": 35.742561,
      "lng": 139.771542
    }
  },

  {
    "id": "spot13",
    "geocode": {
      "lat": 35.743085,
      "lng": 139.770638
    }
  },
  {
    "id": "spot14",
    "geocode": {
      "lat": 35.746122,
      "lng": 139.764129
    }
  },
  {
    "id": "spot15",
    "geocode": {
      "lat": 35.748242,
      "lng": 139.774493
    }
  },
  {
    "id": "spot16",
    "geocode": {
      "lat": 35.729463,
      "lng": 139.776254
    }
  },
  {
    "id": "spot17",
    "geocode": {
      "lat": 35.744822,
      "lng": 139.785222
    }
  },
  {
    "id": "spot18",
    "geocode": {
      "lat": 35.737288,
      "lng": 139.788998
    }
  },
  { id: 'spot19', geocode: { lat: 35.720053, lng: 139.757717 }, guidanceLocations: [{ uTurnCost: 10000, geocode: { lat: 35.720053, lng: 139.757717 } }] },
  { id: 'spot20', geocode: { lat: 35.703156, lng: 139.757165 }, guidanceLocations: [{ uTurnCost: 10000, geocode: { lat: 35.703156, lng: 139.757165 } }] },
  { id: 'spot21', geocode: { lat: 35.709515, lng: 139.753933 }, guidanceLocations: [{ uTurnCost: 10000, geocode: { lat: 35.709515, lng: 139.753933 } }] },
  { id: 'spot22', geocode: { lat: 35.697923, lng: 139.759701 }, guidanceLocations: [{ uTurnCost: 10000, geocode: { lat: 35.697923, lng: 139.759701 } }] },
  { id: 'spot23', geocode: { lat: 35.713842, lng: 139.745207 }, guidanceLocations: [{ uTurnCost: 10000, geocode: { lat: 35.713842, lng: 139.745207 } }] },
  { id: 'spot24', geocode: { lat: 35.707774, lng: 139.734657 }, guidanceLocations: [{ uTurnCost: 10000, geocode: { lat: 35.707774, lng: 139.734657 } }] },

  { id: 'spot25', geocode: { lat: 35.699226, lng: 139.704526 }, guidanceLocations: [{ uTurnCost: 10000, geocode: { lat: 35.699226, lng: 139.704526 } }] },
  { id: 'spot26', geocode: { lat: 35.692091, lng: 139.687652 }, guidanceLocations: [{ uTurnCost: 10000, geocode: { lat: 35.692091, lng: 139.687652 } }] },
  { id: 'spot27', geocode: { lat: 35.719807, lng: 139.678737 }, guidanceLocations: [{ uTurnCost: 10000, geocode: { lat: 35.719807, lng: 139.678737 } }] },
  { id: 'spot28', geocode: { lat: 35.709891, lng: 139.685017 }, guidanceLocations: [{ uTurnCost: 10000, geocode: { lat: 35.709891, lng: 139.705017 } }] },
  { id: 'spot29', geocode: { lat: 35.711501, lng: 139.712355 }, guidanceLocations: [{ uTurnCost: 10000, geocode: { lat: 35.711501, lng: 139.712355 } }] },
  { id: 'spot30', geocode: { lat: 35.704373, lng: 139.719232 }, guidanceLocations: [{ uTurnCost: 10000, geocode: { lat: 35.704373, lng: 139.719232 } }] },
  { id: 'spot31', geocode: { lat: 35.706463, lng: 139.738313 }, guidanceLocations: [{ uTurnCost: 10000, geocode: { lat: 35.706463, lng: 139.738313 } }] },
  { id: 'spot32', geocode: { lat: 35.695537, lng: 139.728739 }, guidanceLocations: [{ uTurnCost: 10000, geocode: { lat: 35.695537, lng: 139.728739 } }] },
  { id: 'spot33', geocode: { lat: 35.689603, lng: 139.711827 }, guidanceLocations: [{ uTurnCost: 10000, geocode: { lat: 35.689603, lng: 139.711827 } }] },


  ],
  "jobs": [{
    "id": "job1",
    "pickup": {
      "spotId": "spot27"
    },
    "delivery": {
      "spotId": "spot30"
    },
    "demands": [{
      "dimId": "weight",
      "size": 80
    }],
  },
  {
    "id": "job2",
    "delivery": {
      "spotId": "spot28"
    },
    "pickup": {
      "spotId": "spot32"
    },
    "demands": [{
      "dimId": "weight",
      "size": 70
    },]
  },
  {
    "id": "job3",
    "delivery": {
      "spotId": "spot29"
    },
    "pickup": {
      "spotId": "spot26"
    },
    "demands": [{
      "dimId": "weight",
      "size": 70
    },]
  },

  ],
  "option": {
    "restrictUturn": true,
    "balancing": {
      "type": "service", "intensity": 10
    }
  },
}
if (localStorage.requestBody===undefined){
  localStorage.requestBody=JSON.stringify(reqBody)
}

export function Name() {
  const item = localStorage.getItem('data')
  const [state, setState] = React.useState({
    columns: [
      { title: 'name', field: 'name' },
    ],
    data: localStorage.nameData ? JSON.parse(localStorage.nameData) : [
      { name: 'capacity' }
    ]
  });

  return (

    <MaterialTable
      title="Name"
      columns={state.columns}
      data={state.data}
      editable={{

        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  reqBody.name = newData.name
                  localStorage.requestBody=JSON.stringify(reqBody)
                  localStorage.nameData = JSON.stringify(data)
                  return { ...prevState, data };
                });

              }
            }, 0);

          }),

      }}
    />
  );
}

export function Depot() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'name', field: 'name' },
      { title: 'lat', field: 'geocode.lat' },
      { title: 'lng', field: 'geocode.lng' },

    ],
    data: localStorage.depotData ? JSON.parse(localStorage.depotData) : [
      {
        name: '新宿デポ', geocode: { lat: 35.742561, lng: 139.771542 }

      },

    ],
  });
  return (

    <MaterialTable
      title="Depot"
      columns={state.columns}
      data={state.data}
      editable={{

        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  localStorage.depotData = JSON.stringify(data)
                  return { ...prevState, data };
                });
              }
            }, 0);
            reqBody.depot.name = newData.name;
            reqBody.depot.geocode.lat = Number(newData.geocode.lat);
            reqBody.depot.geocode.lng = Number(newData.geocode.lng);

            localStorage.requestBody=JSON.stringify(reqBody)
            console.log('newData')
            console.log(newData)


            console.log('reqBody')
            console.log(reqBody)
          }),

      }}
    />
  );
}



export function Carriers() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'id', field: 'id' },
      { title: 'dimId-1', field: 'capacities.dimId' },
      { title: 'size-1', field: 'capacities.size' },
      { title: 'dimId-2', field: 'capacities_2.dimId' },
      { title: 'size-2', field: 'capacities_2.size' },
      { title: 'dimId-3', field: 'capacities_3.dimId' },
      { title: 'size-3', field: 'capacities_3.size' },


    ],
    data: localStorage.carriersData ? JSON.parse(localStorage.carriersData) : [
      {
        id: 'car1',
        capacities: {
          dimId: 'weight', size: 1500,
        },
        capacities_2: { dimId: '', size: '' },
        capacities_3: { dimId: '', size: '' },
      },
      {
        id: 'car2',
        capacities: {
          dimId: 'weight', size: 1500,
        },
        capacities_2: { dimId: '', size: '' },
        capacities_3: { dimId: '', size: '' },
      },

    ],
  });

  function pushToBody(newData) {
    const objCopy = Object.assign({}, newData)
    objCopy.startTime = "20200825T231524+0900"
    if(newData.capacities){
      objCopy.capacities.size = Number(objCopy.capacities.size)
    }
    const arr = [objCopy.capacities]
    objCopy.capacities = arr
    if (newData.capacities_2 && newData.capacities) {
      const dimId = newData.capacities_2.dimId
      const size = Number(newData.capacities_2.size)
      objCopy.capacities.push({ dimId: dimId, size: size })
      delete objCopy.capacities_2
    }
    if (newData.capacities_3 && newData.capacities_2) {
      const dimId = newData.capacities_3.dimId
      const size = Number(newData.capacities_3.size)
      objCopy.capacities.push({ dimId: dimId, size: size })
      delete objCopy.capacities_3
    }


    reqBody.carriers.push(objCopy)

    
  }

  function ifDelete(newData) {
    if (newData.capacities_2) {
      if (newData.capacities_2.dimId === '' || newData.capacities_2.size === '') {
        delete newData.capacities_2
      }
    }
    if (newData.capacities_3) {
      if (newData.capacities_3.dimId === "" || newData.capacities_3.size === "") {
        delete newData.capacities_3
      }
    }

    console.log(newData)
  }
  return (
    <MaterialTable
      title="Carriers"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                localStorage.carriersData=JSON.stringify(data)
                pushToBody(newData)
                localStorage.requestBody=JSON.stringify(reqBody)
                



                return { ...prevState, data };
              });
            }, 0);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  ifDelete(newData)
                  if (newData.capacities) {

                    newData.capacities.size = Number(newData.capacities.size)
                  }
                  const data = [...prevState.data];
                  const indexNum = data.indexOf(oldData)
                  data[data.indexOf(oldData)] = newData;
                  localStorage.carriersData=JSON.stringify(data)
                  if (newData.id) {
                    reqBody.carriers[indexNum].id = newData.id
                  }
                  if (newData.capacities) {
                    reqBody.carriers[indexNum].capacities[0] = {dimId: newData.capacities.dimId, size: newData.capacities.size}
                  }
                  if (newData.capacities_2) {
                    reqBody.carriers[indexNum].capacities[1] = { dimId: newData.capacities_2.dimId, size: newData.capacities_2.size }
                  }
                  if (newData.capacities_3) {
                    reqBody.carriers[indexNum].capacities[2] = { dimId: newData.capacities_3.dimId, size: newData.capacities_3.size }
                  }
                  localStorage.requestBody=JSON.stringify(reqBody)
                  console.log('newData')
                  console.log(newData)
                  console.log(reqBody)
                  return { ...prevState, data };
                });
              }
            }, 0);
            console.log(state.data)

          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                localStorage.carriersData=JSON.stringify(data)
                reqBody.carriers.splice(data.indexOf(oldData), 1);
                localStorage.requestBody=JSON.stringify(reqBody)
                console.log(reqBody)

                return { ...prevState, data };
              });
            }, 0);
          }),
      }}
    />
  );
}





export function Spots() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'name', field: 'name' },
      { title: 'id', field: 'id' },
      { title: 'lat', field: 'geocode.lat' },
      { title: 'lng', field: 'geocode.lng' },

    ],
    data: localStorage.spotsData ? JSON.parse(localStorage.spotsData) : [
      { id: 'spot1', name: 'ププれひまわり', geocode: { lat: 34.489914, lng: 133.946455 } },
      { id: 'spot2', name: '郵便局-pickup', geocode: { lat: 34.490863, lng: 133.945888 } },
      { id: 'spot3', name: 'クリーニング', geocode: { lat: 34.491376, lng: 133.945924 } },
      { id: 'spot4', name: 'カフェ防風林', geocode: { lat: 34.490800, lng: 133.947012 } },
      { id: 'spot5', name: '市役所', geocode: { lat: 34.491730, lng: 133.945973 } },
      { id: 'spot6', name: '公園北西エリア', geocode: { lat: 34.491471, lng: 133.946215 } },
      { id: 'spot7', name: '公園北東エリア', geocode: { lat: 34.491541, lng: 133.947345 } },
      { id: 'spot8', name: '公園南西エリア', geocode: { lat: 34.490971, lng: 133.946297 } },
      { id: 'spot9', name: '公園南エリア', geocode: { lat: 34.490987, lng: 133.946823 } },
      { id: 'spot10', name: '公園南東エリア', geocode: { lat: 34.491018, lng: 133.94733 } },
      { id: 'spot11', name: '郵便局ーdelivery', geocode: { lat: 34.490705, lng: 133.946296 } },

      { id: 'spot12', name: '荒川デポ', geocode: { lat: 35.742561, lng: 139.771542 } },
      { id: 'spot13', name: 'ガーデニングフェンス売り', geocode: { lat: 35.743085, lng: 139.770638 } },
      { id: 'spot14', name: 'ガーデニングフェンス買い', geocode: { lat: 35.746122, lng: 139.764129 } },
      { id: 'spot15', name: 'テレビ台売り', geocode: { lat: 35.748242, lng: 139.774493 } },
      { id: 'spot16', name: 'テレビ台買い', geocode: { lat: 35.746122, lng: 139.764129 } },
      { id: 'spot17', name: 'たんす売り', geocode: { lat: 35.744822, lng: 139.785222 } },
      { id: 'spot18', name: 'たんす買い', geocode: { lat: 35.737288, lng: 139.788998 } },


      { id: 'spot50', name: '文京でぽ', geocode: { lat: 35.700930, lng: 139.757717 } },
      { id: 'spot19', name: '時計買い', geocode: { lat: 35.720053, lng: 139.757717 } },
      { id: 'spot20', name: '時計売り', geocode: { lat: 35.703156, lng: 139.757165 } },
      { id: 'spot21', name: 'ティッシュケース買い', geocode: { lat: 35.709515, lng: 139.753933 } },
      { id: 'spot22', name: 'ティッシュケース売り', geocode: { lat: 35.697923, lng: 139.759701 } },
      { id: 'spot23', name: '洗面用具買い', geocode: { lat: 35.713842, lng: 139.745207 } },
      { id: 'spot24', name: '洗面用具売り', geocode: { lat: 35.707774, lng: 139.734657 } },

      { id: 'spot25', name: '新宿デポ', geocode: { lat: 35.699226, lng: 139.704526 } },
      { id: 'spot26', name: '洋服具売り', geocode: { lat: 35.692091, lng: 139.687652 } },
      { id: 'spot27', name: '洋服売り', geocode: { lat: 35.702725, lng: 139.684519 } },
      { id: 'spot28', name: '売り', geocode: { lat: 35.709891, lng: 139.705017 } },
      { id: 'spot29', name: 'アイロン台売り', geocode: { lat: 35.711501, lng: 139.712355 } },
      { id: 'spot30', name: '売り', geocode: { lat: 35.704373, lng: 139.719232 } },
      { id: 'spot31', name: 'アイロン台売り', geocode: { lat: 35.706463, lng: 139.738313 } },
      { id: 'spot32', name: 'ペアカップ売り', geocode: { lat: 35.695537, lng: 139.728739 } },
      { id: 'spot33', name: 'ペアカップ売り', geocode: { lat: 35.689603, lng: 139.711827 } },

    ],
  });

  return (
    <MaterialTable
      title="Spots"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {

            newData.geocode.lat = Number(newData.geocode.lat)
            newData.geocode.lng = Number(newData.geocode.lng)

            setTimeout(() => {
              resolve();
              setState((prevState) => {

                const data = [...prevState.data];
                data.push(newData);
                localStorage.spotsData=JSON.stringify(data)
                delete newData.name
                reqBody.spots.push(newData)
                localStorage.requestBody=JSON.stringify(reqBody)
                console.log(reqBody)
                return { ...prevState, data };
              });
            }, 0);
            console.log('add')
          }),
        onRowUpdate: (newData, oldData) =>
          ////////SPOTS////
          new Promise((resolve) => {
            console.log('edit')
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {

                  newData.geocode.lat = Number(newData.geocode.lat)
                  newData.geocode.lng = Number(newData.geocode.lng)


                  const data = [...prevState.data];

                  reqBody.spots[data.indexOf(oldData)].id = newData.id
                  reqBody.spots[data.indexOf(oldData)].geocode.lat = newData.geocode.lat
                  reqBody.spots[data.indexOf(oldData)].geocode.lng = newData.geocode.lng
                  localStorage.requestBody=JSON.stringify(reqBody)
                  data[data.indexOf(oldData)] = newData;
                  localStorage.spotsData=JSON.stringify(data)
                  console.log(reqBody)
                  return { ...prevState, data };
                });
              }
            }, 0);


          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                localStorage.spotsData=JSON.stringify(data)
                reqBody.spots.splice(data.indexOf(oldData), 1);
                localStorage.requestBody=JSON.stringify(reqBody)
                return { ...prevState, data };
              });
            }, 0);

          }),
      }}
    />
  );
}


export function Jobs() {

  const [state, setState] = React.useState({
    columns: [
      { title: 'id', field: 'id' },
      { title: 'pickup', field: 'pickup.spotId' },
      { title: 'delivery', field: 'delivery.spotId' },
      { title: 'dimId-1', field: 'demands.dimId' },
      { title: 'size-1', field: 'demands.size' },
      { title: 'dimId-2', field: 'demands_2.dimId' },
      { title: 'size-2', field: 'demands_2.size' },
      { title: 'dimId-3', field: 'demands_3.dimId' },
      { title: 'size-3', field: 'demands_3.size' },
    ],
    data: localStorage.jobsData ? JSON.parse(localStorage.jobsData) : [
      {
        id: 'job1',
        pickup: { spotId: 'spot27' },
        delivery: { spotId: 'spot30' },
        demands: { dimId: 'weight', size: 80 },
        demands_2: { dimId: '', size: '' },
        demands_3: { dimId: '', size: '' },
      },
      {
        id: 'job2',
        pickup: { spotId: 'spot28' },
        delivery: { spotId: 'spot32' },
        demands: { dimId: 'weight', size: 70 },
        demands_2: { dimId: '', size: '' },
        demands_3: { dimId: '', size: '' },
      },
      {
        id: 'job3',
        pickup: { spotId: 'spot29' },
        delivery: { spotId: 'spot26' },
        demands: { dimId: 'weight', size: 70 },
        demands_2: { dimId: '', size: '' },
        demands_3: { dimId: '', size: '' },
      },
    ],
  });



  function pushToBody(newData) {
    const objCopy = Object.assign({}, newData)
    const arr = [objCopy.demands]
    objCopy.demands = arr
    if (newData.demands_2 && newData.demands) {
      const dimId = newData.demands_2.dimId
      const size = Number(newData.demands_2.size)
      objCopy.demands.push({ dimId: dimId, size: size })
      delete objCopy.demands_2
    }
    if (newData.demands_3 && newData.demands_2) {
      const dimId = newData.demands_3.dimId
      const size = Number(newData.demands_3.size)
      objCopy.demands.push({ dimId: dimId, size: size })
      delete objCopy.demands_3
    }

    console.log(objCopy)
    console.log(reqBody)
    reqBody.jobs.push(objCopy)
  }
  function ifDelete(newData) {
    if (newData.pickup) {
      if (newData.pickup.spotId === '') {
        delete newData.pickup
      }
    }
    if (newData.delivery) {
      if (newData.delivery.spotId === '') {
        delete newData.delivery
      }
    }
    if (newData.demands_2) {
      if (newData.demands_2.dimId === '' || newData.demands_2.size === '') {
        delete newData.demands_2
      }
    }
    if (newData.demands_3) {
      if (newData.demands_3.dimId === '' || newData.demands_3.size === '') {
        delete newData.demands_3
      }
    }


  }
  return (
    <MaterialTable

      title="Jobs"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                if (newData.demands) {

                  newData.demands.size = Number(newData.demands.size)
                }

                const data = [...prevState.data];
                data.push(newData);
                localStorage.jobsData=JSON.stringify(data)
                console.log(newData)

                pushToBody(newData)
                localStorage.requestBody=JSON.stringify(reqBody)
                return { ...prevState, data };
              });
            }, 0);


          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  ifDelete(newData)
                  if (newData.demands) {
                    newData.demands.size = Number(newData.demands.size)
                  }
                  const data = [...prevState.data];
                  const indexNum = data.indexOf(oldData)
                  data[data.indexOf(oldData)] = newData;
                  localStorage.jobsData=JSON.stringify(data)

                  if (newData.id) {
                    reqBody.jobs[indexNum].id = newData.id
                  }
                  if (newData.demands) {
                    reqBody.jobs[indexNum].demands[0] = { dimId: newData.demands.dimId, size: newData.demands.size }
                  }
                  if (newData.pickup) {
                    reqBody.jobs[indexNum].pickup = { spotId: newData.pickup.spotId }
                  }
                  if (newData.delivery) {
                    reqBody.jobs[indexNum].delivery = { spotId: newData.delivery.spotId }
                  }

                  if (newData.demands_2) {
                    reqBody.jobs[indexNum].demands[1] = { dimId: newData.demands_2.dimId, size: newData.demands_2.size }
                  }
                  if (newData.demands_3) {
                    reqBody.jobs[indexNum].demands[2] = { dimId: newData.demands_3.dimId, size: newData.demands_3.size }
                  }
                  localStorage.requestBody=JSON.stringify(reqBody)
                  console.log(reqBody)
                  return { ...prevState, data };
                });
              }
            }, 0);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                localStorage.jobsData=JSON.stringify(data)

                reqBody.jobs.splice(data.indexOf(oldData), 1);
                localStorage.requestBody=JSON.stringify(reqBody)
                return { ...prevState, data };
              });
            }, 0);
          }),
      }}
    />
  );
}

export function Purge(){
  return(
    <Button  color='secondary' onClick={()=>{
      const conf=window.confirm('本当に全て削除しますか？')
      if(conf){
        localStorage.clear()
      }
    }}>localStorageを全て削除</Button>
  )
}




//FETCH///////////////////////
export function Fetch() {

  function Post() {
    const MyJson = JSON.stringify(reqBody)
    fetch(`https://loogia.tech/api/v0/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Loogia-App-Id': id,
        'X-Loogia-API-Key': key

      },
      mode: 'cors',
      body: MyJson
    })
      .then(response => {
        console.log(reqBody)
        console.log(response.json())
        return response.json()
      })
      .catch(error => console.log(error.body))
  }
  return (
    <Button
      style={{ width: ' 100%' }}
      onClick={() => Post()}
      variant='contained'
      color='primary'
      endIcon={<Icon>send</Icon>}
      className='my-5 p-4 mx-auto'
    >
      POST
    </Button>

  )
}