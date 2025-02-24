import { ColorSet } from "../color/types";
import { BaseColorSet } from "../spec/color-spec/base-color-set";
import { BookingSGColorSet } from "../spec/color-spec/bookingsg-color-set";
import { getCollection, getValue } from "./helper";
import {
    ColorCollectionsMap,
    ColorScheme,
    ThemeCollectionSpec,
    ThemeContextKeys,
    ThemeSpec,
} from "./types";

// =============================================================================
// THEME SPECIFICATION
// =============================================================================
const ColorSpec: ThemeCollectionSpec<ColorCollectionsMap, ColorScheme> = {
    collections: {
        base: BaseColorSet,
        bookingsg: BookingSGColorSet,
    },
    defaultValue: "base",
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
export const getThemeColors = (attributePath: string) => {
    return (props: any): string => {
        const theme = props.theme as ThemeSpec;
        const colorSet: ColorSet = getCollection(
            ColorSpec,
            theme[ThemeContextKeys.colorScheme]
        );

        return theme.options && theme.options.color
            ? (getValue(colorSet, attributePath, theme.options.color) as string)
            : (getValue(colorSet, attributePath) as string);
    };
};
