/* @ds-bundle: {"format":4,"namespace":"BeautyPalastAlbstadtDesignSystem_3ff570","components":[{"name":"FaqAccordion","sourcePath":"components/content/FaqAccordion.jsx"},{"name":"NoticeBox","sourcePath":"components/content/NoticeBox.jsx"},{"name":"OwnerIntro","sourcePath":"components/content/OwnerIntro.jsx"},{"name":"PriceRow","sourcePath":"components/content/PriceRow.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"ServiceCard","sourcePath":"components/content/ServiceCard.jsx"},{"name":"Testimonial","sourcePath":"components/content/Testimonial.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Ornament","sourcePath":"components/core/Ornament.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"ContactForm","sourcePath":"components/forms/ContactForm.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"WhatsAppButton","sourcePath":"components/forms/WhatsAppButton.jsx"},{"name":"Footer","sourcePath":"components/layout/Footer.jsx"},{"name":"Header","sourcePath":"components/layout/Header.jsx"},{"name":"Hero","sourcePath":"components/layout/Hero.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"Wordmark","sourcePath":"components/layout/Wordmark.jsx"}],"sourceHashes":{"components/content/FaqAccordion.jsx":"04d68122d4db","components/content/NoticeBox.jsx":"45021aa960aa","components/content/OwnerIntro.jsx":"bfccc260a064","components/content/PriceRow.jsx":"a48dcd84d93f","components/content/Quote.jsx":"5fc890d11129","components/content/ServiceCard.jsx":"831f5fe04e76","components/content/Testimonial.jsx":"e2f7694457ca","components/core/Badge.jsx":"a7ebe2353506","components/core/Button.jsx":"e2acdea13d76","components/core/Eyebrow.jsx":"db5a998cf84d","components/core/Icon.jsx":"b37f8782c378","components/core/Ornament.jsx":"85afceeec7cc","components/core/SectionHeading.jsx":"9d600ad0d47c","components/forms/ContactForm.jsx":"542f0ae70c38","components/forms/Field.jsx":"c9d0459165c5","components/forms/Input.jsx":"ecd3a504da22","components/forms/Select.jsx":"4dce5d1c9bb0","components/forms/Textarea.jsx":"09ddc6b5920a","components/forms/WhatsAppButton.jsx":"630779f1d193","components/layout/Footer.jsx":"74486c1fc943","components/layout/Header.jsx":"e7ac03e80b99","components/layout/Hero.jsx":"ad5010ed7a86","components/layout/Section.jsx":"cfa18766d8fb","components/layout/Wordmark.jsx":"27b89b1ba0b9","ui_kits/website-mobile/MobileScreens.jsx":"eac2a0a9e984","ui_kits/website/ContactScreen.jsx":"0f3c0dfeca3f","ui_kits/website/HairScreen.jsx":"3adeed2c373c","ui_kits/website/HomeScreen.jsx":"b89dc1cc80e6","ui_kits/website/InfoScreen.jsx":"b3febcf4a4ec","ui_kits/website/LandingScreen.jsx":"e0e7c6d03046","ui_kits/website/PricingScreen.jsx":"55a36cfddff0"},"inlinedExternals":[],"unexposedExports":[{"name":"controlStyle","sourcePath":"components/forms/Field.jsx"},{"name":"labelStyle","sourcePath":"components/forms/Field.jsx"}]} */

