// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ibfR7vmr1rPFsEqk4Lonig
// Component: q-8sbgtQX1z0z
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { useScreenVariants as useScreenVariantscW6UBg7QZKq } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: cW6U_bg7q_zKq/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_dark_saa_s_landing_page.module.css"; // plasmic-import: ibfR7vmr1rPFsEqk4Lonig/projectcss
import sty from "./PlasmicDetailAbout.module.css"; // plasmic-import: q-8sbgtQX1z0z/css

import checklistpngZEWe94HfQxcm from "./images/checklistpng.png"; // plasmic-import: zEWe94HF-Qxcm/picture

export type PlasmicDetailAbout__VariantMembers = {};
export type PlasmicDetailAbout__VariantsArgs = {};
type VariantPropType = keyof PlasmicDetailAbout__VariantsArgs;
export const PlasmicDetailAbout__VariantProps = new Array<VariantPropType>();

export type PlasmicDetailAbout__ArgsType = {};
type ArgPropType = keyof PlasmicDetailAbout__ArgsType;
export const PlasmicDetailAbout__ArgProps = new Array<ArgPropType>();

export type PlasmicDetailAbout__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  h5?: p.Flex<"h5">;
  text?: p.Flex<"div">;
};

export interface DefaultDetailAboutProps {
  className?: string;
}

function PlasmicDetailAbout__RenderFunc(props: {
  variants: PlasmicDetailAbout__VariantsArgs;
  args: PlasmicDetailAbout__ArgsType;
  overrides: PlasmicDetailAbout__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantscW6UBg7QZKq()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div className={classNames(projectcss.all, sty.column__y8Nll)}>
            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"24px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"24px" as const}
              loading={"lazy" as const}
              src={{
                src: checklistpngZEWe94HfQxcm,
                fullWidth: 48,
                fullHeight: 48,
                aspectRatio: undefined
              }}
            />
          </div>

          <div className={classNames(projectcss.all, sty.column__h2Skr)}>
            <h5
              data-plasmic-name={"h5"}
              data-plasmic-override={overrides.h5}
              className={classNames(
                projectcss.all,
                projectcss.h5,
                projectcss.__wab_text,
                sty.h5
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly")
                ? "Lorem ipsum sit amet"
                : "Lorem ipsum sit amet"}
            </h5>

            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "columns", "img", "h5", "text"],
  freeBox: ["freeBox", "columns", "img", "h5", "text"],
  columns: ["columns", "img", "h5", "text"],
  img: ["img"],
  h5: ["h5"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  columns: "div";
  img: typeof p.PlasmicImg;
  h5: "h5";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDetailAbout__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDetailAbout__VariantsArgs;
    args?: PlasmicDetailAbout__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDetailAbout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDetailAbout__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicDetailAbout__ArgProps,
          internalVariantPropNames: PlasmicDetailAbout__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicDetailAbout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDetailAbout";
  } else {
    func.displayName = `PlasmicDetailAbout.${nodeName}`;
  }
  return func;
}

export const PlasmicDetailAbout = Object.assign(
  // Top-level PlasmicDetailAbout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    columns: makeNodeComponent("columns"),
    img: makeNodeComponent("img"),
    h5: makeNodeComponent("h5"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicDetailAbout
    internalVariantProps: PlasmicDetailAbout__VariantProps,
    internalArgProps: PlasmicDetailAbout__ArgProps
  }
);

export default PlasmicDetailAbout;
/* prettier-ignore-end */
