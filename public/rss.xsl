<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="yes"/>

  <xsl:template match="/">
    <html lang="fr">
      <head>
        <meta charset="UTF-8"/>
        <title><xsl:value-of select="rss/channel/title"/></title>
        <style>
          body { font-family: Inter, system-ui, sans-serif; margin: 0; padding: 2rem; background: #02040c; color: #e5e7eb; }
          .page { max-width: 900px; margin: auto; }
          a { color: #7dd3fc; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .header { margin-bottom: 2rem; }
          .title { font-size: 2rem; margin-bottom: 0.5rem; }
          .description { color: #9ca3af; margin-bottom: 1rem; }
          .meta { font-size: 0.92rem; color: #94a3b8; }
          .item { border: 1px solid rgba(148, 163, 184, 0.16); border-radius: 1rem; padding: 1.4rem; margin-bottom: 1rem; background: rgba(15, 23, 42, 0.8); }
          .item-title { font-size: 1.15rem; margin-bottom: 0.5rem; }
          .item-description { color: #cbd5e1; margin-bottom: 0.75rem; line-height: 1.65; }
          .item-meta { display: flex; flex-wrap: wrap; gap: 1rem; font-size: 0.92rem; color: #94a3b8; }
          .read-more { color: #38bdf8; font-weight: 600; }
          .footer { margin-top: 2rem; padding-top: 1rem; border-top: 1px solid rgba(148, 163, 184, 0.12); color: #94a3b8; font-size: 0.92rem; }
        </style>
      </head>
      <body>
        <div class="page">
          <div class="header">
            <div class="title"><xsl:value-of select="rss/channel/title"/></div>
            <div class="description"><xsl:value-of select="rss/channel/description"/></div>
            <div class="meta">
              <span><strong>Flux :</strong> <xsl:value-of select="rss/channel/link"/></span>
              <span><strong>Dernière mise à jour :</strong> <xsl:value-of select="rss/channel/lastBuildDate"/></span>
            </div>
          </div>

          <xsl:for-each select="rss/channel/item">
            <div class="item">
              <div class="item-title"><xsl:value-of select="title"/></div>
              <div class="item-description"><xsl:value-of select="description" disable-output-escaping="yes"/></div>
              <div class="item-meta">
                <span><strong>Publié :</strong> <xsl:value-of select="pubDate"/></span>
                <span><a class="read-more" href="{link}" target="_blank" rel="noopener">Lire l’article</a></span>
              </div>
            </div>
          </xsl:for-each>

          <div class="footer">
            Ce flux est généré depuis le portfolio. Il est compatible avec les lecteurs RSS, mais s’affiche aussi comme une page lisible dans un navigateur.
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