(() => {

const __ds_ns = (window.BeautyPalastAlbstadtDesignSystem_3ff570 = window.BeautyPalastAlbstadtDesignSystem_3ff570 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/FaqAccordion.jsx
try { (() => {
function FaqAccordion({
  items = [],
  defaultOpen = 0,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line-hairline)',
      maxWidth: 'var(--measure-max)',
      ...style
    }
  }, items.map((item, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--line-hairline)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-expanded": isOpen,
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        minHeight: 'var(--touch-min)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
        background: 'transparent',
        border: 'none',
        padding: '22px 0',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--size-h3)',
        lineHeight: 'var(--lh-h3)',
        color: 'var(--text-strong)'
      }
    }, item.question, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: '10px',
        height: '10px',
        borderRight: '1px solid var(--c-gold-deep)',
        borderBottom: '1px solid var(--c-gold-deep)',
        transform: isOpen ? 'rotate(-135deg)' : 'rotate(45deg)',
        transition: 'transform var(--duration-base) var(--ease-standard)',
        flex: '0 0 auto'
      }
    })), isOpen && /*#__PURE__*/React.createElement("p", {
      style: {
        padding: '0 0 24px',
        margin: 0,
        fontSize: 'var(--size-body)',
        lineHeight: 'var(--lh-body)',
        color: 'var(--text-body)'
      }
    }, item.answer));
  }));
}
Object.assign(__ds_scope, { FaqAccordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FaqAccordion.jsx", error: String((e && e.message) || e) }); }

// components/content/PriceRow.jsx
try { (() => {
function PriceRow({
  treatment,
  duration,
  price,
  note,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto auto',
      gap: '24px',
      alignItems: 'baseline',
      padding: '20px 0',
      borderBottom: '1px solid var(--line-hairline)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h3)',
      lineHeight: 1.2,
      color: 'var(--text-strong)'
    }
  }, treatment), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-small)',
      color: 'var(--text-meta)'
    }
  }, note)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-small)',
      color: 'var(--text-meta)',
      fontVariantNumeric: 'tabular-nums',
      minWidth: '72px',
      textAlign: 'right'
    }
  }, duration), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-price)',
      color: 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums',
      minWidth: '92px',
      textAlign: 'right'
    }
  }, price));
}
Object.assign(__ds_scope, { PriceRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PriceRow.jsx", error: String((e && e.message) || e) }); }

// components/content/Testimonial.jsx
try { (() => {
function Testimonial({
  quote,
  name,
  meta,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--line-hairline)',
      borderRadius: 'var(--radius-base)',
      padding: '32px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '21px',
      lineHeight: 1.5,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "\u201E", quote, "\u201C"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '40px',
      height: '40px',
      borderRadius: 'var(--radius-full)',
      background: 'var(--c-gold-soft)',
      color: 'var(--c-espresso)',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: '18px'
    }
  }, (name || '?').trim().charAt(0)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-small)',
      color: 'var(--text-strong)'
    }
  }, name), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-small)',
      color: 'var(--text-meta)'
    }
  }, meta))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  soft: {
    background: 'var(--surface-badge)',
    color: 'var(--c-espresso)',
    border: '1px solid var(--surface-badge)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-link)',
    border: '1px solid var(--c-gold-soft)'
  },
  success: {
    background: 'transparent',
    color: 'var(--c-success)',
    border: '1px solid var(--c-success)'
  }
};
function Badge({
  tone = 'soft',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-ui)',
      fontSize: '12px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      fontWeight: 'var(--fw-medium)',
      padding: '6px 14px',
      borderRadius: 'var(--radius-full)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--font-ui)',
  fontSize: '14px',
  fontWeight: 'var(--fw-medium)',
  letterSpacing: 'var(--ls-button)',
  textTransform: 'uppercase',
  borderRadius: 'var(--radius-button)',
  minHeight: 'var(--touch-min)',
  padding: '0 28px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  cursor: 'pointer',
  textDecoration: 'none',
  lineHeight: 1,
  whiteSpace: 'nowrap',
  transition: 'background-color var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)'
};
const variants = {
  primary: {
    background: 'var(--c-espresso)',
    color: 'var(--c-creme)',
    border: '1px solid var(--c-espresso)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--c-espresso)',
    border: '1px solid var(--c-espresso)'
  },
  tertiary: {
    background: 'transparent',
    color: 'var(--text-link)',
    border: 'none',
    padding: 0,
    minHeight: 'auto',
    textTransform: 'none',
    letterSpacing: '0.01em',
    fontSize: '15px',
    borderBottom: '1px solid var(--text-link)',
    borderRadius: 0
  }
};
const hovers = {
  primary: {
    background: 'var(--c-kakao)',
    borderColor: 'var(--c-kakao)'
  },
  secondary: {
    background: 'var(--c-espresso)',
    color: 'var(--c-creme)'
  },
  tertiary: {
    color: 'var(--c-espresso)',
    borderBottomColor: 'var(--c-espresso)'
  }
};
function Button({
  variant = 'primary',
  as = 'button',
  href,
  disabled = false,
  fullWidth = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : as;
  const s = {
    ...base,
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(fullWidth ? {
      width: '100%'
    } : null),
    ...(disabled ? {
      opacity: 0.45,
      cursor: 'not-allowed'
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  color = 'var(--text-meta)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 'var(--fw-medium)',
      color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/OwnerIntro.jsx
try { (() => {
function OwnerIntro({
  eyebrow = 'Über mich',
  name = 'Manuela Mucolli',
  role = 'Inhaberin, Beauty Palast Albstadt',
  text,
  image,
  ctaLabel = 'Termin anfragen',
  ctaHref = '#termin',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,5fr) minmax(0,6fr)',
      gap: '72px',
      alignItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 5',
      background: image ? `center/cover no-repeat url(${image})` : 'var(--c-sand)',
      borderRadius: 'var(--radius-media)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      maxWidth: 'var(--measure-max)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h2)',
      lineHeight: 'var(--lh-h2)',
      color: 'var(--text-strong)',
      fontWeight: 'var(--fw-light)',
      margin: 0
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-small)',
      color: 'var(--text-meta)'
    }
  }, role), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, text), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    href: ctaHref
  }, ctaLabel))));
}
Object.assign(__ds_scope, { OwnerIntro });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/OwnerIntro.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Thin wrapper around the Lucide outline set (stroke 1.25, round caps, 24px grid). */
function Icon({
  name,
  size = 24,
  color = 'var(--ornament)',
  strokeWidth = 1.25,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const draw = () => {
      if (window.lucide && ref.current) {
        ref.current.innerHTML = '';
        const i = document.createElement('i');
        i.setAttribute('data-lucide', name);
        ref.current.appendChild(i);
        window.lucide.createIcons({
          nameAttr: 'data-lucide',
          attrs: {
            width: size,
            height: size,
            'stroke-width': strokeWidth,
            stroke: 'currentColor'
          }
        });
      }
    };
    draw();
    if (!window.lucide) {
      const t = setInterval(() => {
        if (window.lucide) {
          draw();
          clearInterval(t);
        }
      }, 120);
      return () => clearInterval(t);
    }
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      color,
      width: size,
      height: size,
      flex: '0 0 auto',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/NoticeBox.jsx
try { (() => {
const tones = {
  info: {
    background: 'var(--surface-alt)',
    icon: 'info'
  },
  care: {
    background: 'var(--surface-warm)',
    icon: 'heart'
  },
  medical: {
    background: 'var(--surface-card)',
    icon: 'shield'
  }
};
function NoticeBox({
  title,
  children,
  tone = 'care',
  style
}) {
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '20px',
      background: t.background,
      border: '1px solid var(--line-hairline)',
      borderRadius: 'var(--radius-base)',
      padding: '28px 32px',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 24,
    color: "var(--c-gold-deep)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      maxWidth: 'var(--measure-max)'
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h3)',
      color: 'var(--text-strong)',
      fontWeight: 'var(--fw-regular)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, children)));
}
Object.assign(__ds_scope, { NoticeBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/NoticeBox.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceCard.jsx
try { (() => {
function ServiceCard({
  title,
  text,
  duration,
  priceFrom,
  image,
  href = '#',
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid ' + (hover ? 'var(--c-gold-soft)' : 'var(--line-hairline)'),
      borderRadius: 'var(--radius-base)',
      textDecoration: 'none',
      color: 'inherit',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-hover)' : 'none',
      transition: 'box-shadow var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      background: image ? `center/cover no-repeat url(${image})` : 'var(--c-rose)',
      borderRadius: 'var(--radius-media)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h3)',
      lineHeight: 'var(--lh-h3)',
      color: 'var(--text-strong)',
      fontWeight: 'var(--fw-regular)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)',
      margin: 0
    }
  }, text), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: '16px',
      borderTop: '1px solid var(--line-hairline)',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-small)',
      color: 'var(--text-meta)'
    }
  }, duration && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 16,
    color: "var(--ornament)"
  }), duration), priceFrom && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-price)',
      color: 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "ab ", priceFrom))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Ornament.jsx
