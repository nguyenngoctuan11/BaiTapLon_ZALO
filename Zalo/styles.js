import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    padding: "20px",
    margin: "15px 0",
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    color: "#0068ff",
    fontSize: 80,
    fontWeight: "bold",
    textAlign: "Center",
  },
  section: {
    width: "80%",
    height: "50%",
  },
  button: {
    width: "100%",
    height: 60,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0091ff",
    marginBottom: 30,
  },
  text_login: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: 10,
    color: "#ffff",
  },
  text_register: {
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#ffff",
  },
  footer: {
    width: "50%",
    height: "10%",
  },
  link_forget: {
    marginTop: "-40%",
    fontSize: 20,
    fontWeight: "bold 20 ",
    textAlign: "center",
  },
});
export default styles;
