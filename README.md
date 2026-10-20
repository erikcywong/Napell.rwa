# Napell RWA

Agricultural-capacity RWA origination & attestation — structuring aeroponic coffee assets into investable instruments. Hong Kong issuance front-end, professional-investors-only, PRC data-export compliance built in.

**Live:** https://erikcywong.github.io/Napell.rwa/

## The thesis (opinionated on purpose)

1. **Data is the proof layer, not the underlying asset.** No pure data-rights STO has ever cleared in Hong Kong. Contracts do.
2. **Seedlings & tissue-culture licences are the cash flow, not roasted dreams.** ~HK$8,000/m²/yr gross vs ~HK$66 for green beans. Coffee beans are the narrative; plantlets are the business.
3. **Liquidity is not the selling point.** PI-only, near-zero secondary. We sell yield + offtake rights to industry buyers.
4. **Under HK$30m, don't do an STO.** One strategic private note beats it on cost, speed, and honesty.

Full critical review: [`BUSINESS-MODEL.md`](./BUSINESS-MODEL.md)

## Pages

| Page | Content |
|---|---|
| `index.html` | Thesis, dual gateway (asset owners / investors), three judgements, revenue lines |
| `asset.html` | Asset definition, unit economics (×121 chart), asset-class comparison, proof-layer uses |
| `compliance.html` | PRC data-export triage (SCC filing / PIP cert / security assessment) + decision tree, SFC paths, Cayman vs HK SPV |
| `structure.html` | Revenue-share note + offtake option: stack, term sheet, use of proceeds, risk factors |
| `process.html` | 7 stages, 6 gates, 9-month gantt, full cost table, scale break-even |
| `model.html` | Four revenue lines, 3-year P&L build, fixed-cost stack, sensitivity, discipline rules |
| `investor.html` | PI gate (4-point attestation), reference terms, DD pack, who it's for / not for |

## Stack

Multi-page static HTML, no build step, no framework. Shared `assets/css/style.css` + `assets/js/site.js` (scroll progress, reveal, mobile menu, PI gate). Hand-rolled SVG charts — zero chart libraries, zero CDNs except Google Fonts.

```bash
python -m http.server 8080    # then open http://localhost:8080
```

## Design

x.com dark chrome: `#000` bg, `#1d9bf0` accent, `#00ba7c` up, `#f4212e` down, `#e7e9ea` / `#71767b` text, hairline `#202426` borders, floating blurred navbar with hover dropdowns, mono microcopy, tabular numerics.

## Disclaimer

Marketing and structuring discussion only. Not an offer, solicitation, or recommendation to buy any security or virtual asset, and not an offer under the SFO. Any issuance contemplated here would be restricted to Professional Investors and arranged through licensed institutions. Not legal, tax, or investment advice. Napell RWA is not authorised by the SFC.