try { (() => {
/** Gold hairline divider, optionally with a centred gold marker as on the key visual. */
function Ornament({
  width = '220px',
  marker = true,
  align = 'center',
  style
}) {
  const line = {
    height: '1px',
    background: 'var(--ornament)',
    flex: 1,
    opacity: 0.75
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      width,
      margin: align === 'center' ? '0 auto' : 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: line
  }), marker && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '7px',
      height: '7px',
      background: 'var(--ornament)',
      transform: 'rotate(45deg)',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: line
  }));
}
Object.assign(__ds_scope, { Ornament });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Ornament.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
function Quote({
  children,
  source,
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      background: 'var(--surface-warm)',
      padding: '72px 48px',
      margin: 0,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-light)',
      fontStyle: 'italic',
      fontSize: 'var(--size-h2)',
      lineHeight: 'var(--lh-h2)',
      color: 'var(--text-strong)',
      maxWidth: '20ch'
    }
  }, "\u201E", children, "\u201C"), /*#__PURE__*/React.createElement(__ds_scope.Ornament, {
    width: "160px"
  }), source && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-meta)'
    }
  }, source));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  level = 'h2',
  style
}) {
  const Tag = level;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      maxWidth: align === 'center' ? 'var(--measure-max)' : undefined,
      margin: align === 'center' ? '0 auto' : undefined,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-light)',
      color: 'var(--text-strong)',
      fontSize: level === 'h1' ? 'var(--size-h1)' : 'var(--size-h2)',
      lineHeight: level === 'h1' ? 'var(--lh-h1)' : 'var(--lh-h2)',
      margin: 0
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-lead)',
      lineHeight: 'var(--lh-lead)',
      color: 'var(--text-body)',
      maxWidth: 'var(--measure-max)'
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
const labelStyle = {
  fontFamily: 'var(--font-ui)',
  fontSize: 'var(--size-small)',
  fontWeight: 'var(--fw-medium)',
  color: 'var(--text-strong)',
  letterSpacing: '0.01em'
};
const controlStyle = invalid => ({
  fontFamily: 'var(--font-ui)',
  fontWeight: 'var(--fw-light)',
  fontSize: 'var(--size-body)',
  color: 'var(--text-strong)',
  background: 'var(--surface-field)',
  border: '1px solid ' + (invalid ? 'var(--c-error)' : 'var(--line-hairline)'),
  borderRadius: 'var(--radius-base)',
  padding: '12px 14px',
  minHeight: 'var(--touch-min)',
  width: '100%',
  outline: 'none',
  transition: 'border-color var(--duration-fast) var(--ease-standard)'
});

/** Label + control wrapper carrying hint and error text. */
function Field({
  label,
  hint,
  error,
  required,
  htmlFor,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: labelStyle
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-gold-deep)'
    }
  }, " *")), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-small)',
      color: 'var(--c-error)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-small)',
      color: 'var(--text-meta)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field, labelStyle, controlStyle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  invalid = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      ...__ds_scope.controlStyle(invalid),
      ...(focus ? {
        borderColor: 'var(--c-gold-deep)',
        boxShadow: '0 0 0 2px rgba(143,103,51,0.18)'
      } : null),
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  invalid = false,
  options = [],
  placeholder,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...__ds_scope.controlStyle(invalid),
      appearance: 'none',
      paddingRight: '40px',
      ...(focus ? {
        borderColor: 'var(--c-gold-deep)',
        boxShadow: '0 0 0 2px rgba(143,103,51,0.18)'
      } : null),
      ...style
    }
  }), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value ?? o,
    value: o.value ?? o
  }, o.label ?? o))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '16px',
      top: '50%',
      width: '8px',
      height: '8px',
      borderRight: '1px solid var(--c-gold-deep)',
      borderBottom: '1px solid var(--c-gold-deep)',
      transform: 'translateY(-70%) rotate(45deg)',
      pointerEvents: 'none'
    }
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  invalid = false,
  rows = 5,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, rest, {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...__ds_scope.controlStyle(invalid),
      resize: 'vertical',
      lineHeight: 'var(--lh-body)',
      ...(focus ? {
        borderColor: 'var(--c-gold-deep)',
        boxShadow: '0 0 0 2px rgba(143,103,51,0.18)'
      } : null),
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/forms/WhatsAppButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function WhatsAppButton({
  href = 'https://wa.me/4917666613524',
  label = 'Über WhatsApp schreiben',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      minHeight: 'var(--touch-min)',
      padding: '0 22px',
      borderRadius: 'var(--radius-button)',
      border: '1px solid ' + (hover ? 'var(--c-espresso)' : 'var(--c-gold-soft)'),
      background: hover ? 'var(--c-sand)' : 'var(--surface-card)',
      color: 'var(--text-strong)',
      textDecoration: 'none',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-small)',
      letterSpacing: '0.02em',
      transition: 'background-color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "message-circle",
    size: 20,
    color: "var(--c-gold-deep)"
  }), label);
}
Object.assign(__ds_scope, { WhatsAppButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/WhatsAppButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/ContactForm.jsx
try { (() => {
const TREATMENTS = ['Klassische Gesichtsreinigung', 'Aquafacial', 'Anti-Aging', 'Needling', 'Microdermabrasion', 'Kopfhaut und Haar', 'Waxing', 'Onkologische Kosmetik', 'Ich bin mir noch unsicher'];
function ContactForm({
  treatments = TREATMENTS,
  onSubmit,
  state = 'idle',
  style
}) {
  const [values, setValues] = React.useState({
    name: '',
    mail: '',
    tel: '',
    treatment: '',
    message: ''
  });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(state === 'success');
  const set = k => e => setValues(v => ({
    ...v,
    [k]: e.target.value
  }));
  const submit = e => {
    e.preventDefault();
    const next = {};
    if (!values.name.trim()) next.name = 'Bitte sag mir, wie ich dich ansprechen darf.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.mail)) next.mail = 'Bitte prüfe deine E-Mail-Adresse.';
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      onSubmit && onSubmit(values);
    }
  };
  if (sent) return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--line-hairline)',
      borderRadius: 'var(--radius-base)',
      padding: '40px',
      display: 'flex',
      gap: '16px',
      alignItems: 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 24,
    color: "var(--c-success)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h3)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Danke f\xFCr deine Nachricht."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-body)',
      maxWidth: '44ch'
    }
  }, "Ich lese deine Nachricht selbst und melde mich pers\xF6nlich bei dir \u2013 meist innerhalb von zwei Werktagen.")));
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--line-hairline)',
      borderRadius: 'var(--radius-base)',
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Name",
    required: true,
    htmlFor: "bp-name",
    error: errors.name
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    id: "bp-name",
    value: values.name,
    onChange: set('name'),
    invalid: !!errors.name,
    placeholder: "Dein Name"
  })), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "E-Mail",
    required: true,
    htmlFor: "bp-mail",
    error: errors.mail
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    id: "bp-mail",
    type: "email",
    value: values.mail,
    onChange: set('mail'),
    invalid: !!errors.mail,
    placeholder: "name@beispiel.de"
  })), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Telefon",
    htmlFor: "bp-tel",
    hint: "Optional"
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    id: "bp-tel",
    type: "tel",
    value: values.tel,
    onChange: set('tel'),
    placeholder: "+49 \u2026"
  })), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Behandlung",
    htmlFor: "bp-treat"
  }, /*#__PURE__*/React.createElement(__ds_scope.Select, {
    id: "bp-treat",
    value: values.treatment,
    onChange: set('treatment'),
    placeholder: "Bitte w\xE4hlen",
    options: treatments
  }))), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Deine Nachricht",
    htmlFor: "bp-msg",
    hint: "Ein paar pers\xF6nliche Worte reichen vollkommen."
  }, /*#__PURE__*/React.createElement(__ds_scope.Textarea, {
    id: "bp-msg",
    value: values.message,
    onChange: set('message'),
    placeholder: "Erz\xE4hl mir einfach, was dich besch\xE4ftigt."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit"
  }, "Anfrage senden"), /*#__PURE__*/React.createElement(__ds_scope.WhatsAppButton, null)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-small)',
      color: 'var(--text-meta)'
    }
  }, "Deine Angaben nutze ich ausschlie\xDFlich, um dir zu antworten. Mehr dazu in der Datenschutzerkl\xE4rung."));
}
Object.assign(__ds_scope, { ContactForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ContactForm.jsx", error: String((e && e.message) || e) }); }

// components/layout/Hero.jsx
try { (() => {
function Hero({
  claim,
  subline,
  ctaLabel = 'Termin anfragen',
  ctaHref = '#kontakt',
  image,
  align = 'left',
  minHeight = '560px',
  style
}) {
  const overlay = align === 'left' ? 'linear-gradient(90deg, rgba(253,247,241,0.96) 0%, rgba(253,247,241,0.88) 44%, rgba(253,247,241,0.10) 78%)' : 'linear-gradient(0deg, rgba(253,247,241,0.94) 0%, rgba(253,247,241,0.35) 70%)';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight,
      background: image ? `center/cover no-repeat url(${image})` : 'var(--c-sand)',
      display: 'flex',
      alignItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: overlay
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px var(--edge-desktop)',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '620px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align === 'center' ? 'center' : 'left',
      margin: align === 'center' ? '0 auto' : 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'var(--size-display)',
      lineHeight: 'var(--lh-display)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, claim), /*#__PURE__*/React.createElement(__ds_scope.Ornament, {
    width: "200px",
    align: align === 'center' ? 'center' : 'left'
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-lead)',
      lineHeight: 'var(--lh-lead)',
      color: 'var(--text-body)',
      maxWidth: '52ch',
      margin: 0
    }
  }, subline), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: ctaHref
  }, ctaLabel)))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Hero.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
