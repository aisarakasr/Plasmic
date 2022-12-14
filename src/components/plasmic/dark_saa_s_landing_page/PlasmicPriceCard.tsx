// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ibfR7vmr1rPFsEqk4Lonig
// Component: EYvkRkRe4i_Ck
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
import Button from "../../Button"; // plasmic-import: rAcYS8s5mLjUI/component

import { useScreenVariants as useScreenVariantscW6UBg7QZKq } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: cW6U_bg7q_zKq/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_dark_saa_s_landing_page.module.css"; // plasmic-import: ibfR7vmr1rPFsEqk4Lonig/projectcss
import sty from "./PlasmicPriceCard.module.css"; // plasmic-import: EYvkRkRe4i_Ck/css

import linePricingpngNKgbgA53NxXav from "./images/linePricingpng.png"; // plasmic-import: NKgbgA53NXXav/picture
import checklistpngZEWe94HfQxcm from "./images/checklistpng.png"; // plasmic-import: zEWe94HF-Qxcm/picture
import checklistPricingWhitepngEtkNkHxEiZaP1 from "./images/checklistPricingWhitepng.png"; // plasmic-import: ETKNkHxEiZaP1/picture

export type PlasmicPriceCard__VariantMembers = {
  primary: "primary";
  borders: "flatLeft" | "flatRight" | "flatCenter";
};
export type PlasmicPriceCard__VariantsArgs = {
  primary?: SingleBooleanChoiceArg<"primary">;
  borders?: MultiChoiceArg<"flatLeft" | "flatRight" | "flatCenter">;
};
type VariantPropType = keyof PlasmicPriceCard__VariantsArgs;
export const PlasmicPriceCard__VariantProps = new Array<VariantPropType>(
  "primary",
  "borders"
);

export type PlasmicPriceCard__ArgsType = {};
type ArgPropType = keyof PlasmicPriceCard__ArgsType;
export const PlasmicPriceCard__ArgProps = new Array<ArgPropType>();

export type PlasmicPriceCard__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  h4?: p.Flex<"h4">;
  button?: p.Flex<typeof Button>;
};

export interface DefaultPriceCardProps {
  primary?: SingleBooleanChoiceArg<"primary">;
  borders?: MultiChoiceArg<"flatLeft" | "flatRight" | "flatCenter">;
  className?: string;
}

