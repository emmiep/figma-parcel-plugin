export interface PluginMessageContainer<T = any> {
  pluginMessage: T;
  pluginId?: string;
}

export interface CreateStarMessage {
  type: "createStar";
}