function Section({
  tone = 'page',
  width = 'container',
  padded = true,
  id,
  children,
  style
}) {
  const bg = {
    page: 'var(--surface-page)',
    alt: 'var(--surface-alt)',
    warm: 'var(--surface-warm)',
    card: 'var(--surface-card)',
    inverse: 'var(--surface-inverse)'
  }[tone];
  const inner = width === 'text' ? 'var(--measure-max)' : 'var(--container-max)';
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: bg,
      padding: padded ? 'var(--section-desktop) var(--edge-desktop)' : 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: inner,
      margin: '0 auto'
    }
  }, children));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/layout/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The Beauty Palast Albstadt logo (gold lion crest with BP monogram). */
function Wordmark({
  height = 52,
  src = 'assets/logo.png',
  subline,
  href = '#',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      textDecoration: 'none',
      border: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Beauty Palast Albstadt",
    style: {
      height: height + 'px',
      width: 'auto',
      display: 'block'
    }
  }), subline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-meta)'
    }
  }, subline));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/layout/Footer.jsx
try { (() => {
const linkStyle = {
  fontFamily: 'var(--font-ui)',
  fontSize: 'var(--size-small)',
  color: 'var(--c-creme)',
  textDecoration: 'none',
  borderBottom: '1px solid transparent',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  minHeight: '32px'
};
function Footer({
  logoSrc = 'assets/logo.png',
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-dark)',
      padding: '72px var(--edge-desktop) 40px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: '48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    height: 64,
    src: logoSrc
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-small)',
      color: 'var(--c-gold-soft)',
      maxWidth: '30ch'
    }
  }, "Kosmetikinstitut von Manuela Mucolli \u2013 seit 2017 in Albstadt.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--c-gold-soft)'
    }
  }, "Studio"), /*#__PURE__*/React.createElement("span", {
    style: linkStyle
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 18,
    color: "var(--c-gold)"
  }), "Josefstr. 3, 72461 Albstadt"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+4917666613524",
    style: linkStyle
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 18,
    color: "var(--c-gold)"
  }), "+49 176 66613524"), /*#__PURE__*/React.createElement("a", {
    href: "https://instagram.com/beauty.palast.albstadt",
    style: linkStyle
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "at-sign",
    size: 18,
    color: "var(--c-gold)"
  }), "@beauty.palast.albstadt")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--c-gold-soft)'
    }
  }, "Rechtliches"), /*#__PURE__*/React.createElement("a", {
    href: "#impressum",
    style: linkStyle
  }, "Impressum"), /*#__PURE__*/React.createElement("a", {
    href: "#datenschutz",
    style: linkStyle
  }, "Datenschutz"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '48px auto 0',
      paddingTop: '24px',
      borderTop: '1px solid rgba(235,217,188,0.25)',
      fontSize: 'var(--size-small)',
      color: 'var(--c-gold-soft)'
    }
  }, "\xA9 ", new Date().getFullYear(), " Beauty Palast Albstadt"));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Footer.jsx", error: String((e && e.message) || e) }); }

