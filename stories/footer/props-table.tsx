import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "links",
                description: (
                    <>
                        Links to the top section of the <code>Footer</code>
                    </>
                ),
                propTypes: ["FooterLinkProps<T>[][]"],
            },
            {
                name: "children",
                description: (
                    <>
                        Custom content for the top section of the{" "}
                        <code>Footer</code>
                    </>
                ),
                propTypes: ["JEX.Element", "JSX.Element[]"],
            },
            {
                name: "showDownloadAddon",
                description:
                    "Indicating will show the download app buttons in the footer",
                propTypes: ["boolean"],
            },
            {
                name: "disclaimerLinks",
                description: "Attributes of the mandated disclaimer links",
                propTypes: ["DisclaimerLinks"],
            },
            {
                name: "copyrightInfo",
                description: (
                    <>
                        The copyright information text on the bottom of the{" "}
                        <code>Footer</code>. Note that specifying this will
                        render <code>lastUpdated</code> property irrelevant.
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "logoSrc",
                description: (
                    <>
                        The logo image source of the <code>Footer</code>
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "lastUpdated",
                description: (
                    <>
                        The last updated date that is displayed on the bottom of
                        the <code>Footer</code>. (Not relevant if{" "}
                        <code>copyrightInfo</code> is specified)
                    </>
                ),
                propTypes: ["Date"],
            },
            {
                name: "onFooterLinkClick",
                description: "Called when a footer link item is clicked",
                propTypes: ["(link: FooterLinkProps<T>) => void"],
            },
        ],
    },
    {
        name: "FooterLinkProps<T>",
        attributes: [
            {
                name: "",
                description: (
                    <>
                        This component also inherits props from&nbsp;
                        <a
                            href="/?path=/docs/general-text-introduction--introduction#component-api"
                            rel="noreferrer"
                            target="_blank"
                        >
                            TextLinkProps
                        </a>
                    </>
                ),
            },
            {
                name: "data-options",
                description: "Custom attributes to pass to the link object",
                propTypes: ["T"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the link",
                propTypes: ["string"],
            },
        ],
    },
    {
        name: "DisclaimerLinks",
        attributes: [
            {
                name: "privacy",
                description: (
                    <>
                        The privacy statement link attributes.
                        <br />
                        <strong>
                            Note: The link text cannot be customised and will be
                            fixed to <em>Privacy Statement</em>
                        </strong>
                    </>
                ),
                propTypes: (
                    <>
                        <a
                            href="/?path=/docs/general-text-introduction--introduction#component-api"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <code>TextLinkProps</code>
                        </a>
                    </>
                ),
                defaultValue: "Predefined values",
            },
            {
                name: "termsOfUse",
                description: (
                    <>
                        The terms of use link attributes.
                        <br />
                        <strong>
                            Note: The link text cannot be customised and will be
                            fixed to <em>Terms of Use</em>
                        </strong>
                    </>
                ),
                propTypes: (
                    <>
                        <a
                            href="/?path=/docs/general-text-introduction--introduction#component-api"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <code>TextLinkProps</code>
                        </a>
                    </>
                ),
                defaultValue: "Predefined values",
            },
            {
                name: "reportVulnerability",
                description: (
                    <>
                        The report vulnerability link attributes.
                        <br />
                        <strong>
                            Note: The link text cannot be customised and will be
                            fixed to <em>Report Vulnerability</em>
                        </strong>
                    </>
                ),
                propTypes: (
                    <>
                        <a
                            href="/?path=/docs/general-text-introduction--introduction#component-api"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <code>TextLinkProps</code>
                        </a>
                    </>
                ),
                defaultValue: "Predefined values",
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
