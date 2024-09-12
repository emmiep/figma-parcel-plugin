import MyButton from "./components/MyButton";
import styles from "./App.module.css";
import type {
  CreateStarMessage,
  PluginMessageContainer,
} from "@/shared/messages";

export default function App() {
  function handleClickCreateStar() {
    parent.postMessage(
      {
        pluginMessage: { type: "createStar" },
      } satisfies PluginMessageContainer<CreateStarMessage>,
      "*",
    );
  }

  return (
    <main className={styles.app}>
      <h1>The plugin is working!</h1>
      <MyButton onClick={handleClickCreateStar}>Add star</MyButton>
    </main>
  );
}