// components/layout/Header.jsx
try { (() => {
const NAV = [{
  label: 'Behandlungen',
  href: '#behandlungen'
}, {
  label: 'Preise',
  href: '#preise'
}, {
  label: 'Über uns',
  href: '#ueber-uns'
}, {
  label: 'Kontakt',
  href: '#kontakt'
}];
function NavLink({
  item,
  active
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: item.href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-small)',
      letterSpacing: '0.04em',
      color: hover || active ? 'var(--text-strong)' : 'var(--text-body)',
      textDecoration: 'none',
      borderBottom: '1px solid ' + (active ? 'var(--ornament)' : 'transparent'),
      padding: '4px 0',
      transition: 'color var(--duration-fast) var(--ease-standard)'
    }
  }, item.label);
}
function Header({
  items = NAV,
  active,
  sticky = false,
  variant = 'desktop',
  ctaLabel = 'Termin anfragen',
  ctaHref = '#kontakt',
  logoSrc = 'assets/logo.png',
  style
}) {
  const [open, setOpen] = React.useState(false);
  const shell = {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
    padding: sticky ? '14px var(--edge-desktop)' : '24px var(--edge-desktop)',
    background: sticky ? 'rgba(253,247,241,0.92)' : 'var(--surface-page)',
    backdropFilter: sticky ? 'blur(8px)' : 'none',
    borderBottom: '1px solid var(--line-hairline)',
    position: sticky ? 'sticky' : 'static',
    top: 0,
    zIndex: 20,
    ...style
  };
  if (variant === 'mobile') return /*#__PURE__*/React.createElement("header", {
    style: {
      ...shell,
      padding: '14px var(--edge-mobile)',
      flexDirection: 'column',
      alignItems: 'stretch',
      gap: '0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    height: 38,
    src: logoSrc
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Men\xFC",
    "aria-expanded": open,
    onClick: () => setOpen(o => !o),
    style: {
      width: 'var(--touch-min)',
      height: 'var(--touch-min)',
      display: 'grid',
      placeItems: 'center',
      background: 'transparent',
      border: '1px solid var(--line-hairline)',
      borderRadius: 'var(--radius-button)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? 'x' : 'menu',
    size: 20,
    color: "var(--c-espresso)"
  }))), open && /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      paddingTop: '16px'
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i.label,
    href: i.href,
    style: {
      minHeight: 'var(--touch-min)',
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-body)',
      color: 'var(--text-strong)',
      textDecoration: 'none',
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, i.label)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: ctaHref,
    fullWidth: true,
    style: {
      marginTop: '16px'
    }
  }, ctaLabel)));
  return /*#__PURE__*/React.createElement("header", {
    style: shell
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    height: sticky ? 42 : 56,
    src: logoSrc
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '32px',
      marginLeft: 'auto'
    }
  }, items.map(i => /*#__PURE__*/React.createElement(NavLink, {
    key: i.label,
    item: i,
    active: active === i.label
  }))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: ctaHref
  }, ctaLabel));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-mobile/MobileScreens.jsx
