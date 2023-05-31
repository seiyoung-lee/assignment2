import React from 'react';
import Header from '../../components/Header';
import NavBar from "../../components/NavBar";
import InventoryForm from '../../components/InventoryForm';
import InventoryContainer from '../../components/InventoryContainer';

const HomePage = () => {
  return (
    <div>
      <Header title = "Home" />
      <NavBar />
      
      <InventoryForm />
      <InventoryContainer />
    </div>
  );
};

export default HomePage;