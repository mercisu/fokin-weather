import React from 'react';
import Loading from './Loading';
import * as Location from "expo-location";
import {Alert} from "react-native-web";


//React 컴포넌트 class를 정의하려면 React.Component를 상속받아야함
export default class extends React.Component {
  state = {
      isLoading:true
  };

  getLocation = async () => {
      try {
          await Location.requestPermissionsAsync();
          const {
              coords: {
                  latitude, longitude
              }
          } = await Location.getCurrentPositionAsync();
          this.setState({ isLoading:false });
          //기본적으로 setState 메소드는 해당 컴포넌트의 재렌더링(re-render)을 발생
      } catch (error) {
          Alert.alert("Cant't find you.", "So sad");
      }
  };


  //rendered 컴포넌트를 그림
 componentDidMount() {
    this.getLocation();
  }

  //creating
  //React.Component의 하위 class에서 반드시 정의해야 하는 메서드
  render() {
     const { isLoading } = this.state;
     return isLoading ? <Loading/> : null;
  }
}
