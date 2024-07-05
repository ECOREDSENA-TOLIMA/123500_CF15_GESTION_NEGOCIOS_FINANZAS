<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") El mercadeo estratégico y el costo de la gestión comercial, se constituyen en dos elementos importantes de la política de cualquier empresa del siglo XXI, ya que en la actualidad los sistemas informáticos han llegado con el fin de dar la vuelta a todos los procesos y estructuras organizacionales, por lo que es vital, que como parte de la adaptación a la innovación y transformación digital se cree una cultura que promueva la investigación del mercado que usa medios digitales para suplir sus necesidades y se diseñen estrategias para posicionar la marca o el producto en un medio global hoy por hoy; por esa razón, a continuación, se muestra de manera sucinta esto y el proceso mencionado en este componente formativo, por lo que le invito a ver el mapa conceptual:

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Mapa conceptual que resume de manera puntual la temática abordada en este componente formativo, destacando que para que haya un adecuado mercadeo estratégico y costeo de la gestión comercial, se debe tener en cuenta el análisis de la información y el direccionamiento estratégico.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