try { (() => {
const {
  Header,
  Hero,
  Section,
  SectionHeading,
  ServiceCard,
  PriceRow,
  Quote,
  NoticeBox,
  ContactForm,
  Footer,
  Button,
  Eyebrow,
  Ornament,
  FaqAccordion
} = window.BeautyPalastAlbstadtDesignSystem_3ff570;
const mobileSection = {
  padding: 'var(--section-mobile) var(--edge-mobile)'
};
function MobileHome({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    claim: /*#__PURE__*/React.createElement(React.Fragment, null, "Sch\xF6nheit, die bleibt.", /*#__PURE__*/React.createElement("br", null), "Vertrauen, das verbindet."),
    subline: "Willkommen im Beauty Palast Albstadt \u2013 einem Ort, an dem du dich gesehen und gut aufgehoben f\xFChlen darfst.",
    image: "../../assets/hero-photo.png",
    align: "center",
    minHeight: "520px",
    style: {
      backgroundPosition: '70% center'
    }
  }), /*#__PURE__*/React.createElement(Section, {
    style: mobileSection
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Zwei Wege",
    title: "Wo darf ich dich unterst\xFCtzen?"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '24px',
      marginTop: '32px'
    }
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    title: "Gesicht und Haut",
    text: "Reinigung, Aquafacial, Needling und Anti-Aging.",
    duration: "40\u201375 Min",
    priceFrom: "109 \u20AC"
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    title: "Kopfhaut und Haar",
    text: "Begleitung bei Haarbruch und empfindlicher Kopfhaut.",
    duration: "30 Min",
    priceFrom: "Kostenfrei"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '32px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => go('preise')
  }, "Alle Preise ansehen"))), /*#__PURE__*/React.createElement(Quote, {
    source: "Manuela Mucolli",
    style: {
      padding: 'var(--section-mobile) var(--edge-mobile)'
    }
  }, "Jede Blume bl\xFCht in ihrer eigenen Zeit."), /*#__PURE__*/React.createElement(Section, {
    tone: "alt",
    style: mobileSection
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\xDCber mich"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--size-h2)',
      color: 'var(--text-strong)',
      margin: '12px 0 16px'
    }
  }, "Manuela Mucolli"), /*#__PURE__*/React.createElement(Ornament, {
    width: "140px",
    align: "left"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '16px',
      color: 'var(--text-body)'
    }
  }, "Ich nehme mir Zeit f\xFCr dich und deine ganz pers\xF6nlichen Bed\xFCrfnisse. Du darfst mit deinen Fragen, Unsicherheiten und W\xFCnschen genauso kommen, wie du bist.")), /*#__PURE__*/React.createElement(Section, {
    style: mobileSection
  }, /*#__PURE__*/React.createElement(NoticeBox, {
    tone: "medical",
    title: "Onkologische Kosmetik",
    style: {
      padding: '24px'
    }
  }, "Jede Empfehlung erfolgt in \xE4rztlicher Absprache. Kosmetische Pflege ersetzt keine \xE4rztliche Diagnose oder Behandlung.")));
}
function MobilePricing() {
  return /*#__PURE__*/React.createElement(Section, {
    style: mobileSection
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Preise",
    title: "Preisliste"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '32px'
    }
  }, /*#__PURE__*/React.createElement(PriceRow, {
    treatment: "Klassische Gesichtsreinigung",
    duration: "40 Min",
    price: "109 \u20AC"
  }), /*#__PURE__*/React.createElement(PriceRow, {
    treatment: "Aquafacial",
    duration: "45 Min",
    price: "159 \u20AC"
  }), /*#__PURE__*/React.createElement(PriceRow, {
    treatment: "Anti-Aging",
    duration: "75 Min",
    price: "185 \u20AC"
  }), /*#__PURE__*/React.createElement(PriceRow, {
    treatment: "Needling",
    duration: "45 Min",
    price: "159 \u20AC"
  }), /*#__PURE__*/React.createElement(PriceRow, {
    treatment: "Brazilian Waxing",
    duration: "40 Min",
    price: "55 \u20AC"
  })));
}
function MobileInfo() {
  return /*#__PURE__*/React.createElement(Section, {
    style: mobileSection
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Kundeninformation",
    title: "Gut informiert ankommen."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '24px'
    }
  }, /*#__PURE__*/React.createElement(FaqAccordion, {
    items: [{
      question: 'Dein erster Termin',
      answer: 'Die Buchung für Neukunden erfolgt online, der erste Termin wird vorab bezahlt.'
    }, {
      question: 'Bezahlung im Studio',
      answer: 'Im Studio ist derzeit nur Barzahlung möglich.'
    }, {
      question: 'Absage',
      answer: 'Bitte mindestens 24 Stunden vorher – sonst kann eine Ausfallgebühr von bis zu 50,00 € anfallen.'
    }]
  })));
}
function MobileContact() {
  return /*#__PURE__*/React.createElement(Section, {
    style: mobileSection
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Kontakt",
    title: "Schreib mir einfach.",
    lead: "Ein paar pers\xF6nliche Worte reichen vollkommen."
  }), /*#__PURE__*/React.createElement(ContactForm, {
    style: {
      marginTop: '32px',
      padding: '24px'
    }
  }));
}
Object.assign(window, {
  MobileHome,
  MobilePricing,
  MobileInfo,
  MobileContact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-mobile/MobileScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const {
  Section,
  SectionHeading,
  ContactForm,
  Icon
} = window.BeautyPalastAlbstadtDesignSystem_3ff570;
function Line({
  icon,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      fontSize: 'var(--size-body)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20,
    color: "var(--ornament)"
  }), children);
}
function ContactScreen() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "kontakt"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,5fr) minmax(0,7fr)',
      gap: '72px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Kontakt",
    title: "Schreib mir einfach.",
    lead: "Du brauchst keine langen Erkl\xE4rungen und musst auch keine Fachbegriffe kennen. Ich lese deine Nachricht selbst und antworte dir pers\xF6nlich."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
      paddingTop: '8px',
      borderTop: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Line, {
    icon: "map-pin"
  }, "Josefstr. 3, 72461 Albstadt"), /*#__PURE__*/React.createElement(Line, {
    icon: "phone"
  }, "+49 176 66613524"), /*#__PURE__*/React.createElement(Line, {
    icon: "at-sign"
  }, "@beauty.palast.albstadt"))), /*#__PURE__*/React.createElement(ContactForm, null)));
}
window.ContactScreen = ContactScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HairScreen.jsx
try { (() => {
const {
  Section,
  SectionHeading,
  NoticeBox,
  Button,
  Ornament,
  Eyebrow
} = window.BeautyPalastAlbstadtDesignSystem_3ff570;
function P({
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, children);
}
function HairScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--measure-max)',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Kopfhaut und Haar"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--size-h1)',
      lineHeight: 'var(--lh-h1)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Was hilft bei Haarausfall und gesch\xE4digtem Haar?"), /*#__PURE__*/React.createElement(Ornament, {
    width: "200px",
    align: "left"
  }), /*#__PURE__*/React.createElement(P, null, "Vielleicht stehst du morgens vor dem Spiegel und bemerkst, dass sich dein Haar ver\xE4ndert hat. Es f\xFChlt sich d\xFCnner an, bricht schneller oder verliert an Kraft. Irgendwann ist da dieser Gedanke: Was kann ich noch tun?"), /*#__PURE__*/React.createElement(P, null, "Genau diesen Punkt kenne ich selbst sehr gut. Meine eigenen Haare waren nach vielen Jahren mit Extensions stark gesch\xE4digt. Ich habe Produkte gewechselt, Neues ausprobiert und immer wieder gehofft, endlich etwas zu finden, das wirklich zu meinem Haar passt."), /*#__PURE__*/React.createElement(P, null, "Die Ver\xE4nderung kam nicht \xFCber Nacht. Mit der Zeit f\xFChlte sich mein Haar jedoch anders an. Besonders ber\xFChrt hat mich ein Moment bei meiner Friseurin: Sie schaute meine Haare an und fragte mich pl\xF6tzlich: \u201EWas machst du anders?\u201C"))), /*#__PURE__*/React.createElement(Section, {
    tone: "alt"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,5fr) minmax(0,7fr)',
      gap: '72px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "So arbeiten wir",
    title: "Erst zuh\xF6ren, dann empfehlen"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: 'var(--measure-max)'
    }
  }, /*#__PURE__*/React.createElement(P, null, "Ich glaube nicht daran, dass es die eine L\xF6sung gibt, die f\xFCr jeden Menschen passt. Deshalb bekommst du bei mir keine fertige Liste und kein starres Pflegeprogramm."), /*#__PURE__*/React.createElement(P, null, "Wir schauen gemeinsam hin: Wie f\xFChlt sich dein Haar an? Was hat sich ver\xE4ndert? Was benutzt du derzeit? Manchmal braucht es n\xE4mlich gar nicht mehr Produkte. Manchmal braucht es einfach die passenden."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('kontakt')
  }, "Beratung anfragen"))))), /*#__PURE__*/React.createElement(Section, {
    width: "text"
  }, /*#__PURE__*/React.createElement(NoticeBox, {
    tone: "info",
    title: "Wichtiger Hinweis"
  }, "Meine Empfehlungen beruhen auf meinen pers\xF6nlichen Erfahrungen mit kosmetischen Pflegeprodukten sowie auf den R\xFCckmeldungen meiner Kundinnen und Kunden. Es werden keine Heilversprechen oder Garantien abgegeben. Ergebnisse k\xF6nnen individuell unterschiedlich sein.")));
}
window.HairScreen = HairScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HairScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Hero,
  Section,
  SectionHeading,
  ServiceCard,
  Quote,
  OwnerIntro,
  NoticeBox,
  Testimonial,
  Button,
  Badge
} = window.BeautyPalastAlbstadtDesignSystem_3ff570;
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    claim: /*#__PURE__*/React.createElement(React.Fragment, null, "Sch\xF6nheit, die bleibt.", /*#__PURE__*/React.createElement("br", null), "Vertrauen, das verbindet."),
    subline: "Willkommen im Beauty Palast Albstadt \u2013 einem Ort, an dem du dich gesehen, verstanden und gut aufgehoben f\xFChlen darfst.",
    ctaLabel: "Termin anfragen",
    ctaHref: "#kontakt",
    image: "../../assets/hero-photo.png",
    minHeight: "620px"
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Zwei Wege",
    title: "Wo darf ich dich unterst\xFCtzen?",
    lead: "Ob Akne, unreine oder empfindliche Haut, Narben, erste Zeichen der Hautalterung, Haarausfall, d\xFCnner werdendes Haar, Schuppen oder eine sensible Kopfhaut \u2013 gemeinsam schauen wir, was zu dir und deiner Situation passt."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '32px',
      marginTop: '48px'
    }
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    title: "Gesicht und Haut",
    text: "Reinigung, Aquafacial, Needling und Anti-Aging \u2013 abgestimmt auf deine Haut.",
    duration: "40\u201375 Min",
    priceFrom: "109 \u20AC",
    href: "#behandlungen"
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    title: "Kopfhaut und Haar",
    text: "Begleitung bei Haarbruch, d\xFCnner werdendem Haar und empfindlicher Kopfhaut.",
    duration: "Beratung 30 Min",
    priceFrom: "Kostenfrei",
    href: "#haar"
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "alt"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: '32px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Behandlungen",
    title: "Was bei mir m\xF6glich ist"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    onClick: () => go('preise')
  }, "Alle Preise ansehen")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '32px',
      marginTop: '48px'
    }
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    title: "Aquafacial",
    text: "Sanfte Tiefenreinigung mit Wasser statt K\xF6rnern \u2013 auch f\xFCr empfindliche Haut.",
    duration: "45 Min",
    priceFrom: "159 \u20AC"
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    title: "Needling",
    text: "Feine Nadelreize f\xFCr ein gleichm\xE4\xDFigeres Hautbild, in mehreren Sitzungen.",
    duration: "45 Min",
    priceFrom: "159 \u20AC"
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    title: "Anti-Aging",
    text: "Pflegende Behandlung f\xFCr Haut, die etwas mehr Zuwendung m\xF6chte.",
    duration: "75 Min",
    priceFrom: "185 \u20AC"
  }))), /*#__PURE__*/React.createElement(Quote, {
    source: "Manuela Mucolli"
  }, "Jede Blume bl\xFCht in ihrer eigenen Zeit."), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(OwnerIntro, {
    text: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Ich bin Manuela und in meinem Institut in Albstadt nehme ich mir Zeit f\xFCr dich und deine ganz pers\xF6nlichen Bed\xFCrfnisse."), /*#__PURE__*/React.createElement("p", null, "Dabei geht es nicht darum, dich oder dein Aussehen zu ver\xE4ndern. Es geht darum, deine Haut und dein Haar bestm\xF6glich zu unterst\xFCtzen und dir wieder ein gutes Gef\xFChl zu schenken."), /*#__PURE__*/React.createElement("p", null, "Du darfst mit deinen Fragen, Unsicherheiten und W\xFCnschen genauso kommen, wie du bist."))
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "alt"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: '48px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "desiderm-zertifiziert seit 2023"), /*#__PURE__*/React.createElement(NoticeBox, {
    tone: "medical",
    title: "Onkologische Kosmetik"
  }, "Ich begleite Menschen w\xE4hrend und nach onkologischen Behandlungen. Jede Empfehlung erfolgt in \xE4rztlicher Absprache. Kosmetische Pflege ersetzt keine \xE4rztliche Diagnose oder Behandlung.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement(Testimonial, {
    quote: "Ich habe mich vom ersten Moment an gut aufgehoben gef\xFChlt.",
    name: "Sabine K.",
    meta: "Aquafacial"
  }), /*#__PURE__*/React.createElement(Testimonial, {
    quote: "Manuela erkl\xE4rt in Ruhe, was sie macht und warum. Das kannte ich so noch nicht.",
    name: "Jens R.",
    meta: "Waxing"
  })))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/InfoScreen.jsx
