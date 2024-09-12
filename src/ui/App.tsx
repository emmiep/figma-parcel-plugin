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
    <>
      <h1>The plugin is working!</h1>
      <button onClick={handleClickCreateStar}>Add star</button>
    </>
  );
}