function PlasmicPriceCard__RenderFunc(props: {
  variants: PlasmicPriceCard__VariantsArgs;
  args: PlasmicPriceCard__ArgsType;
  overrides: PlasmicPriceCard__OverridesType;

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

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "primary",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.primary
      },
      {
        path: "borders",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.borders
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, $props, $ctx);

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
        sty.root,
        {
          [sty.rootborders_flatCenter]: hasVariant(
            $state,
            "borders",
            "flatCenter"
          ),
          [sty.rootborders_flatLeft]: hasVariant($state, "borders", "flatLeft"),
          [sty.rootborders_flatRight]: hasVariant(
            $state,
            "borders",
            "flatRight"
          ),
          [sty.rootprimary]: hasVariant($state, "primary", "primary")
        }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxborders_flatCenter]: hasVariant(
            $state,
            "borders",
            "flatCenter"
          ),
          [sty.freeBoxborders_flatLeft]: hasVariant(
            $state,
            "borders",
            "flatLeft"
          ),
          [sty.freeBoxborders_flatRight]: hasVariant(
            $state,
            "borders",
            "flatRight"
          ),
          [sty.freeBoxprimary]: hasVariant($state, "primary", "primary")
        })}
      >
        <h4
          data-plasmic-name={"h4"}
          data-plasmic-override={overrides.h4}
          className={classNames(
            projectcss.all,
            projectcss.h4,
            projectcss.__wab_text,
            sty.h4,
            {
              [sty.h4borders_flatCenter]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.h4borders_flatLeft]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.h4borders_flatRight]: hasVariant(
                $state,
                "borders",
                "flatRight"
              )
            }
          )}
        >
          {hasVariant($state, "borders", "flatRight")
            ? "Enterprise"
            : hasVariant($state, "borders", "flatLeft")
            ? "Free"
            : "Pro"}
        </h4>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__aStBp,
            {
              [sty.textborders_flatCenter__aStBPehDtS]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.textborders_flatLeft__aStBpWfpgE]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.textborders_flatRight__aStBPkEdi]: hasVariant(
                $state,
                "borders",
                "flatRight"
              ),
              [sty.textprimary__aStBp4CtZl]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            }
          )}
        >
          {hasVariant($state, "borders", "flatRight")
            ? "Flexible power and security"
            : hasVariant($state, "borders", "flatLeft")
            ? "A complete analytics platform."
            : "A complete analytics platform."}
        </div>

        <p.PlasmicImg
          alt={""}
          className={classNames(sty.img__bCpL)}
          displayHeight={"auto" as const}
          displayMaxHeight={"none" as const}
          displayMaxWidth={"100%" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"auto" as const}
          loading={"lazy" as const}
          src={{
            src: linePricingpngNKgbgA53NxXav,
            fullWidth: 300,
            fullHeight: 2,
            aspectRatio: undefined
          }}
        />

        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
          <div
            className={classNames(projectcss.all, sty.columns__xo8OT, {
              [sty.columnsprimary__xo8OT4CtZl]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__e5Kqh)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__vLkFd, {
                  [sty.imgborders_flatLeft__vLkFdWfpgE]: hasVariant(
                    $state,
                    "borders",
                    "flatLeft"
                  )
                })}
                displayHeight={"24px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"24px" as const}
                loading={"lazy" as const}
                src={
                  hasVariant($state, "borders", "flatLeft")
                    ? {
                        src: checklistPricingWhitepngEtkNkHxEiZaP1,
                        fullWidth: 38,
                        fullHeight: 39,
                        aspectRatio: undefined
                      }
                    : {
                        src: checklistpngZEWe94HfQxcm,
                        fullWidth: 48,
                        fullHeight: 48,
                        aspectRatio: undefined
                      }
                }
              />
            </div>

            <div
              className={classNames(projectcss.all, sty.column__gVkPo, {
                [sty.columnborders_flatRight__gVkPOkEdi]: hasVariant(
                  $state,
                  "borders",
                  "flatRight"
                )
              })}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___7SY8,
                  {
                    [sty.textborders_flatLeft___7SY8WfpgE]: hasVariant(
                      $state,
                      "borders",
                      "flatLeft"
                    ),
                    [sty.textborders_flatRight___7SY8KEdi]: hasVariant(
                      $state,
                      "borders",
                      "flatRight"
                    ),
                    [sty.textprimary___7SY84CtZl]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {hasVariant($state, "borders", "flatRight")
                  ? "Everything in pro"
                  : hasVariant($state, "borders", "flatLeft")
                  ? "1 Product"
                  : "Up to 10 projects"}
              </div>
            </div>
          </div>
        ) : null}
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : true
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__dDqWn, {
              [sty.columnsborders_flatCenter__dDqWnehDtS]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsborders_flatLeft__dDqWnWfpgE]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.columnsborders_flatRight__dDqWnkEdi]: hasVariant(
                $state,
                "borders",
                "flatRight"
              ),
              [sty.columnsprimary__dDqWn4CtZl]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__xbKk)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img___8HIHp, {
                  [sty.imgborders_flatLeft___8HIHpWfpgE]: hasVariant(
                    $state,
                    "borders",
                    "flatLeft"
                  )
                })}
                displayHeight={"24px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"24px" as const}
                loading={"lazy" as const}
                src={
                  hasVariant($state, "borders", "flatLeft")
                    ? {
                        src: checklistPricingWhitepngEtkNkHxEiZaP1,
                        fullWidth: 38,
                        fullHeight: 39,
                        aspectRatio: undefined
                      }
                    : {
                        src: checklistpngZEWe94HfQxcm,
                        fullWidth: 48,
                        fullHeight: 48,
                        aspectRatio: undefined
                      }
                }
              />
            </div>

            <div className={classNames(projectcss.all, sty.column___23RxR)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wNfpm,
                  {
                    [sty.textborders_flatCenter__wNfpmehDtS]: hasVariant(
                      $state,
                      "borders",
                      "flatCenter"
                    ),
                    [sty.textborders_flatLeft__wNfpmWfpgE]: hasVariant(
                      $state,
                      "borders",
                      "flatLeft"
                    ),
                    [sty.textborders_flatRight__wNfpmkEdi]: hasVariant(
                      $state,
                      "borders",
                      "flatRight"
                    ),
                    [sty.textprimary__wNfpm4CtZl]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {hasVariant($state, "borders", "flatRight")
                  ? "Volume discount"
                  : hasVariant($state, "borders", "flatLeft")
                  ? "Analytics board"
                  : hasVariant($state, "primary", "primary")
                  ? "Analytics board"
                  : "Up to 10 projects"}
              </div>
            </div>
          </div>
        ) : null}
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "borders", "flatLeft")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : hasVariant(globalVariants, "screen", "mobileOnly")
            ? true
            : true
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__j7K6I, {
              [sty.columnsborders_flatCenter__j7K6IehDtS]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsborders_flatLeft__j7K6IWfpgE]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.columnsprimary__j7K6I4CtZl]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__b80H2)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__hXuaw, {
                  [sty.imgborders_flatLeft__hXuawWfpgE]: hasVariant(
                    $state,
                    "borders",
                    "flatLeft"
                  )
                })}
                displayHeight={"24px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"24px" as const}
                loading={"lazy" as const}
                src={
                  hasVariant($state, "borders", "flatLeft")
                    ? {
                        src: checklistPricingWhitepngEtkNkHxEiZaP1,
                        fullWidth: 38,
                        fullHeight: 39,
                        aspectRatio: undefined
                      }
                    : {
                        src: checklistpngZEWe94HfQxcm,
                        fullWidth: 48,
                        fullHeight: 48,
                        aspectRatio: undefined
                      }
                }
              />
            </div>

            <div
              className={classNames(projectcss.all, sty.column__wdvra, {
                [sty.columnborders_flatLeft__wdvraWfpgE]: hasVariant(
                  $state,
                  "borders",
                  "flatLeft"
                ),
                [sty.columnborders_flatRight__wdvrakEdi]: hasVariant(
                  $state,
                  "borders",
                  "flatRight"
                ),
                [sty.columnprimary__wdvra4CtZl]: hasVariant(
                  $state,
                  "primary",
                  "primary"
                )
              })}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qaRk7,
                  {
                    [sty.textborders_flatLeft__qaRk7WfpgE]: hasVariant(
                      $state,
                      "borders",
                      "flatLeft"
                    ),
                    [sty.textprimary__qaRk74CtZl]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {hasVariant($state, "borders", "flatLeft")
                  ? "Insights panel"
                  : hasVariant($state, "primary", "primary")
                  ? "Analytics board"
                  : "Up to 10 projects"}
              </div>
            </div>

            {(
              hasVariant($state, "borders", "flatRight")
                ? true
                : hasVariant($state, "borders", "flatLeft")
                ? true
                : hasVariant($state, "primary", "primary")
                ? true
                : hasVariant(globalVariants, "screen", "mobileOnly")
                ? true
                : true
            ) ? (
              <div
                className={classNames(projectcss.all, sty.column__cyS4P, {
                  [sty.columnborders_flatLeft__cyS4PWfpgE]: hasVariant(
                    $state,
                    "borders",
                    "flatLeft"
                  ),
                  [sty.columnborders_flatRight__cyS4PkEdi]: hasVariant(
                    $state,
                    "borders",
                    "flatRight"
                  ),
                  [sty.columnprimary__cyS4P4CtZl]: hasVariant(
                    $state,
                    "primary",
                    "primary"
                  )
                })}
              />
            ) : null}
          </div>
        ) : null}
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "borders", "flatLeft")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : hasVariant(globalVariants, "screen", "mobileOnly")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__aSnuT, {
              [sty.columnsborders_flatCenter__aSnuTehDtS]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsborders_flatLeft__aSnuTWfpgE]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.columnsprimary__aSnuT4CtZl]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__rWstw)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__rsG85, {
                  [sty.imgborders_flatLeft__rsG85WfpgE]: hasVariant(
                    $state,
                    "borders",
                    "flatLeft"
                  )
                })}
                displayHeight={"24px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"24px" as const}
                loading={"lazy" as const}
                src={
                  hasVariant($state, "borders", "flatLeft")
                    ? {
                        src: checklistPricingWhitepngEtkNkHxEiZaP1,
                        fullWidth: 38,
                        fullHeight: 39,
                        aspectRatio: undefined
                      }
                    : {
                        src: checklistpngZEWe94HfQxcm,
                        fullWidth: 48,
                        fullHeight: 48,
                        aspectRatio: undefined
                      }
                }
              />
            </div>

            <div className={classNames(projectcss.all, sty.column__dV9Qq)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__gmvTn,
                  {
                    [sty.textborders_flatLeft__gmvTnWfpgE]: hasVariant(
                      $state,
                      "borders",
                      "flatLeft"
                    ),
                    [sty.textprimary__gmvTn4CtZl]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {hasVariant($state, "borders", "flatLeft")
                  ? "CLI access"
                  : hasVariant($state, "primary", "primary")
                  ? "Analytics board"
                  : "Up to 10 projects"}
              </div>
            </div>
          </div>
        ) : null}
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__xOyVn, {
              [sty.columnsborders_flatCenter__xOyVnehDtS]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsprimary__xOyVn4CtZl]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__oxbTn)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__qvc11)}
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

            <div className={classNames(projectcss.all, sty.column__enu6G)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___4Iq2,
                  {
                    [sty.textborders_flatCenter___4Iq2EhDtS]: hasVariant(
                      $state,
                      "borders",
                      "flatCenter"
                    ),
                    [sty.textprimary___4Iq24CtZl]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {"Insights panel"}
              </div>
            </div>
          </div>
        ) : null}
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__xdx, {
              [sty.columnsborders_flatCenter__xdxehDtS]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsprimary__xdx4CtZl]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__i3OKc)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__u5Oy)}
                displayHeight={"24px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? ("16px" as const)
                    : ("24px" as const)
                }
                loading={"lazy" as const}
                src={{
                  src: checklistpngZEWe94HfQxcm,
                  fullWidth: 48,
                  fullHeight: 48,
                  aspectRatio: undefined
                }}
              />
            </div>

            <div className={classNames(projectcss.all, sty.column__gUqO)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__b1Wun,
                  {
                    [sty.textprimary__b1Wun4CtZl]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {"CLI access"}
              </div>
            </div>
          </div>
        ) : null}
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__ibomP, {
              [sty.columnsborders_flatCenter__ibomPehDtS]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsprimary__ibomP4CtZl]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column___492L)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__kk9Mh)}
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

            <div className={classNames(projectcss.all, sty.column___6ZGaX)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dwsl7,
                  {
                    [sty.textprimary__dwsl74CtZl]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {"Automation features"}
              </div>
            </div>
          </div>
        ) : null}
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__o274D, {
              [sty.columnsborders_flatCenter__o274DehDtS]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsprimary__o274D4CtZl]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column___9Hdd)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__nmC7T)}
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

            <div className={classNames(projectcss.all, sty.column__sVg3F)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rxO4Q,
                  {
                    [sty.textprimary__rxO4Q4CtZl]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {"Team features"}
              </div>
            </div>
          </div>
        ) : null}

        <p.PlasmicImg
          alt={""}
          className={classNames(sty.img__iVxGv)}
          displayHeight={"auto" as const}
          displayMaxHeight={"none" as const}
          displayMaxWidth={"100%" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"auto" as const}
          loading={"lazy" as const}
          src={{
            src: linePricingpngNKgbgA53NxXav,
            fullWidth: 300,
            fullHeight: 2,
            aspectRatio: undefined
          }}
        />

        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "borders", "flatRight")
            ? true
            : hasVariant($state, "borders", "flatLeft")
            ? true
            : false
        ) ? (
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__qhc8H,
              {
                [sty.textborders_flatCenter__qhc8HehDtS]: hasVariant(
                  $state,
                  "borders",
                  "flatCenter"
                ),
                [sty.textborders_flatLeft__qhc8HWfpgE]: hasVariant(
                  $state,
                  "borders",
                  "flatLeft"
                ),
                [sty.textborders_flatRight__qhc8HkEdi]: hasVariant(
                  $state,
                  "borders",
                  "flatRight"
                )
              }
            )}
          >
            {hasVariant($state, "borders", "flatCenter")
              ? "$ 50"
              : hasVariant($state, "borders", "flatRight")
              ? "$ 800"
              : "$ 0"}
          </div>
        ) : null}

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__aaZwo,
            {
              [sty.textborders_flatCenter__aaZwOehDtS]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.textborders_flatLeft__aaZwoWfpgE]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.textborders_flatRight__aaZwOkEdi]: hasVariant(
                $state,
                "borders",
                "flatRight"
              )
            }
          )}
        >
          {hasVariant($state, "borders", "flatRight")
            ? "Starting price, customizable"
            : hasVariant($state, "borders", "flatLeft")
            ? "Free Forever"
            : "per project/month"}
        </div>

        {(
          hasVariant($state, "borders", "flatRight")
            ? true
            : hasVariant($state, "borders", "flatLeft")
            ? true
            : true
        ) ? (
          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button, {
              [sty.buttonborders_flatCenter]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.buttonborders_flatLeft]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.buttonborders_flatRight]: hasVariant(
                $state,
                "borders",
                "flatRight"
              ),
              [sty.buttonprimary]: hasVariant($state, "primary", "primary")
            })}
            color={
              hasVariant($state, "borders", "flatLeft")
                ? ("white" as const)
                : ("blue" as const)
            }
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___1ULdC)}
                role={"img"}
              />
            }
            link={"#" as const}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__kzW6P)}
                role={"img"}
              />
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__tucAs,
                {
                  [sty.textborders_flatCenter__tucAsehDtS]: hasVariant(
                    $state,
                    "borders",
                    "flatCenter"
                  ),
                  [sty.textborders_flatLeft__tucAsWfpgE]: hasVariant(
                    $state,
                    "borders",
                    "flatLeft"
                  ),
                  [sty.textborders_flatRight__tucAskEdi]: hasVariant(
                    $state,
                    "borders",
                    "flatRight"
                  )
                }
              )}
            >
              {hasVariant($state, "borders", "flatCenter")
                ? "Go Become pro"
                : hasVariant($state, "borders", "flatRight")
                ? "Everything is yours"
                : hasVariant($state, "borders", "flatLeft")
                ? "Claim Free"
                : "Go Become pro"}
            </div>
          </Button>
        ) : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "h4", "button"],
  freeBox: ["freeBox", "h4", "button"],
  h4: ["h4"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  h4: "h4";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPriceCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPriceCard__VariantsArgs;
    args?: PlasmicPriceCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPriceCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPriceCard__ArgsType,
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
          internalArgPropNames: PlasmicPriceCard__ArgProps,
          internalVariantPropNames: PlasmicPriceCard__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPriceCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPriceCard";
  } else {
    func.displayName = `PlasmicPriceCard.${nodeName}`;
  }
  return func;
}

export const PlasmicPriceCard = Object.assign(
  // Top-level PlasmicPriceCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    h4: makeNodeComponent("h4"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicPriceCard
    internalVariantProps: PlasmicPriceCard__VariantProps,
    internalArgProps: PlasmicPriceCard__ArgProps
  }
);

export default PlasmicPriceCard;
/* prettier-ignore-end */