try { (() => {
const {
  Section,
  SectionHeading,
  FaqAccordion,
  NoticeBox
} = window.BeautyPalastAlbstadtDesignSystem_3ff570;
const ITEMS = [{
  question: 'Bitte komm nur gesund zu deinem Termin',
  answer: 'Da ich auch Menschen während oder nach onkologischen Behandlungen begleite, bitte ich dich um Rücksichtnahme. Wenn du dich nicht wohlfühlst, ruf mich bitte vorher an – gemeinsam finden wir eine Lösung.'
}, {
  question: 'Dein erster Termin bei mir',
  answer: 'Die Buchung für Neukunden erfolgt ausschließlich online. Nach deiner Buchung bekommst du die Bestätigung und alle Informationen zur Bezahlung per E-Mail. Der erste Termin wird vorab bezahlt.'
}, {
  question: 'Bezahlung im Studio',
  answer: 'Leistungen, die direkt im Studio bezahlt werden, können ausschließlich bar beglichen werden. Eine Kartenzahlung ist derzeit nicht möglich.'
}, {
  question: 'Wenn du deinen Termin absagen musst',
  answer: 'Sage deinen Termin bitte mindestens 24 Stunden vorher ab. Bei kurzfristigeren Absagen kann eine Ausfallgebühr von bis zu 50,00 € berechnet werden.'
}, {
  question: 'Wenn du dich verspätest',
  answer: 'Bei einer Verspätung von bis zu 15 Minuten wird eine zusätzliche Gebühr von 20,00 € berechnet. Ab 20 Minuten kann die Behandlung leider nicht mehr wie geplant stattfinden.'
}];
function InfoScreen() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Kundeninformation",
    title: "Gut informiert. Entspannt bei uns ankommen.",
    lead: "Von deiner Terminbuchung bis zu deinem Besuch: Hier findest du alles, was wichtig ist."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '56px'
    }
  }, /*#__PURE__*/React.createElement(FaqAccordion, {
    items: ITEMS
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "alt",
    width: "text"
  }, /*#__PURE__*/React.createElement(NoticeBox, {
    tone: "care",
    title: "Noch etwas unklar?"
  }, "Mir ist wichtig, dass du nicht mit offenen Fragen oder einem unguten Gef\xFChl zu deinem Termin kommst. Melde dich gerne vorher bei mir.")));
}
window.InfoScreen = InfoScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/InfoScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LandingScreen.jsx
try { (() => {
const {
  Header,
  Footer,
  Button,
  Badge,
  Icon,
  Eyebrow,
  Ornament,
  Section,
  SectionHeading,
  ServiceCard
} = window.BeautyPalastAlbstadtDesignSystem_3ff570;
const FEATURES = [{
  icon: 'clock',
  title: 'Zeit für dich',
  text: 'Für jeden Termin plane ich bewusst Zeit ein.'
}, {
  icon: 'shield',
  title: 'In Absprache',
  text: 'Onkologische Kosmetik nur in ärztlicher Absprache.'
}, {
  icon: 'leaf',
  title: 'Passende Pflege',
  text: 'Manchmal braucht es nicht mehr Produkte, sondern die passenden.'
}, {
  icon: 'message-circle',
  title: 'Persönliche Antwort',
  text: 'Ich lese deine Nachricht selbst. Kein Callcenter.'
}];
function FloatingCard() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '-56px',
      bottom: '72px',
      width: '244px',
      background: 'var(--surface-card)',
      border: '1px solid var(--line-hairline)',
      borderRadius: 'var(--radius-base)',
      boxShadow: '0 18px 48px rgba(58,26,11,0.12)',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Beliebt"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '26px',
      lineHeight: 1.15,
      color: 'var(--text-strong)'
    }
  }, "Aquafacial"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-small)',
      lineHeight: 1.55,
      color: 'var(--text-body)',
      margin: 0
    }
  }, "Sanfte Tiefenreinigung mit Wasser statt K\xF6rnern."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: '12px',
      paddingTop: '12px',
      borderTop: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-small)',
      color: 'var(--text-meta)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 16
  }), "45 Min"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-price)',
      color: 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "159 \u20AC")));
}
function LandingHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '96px var(--edge-desktop) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,6fr) minmax(0,6fr)',
      gap: '72px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      paddingBottom: '96px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Kosmetikinstitut in Albstadt"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'var(--size-display)',
      lineHeight: 'var(--lh-display)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Sch\xF6nheit, die bleibt.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      fontWeight: 'var(--fw-regular)'
    }
  }, "Vertrauen, das verbindet.")), /*#__PURE__*/React.createElement(Ornament, {
    width: "200px",
    align: "left"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-lead)',
      lineHeight: 'var(--lh-lead)',
      color: 'var(--text-body)',
      maxWidth: '46ch',
      margin: 0
    }
  }, "Ob Akne, erste F\xE4ltchen, empfindliche Haut oder Haarausfall: Gemeinsam finden wir eine Behandlung und Pflege, die zu dir und deinen Bed\xFCrfnissen passt."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap',
      marginTop: '8px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    href: "#kontakt"
  }, "Termin anfragen"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: "#behandlungen"
  }, "Behandlungen ansehen")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      marginTop: '24px',
      paddingTop: '24px',
      borderTop: '1px solid var(--line-hairline)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "desiderm-zertifiziert seit 2023"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-small)',
      color: 'var(--text-meta)'
    }
  }, "Seit 2017 in der Josefstr. 3, Albstadt"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      alignSelf: 'stretch',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: '640px',
      background: 'center/cover no-repeat url(../../assets/hero-photo.png)',
      borderRadius: 'var(--radius-media)'
    }
  }), /*#__PURE__*/React.createElement(FloatingCard, null))));
}
function FeatureBand() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-alt)',
      padding: '56px var(--edge-desktop)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)'
    }
  }, FEATURES.map((ft, i) => /*#__PURE__*/React.createElement("div", {
    key: ft.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      padding: '0 32px',
      borderLeft: i === 0 ? 'none' : '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ft.icon,
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '21px',
      color: 'var(--text-strong)'
    }
  }, ft.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-small)',
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: 0
    }
  }, ft.text)))));
}
function LandingScreen() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    active: "Behandlungen",
    sticky: true,
    logoSrc: "../../assets/logo.png"
  }), /*#__PURE__*/React.createElement(LandingHero, null), /*#__PURE__*/React.createElement(FeatureBand, null), /*#__PURE__*/React.createElement(Section, {
    id: "behandlungen"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: '32px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Behandlungen",
    title: "Zwei Wege, dich zu unterst\xFCtzen"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    href: "#preise"
  }, "Alle Preise ansehen")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '32px',
      marginTop: '48px'
    }
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    title: "Gesicht und Haut",
    text: "Reinigung, Aquafacial, Needling und Anti-Aging \u2013 abgestimmt auf deine Haut.",
    duration: "40\u201375 Min",
    priceFrom: "109 \u20AC"
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    title: "Kopfhaut und Haar",
    text: "Begleitung bei Haarbruch, d\xFCnner werdendem Haar und empfindlicher Kopfhaut.",
    duration: "30 Min",
    priceFrom: "Kostenfrei"
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    title: "Waxing",
    text: "Glatte Haut f\xFCr Damen und Herren \u2013 diskret, hygienisch und in Ruhe.",
    duration: "40 Min",
    priceFrom: "55 \u20AC"
  }))), /*#__PURE__*/React.createElement(Footer, {
    logoSrc: "../../assets/logo.png"
  }));
}
window.LandingScreen = LandingScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LandingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PricingScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Section,
  SectionHeading,
  PriceRow,
  NoticeBox,
  Button
} = window.BeautyPalastAlbstadtDesignSystem_3ff570;
const GESICHT = [{
  treatment: 'Klassische Gesichtsreinigung',
  duration: '40 Min',
  price: '109 €'
}, {
  treatment: 'Aquafacial',
  duration: '45 Min',
  price: '159 €'
}, {
  treatment: 'Anti-Aging',
  duration: '75 Min',
  price: '185 €'
}, {
  treatment: 'Needling',
  duration: '45 Min',
  price: '159 €'
}, {
  treatment: 'Microdermabrasion',
  duration: '45 Min',
  price: '139 €',
  note: 'Mechanisches Abtragen der obersten Hautschüppchen'
}];
const WEITERE = [{
  treatment: 'Beratung Kopfhaut und Haar',
  duration: '30 Min',
  price: 'kostenfrei'
}, {
  treatment: 'Waxing Beine komplett',
  duration: '45 Min',
  price: '59 €'
}, {
  treatment: 'Brazilian Waxing',
  duration: '40 Min',
  price: '55 €'
}, {
  treatment: 'Behandlung für Kinder und Teenies',
  duration: '40 Min',
  price: '69 €'
}];
function PricingScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Preise",
    title: "Preisliste",
    lead: "Alle Preise verstehen sich inklusive Beratung. F\xFCr jeden Termin plane ich bewusst Zeit ein."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: '72px',
      marginTop: '56px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h3)',
      color: 'var(--text-strong)',
      marginBottom: '8px'
    }
  }, "Gesicht und Haut"), GESICHT.map(r => /*#__PURE__*/React.createElement(PriceRow, _extends({
    key: r.treatment
  }, r)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h3)',
      color: 'var(--text-strong)',
      marginBottom: '8px'
    }
  }, "Weitere Leistungen"), WEITERE.map(r => /*#__PURE__*/React.createElement(PriceRow, _extends({
    key: r.treatment
  }, r)))))), /*#__PURE__*/React.createElement(Section, {
    tone: "alt"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) auto',
      gap: '48px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(NoticeBox, {
    tone: "care",
    title: "Zahlung und Absage"
  }, "Im Studio ist derzeit nur Barzahlung m\xF6glich. Neukunden buchen online und zahlen den ersten Termin vorab. Sage deinen Termin bitte mindestens 24 Stunden vorher ab."), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('kontakt')
  }, "Termin anfragen"))));
}
window.PricingScreen = PricingScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PricingScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.FaqAccordion = __ds_scope.FaqAccordion;

__ds_ns.NoticeBox = __ds_scope.NoticeBox;

__ds_ns.OwnerIntro = __ds_scope.OwnerIntro;

__ds_ns.PriceRow = __ds_scope.PriceRow;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Ornament = __ds_scope.Ornament;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ContactForm = __ds_scope.ContactForm;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.WhatsAppButton = __ds_scope.WhatsAppButton;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.Wordmark = __ds_scope.Wordmark;

})();
