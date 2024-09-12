import type { CreateStarMessage } from "@/shared/messages";

figma.showUI(__html__);

figma.ui.onmessage = (message: CreateStarMessage) => {
  if (message.type === "createStar") {
    const node = figma.createStar();

    node.strokes = [figma.util.solidPaint("black")];
    node.strokeWeight = 10;
    node.fills = [figma.util.solidPaint("gold")];

    node.resize(400, 400);

    figma.currentPage.appendChild(node);

    figma.closePlugin("Thanks for using this plugin");
  }
};
