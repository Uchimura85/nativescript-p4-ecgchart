import { View } from "ui/core/view";
import { Color } from "color";

export class EcgChart extends View {
    android: any;
    ios: any;

    /**
     * Gets/sets the drawing color of the pen.
     */
    penColor: any;
    /**
     * Gets/sets the drawing width of the pen.
     */
    penWidth: any;

    setGraphMode(_type: number): any;
    addEcgData(arr): void;
}
