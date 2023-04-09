import { StyleSheet, Text, View, Image } from "react-native";
import Quantity from "./Quantity";
import UseQuantity from "../hooks/useQuantity";

export default function Article({ article, inCart }) {
  const { quantity, sQuantity, Loading } = UseQuantity(inCart, article);

  return (
    <View style={styles.container}>
      <View style={styles.container_img}>
        <Image
          style={styles.tinyLogo}
          source={{ uri: "http://0.0.0.0:7000" + article.picture }}
        />
      </View>
      <View style={styles.container_info}>
        <View style={styles.info}>
          <Text>Description : {article.description}</Text>
          <Text>Prix : {article.prix} €</Text>
          <Text>Type : {article.type}</Text>
        </View>
        <View style={styles.btn_info}>
          <Quantity
            Loading={Loading}
            quantity={quantity}
            onUpdate={(Nb) => {
              sQuantity(Nb);
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    marginBottom: 15,
    flexDirection: "row",

    borderWidth: 0.5,
    border: "1px solid black",
  },
  container_info: {
    width: "70%",
    justifyContent: "flex-end",
  },
  btn_info: {
    display: "flex",
    flexDirection: "row",

    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 10,
  },
  container_img: {
    width: "20%",
  },
  info: {
    flexDirection: "column",

    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  tinyLogo: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
});
