
  // determina a língua
  let languageStorage = localStorage.getItem("idioma") || "en";
  // define o caminho base conforme o idioma
  const basePath = languageStorage === "en" ? "./assets" : "../assets";



  // array de eventos com textos para cada idioma
  const events = [
    {
      year: { en: "Our Partners", pt: "Nossos Parceiros", es: "Nuestros Socios" },
      text: {
        en: "We personally select top‑quality ginger producers in Brazil to ensure the best product.",
        pt: "Selecionamos pessoalmente produtores de gengibre de alta qualidade no Brasil para garantir o melhor produto.",
        es: "Seleccionamos personalmente productores de jengibre de alta calidad en Brasil para garantizar el mejor producto."
      },
      img: `${basePath}/img/partners/logo1.png`
    },
    {
      year: { en: "Logistics", pt: "Logística", es: "Logística" },
      text: {
        en: "Our trucks transport the ginger from the fields to our packing house with efficiency and care.",
        pt: "Nossos caminhões transportam o gengibre dos campos até nossa unidade de embalagem com eficiência e cuidado.",
        es: "Nuestros camiones transportan el jengibre desde los campos hasta nuestra planta de empaque con eficiencia y cuidado."
      },
      img: `${basePath}/img/partners/logo2.png`
    },
    {
      year: { en: "Processing", pt: "Processamento", es: "Procesamiento" },
      text: {
        en: "We conduct a thorough quality review before consolidating the shipment. Our state‑of‑the‑art cold storage chamber, equipped with ozone treatment, preserves the ginger’s freshness.",
        pt: "Realizamos uma rigorosa revisão de qualidade antes de consolidar o embarque. Nossa câmara frigorífica de última geração, equipada com tratamento por ozônio, preserva a frescura do gengibre.",
        es: "Llevamos a cabo una revisión exhaustiva de calidad antes de consolidar el envío. Nuestra cámara frigorífica de última generación, equipada con tratamiento de ozono, preserva la frescura del jengibre."
      },
      img: `${basePath}/img/partners/logo3.png`
    },
    {
      year: { en: "Storage", pt: "Armazenagem", es: "Almacenamiento" },
      text: {
        en: "A pre‑chilling transformer prepares the container to maintain the same temperature as the storage chamber throughout transit.",
        pt: "Um pré‑resfriador prepara o contêiner para manter a mesma temperatura da câmara frigorífica durante todo o trânsito.",
        es: "Un pre‑enfriador prepara el contenedor para mantener la misma temperatura que la cámara frigorífica durante todo el tránsito."
      },
      img: `${basePath}/img/partners/logo4.png`
    },
    {
      year: { en: "Ready to go!", pt: "Pronto Para Partir!", es: "¡Listo Para Salir!" },
      text: {
        en: "Our trucks deliver the container to the nearest port, optimizing transit times.",
        pt: "Nossos caminhões levam o contêiner até o porto mais próximo, otimizando os tempos de trânsito.",
        es: "Nuestros camiones llevan el contenedor al puerto más cercano, optimizando los tiempos de tránsito."
      },
      img: `${basePath}/img/partners/logo5.png`
    },
    {
      year: { en: "Logistics", pt: "Logística", es: "Logística" },
      text: {
        en: "At the port, our representative supervises the inspection process and oversees the issuance of the phytosanitary certificate.",
        pt: "No porto, nosso representante supervisiona o processo de inspeção e acompanha a emissão do certificado fitossanitário.",
        es: "En el puerto, nuestro representante supervisa el proceso de inspección y vela por la emisión del certificado fitosanitario."
      },
      img: `${basePath}/img/partners/logo6.png`
    },
    {
      year: { en: "Processing", pt: "Processamento", es: "Procesamiento" },
      text: {
        en: "Please check the availability of our products for your desired destination.",
        pt: "Por favor, verifique a disponibilidade de nossos produtos para o destino desejado.",
        es: "Por favor, compruebe la disponibilidad de nuestros productos para el destino deseado."
      },
      img: `${basePath}/img/partners/logo7.png`
    },
    {
      year: { en: "To the world!", pt: "Para o Mundo!", es: "¡Al Mundo!" },
      text: {
        en: "Please check the availability for your desired destination.",
        pt: "Por favor, verifique a disponibilidade para o destino desejado.",
        es: "Por favor, compruebe la disponibilidad para el destino deseado."
      },
      img: `${basePath}/img/partners/logo8.png`
    }
  ];

  let currentIndex = 0;

  function updateTimeline(index) {
    const ev = events[index];
  
    // desativa todos e reduz opacidade
    $(".timeline-item").removeClass("active").css("opacity", "0.5");
  
    // ativa o item atual
    const $item = $(`.timeline-item[data-index='${index}']`);
    $item.addClass("active").css("opacity", "1");
  
    // atualiza o <span> interno com o ano/título correto
    $item.find("span").text(ev.year[languageStorage]);
  
    // atualiza texto principal
    $("#timeline-text")
      .removeClass("show")
      .text(ev.text[languageStorage]);
    setTimeout(() => {
      $("#timeline-text").addClass("show");
    }, 50);
  }
  

  $(document).ready(() => {
    // carrega todas as imagens de uma vez, substituindo o HTML original
    $(".timeline-item").each(function() {
      const idx = parseInt($(this).attr("data-index"), 10);
      $(this)
        .find(".icon")
        .html(
          `<img src="${events[idx].img}" class="img-fluid" alt="Logo ${idx + 1}" />`
        );
  
      // carrega o span interno de cada item com o título/ano correto
      $(this)
        .find("span")
        .text(events[idx].year[languageStorage]);
    });
  
    // inicializa texto e estado do slider de uma vez
    updateTimeline(currentIndex);
  
    // resto dos bindings...
    $("#next").click(() => {
      currentIndex = (currentIndex + 1) % events.length;
      updateTimeline(currentIndex);
    });
    $("#prev").click(() => {
      currentIndex = (currentIndex - 1 + events.length) % events.length;
      updateTimeline(currentIndex);
    });
    $(".timeline-item").click(function() {
      currentIndex = parseInt($(this).attr("data-index"), 10);
      updateTimeline(currentIndex);
    });
  
    setInterval(() => {
      currentIndex = (currentIndex + 1) % events.length;
      updateTimeline(currentIndex);
    }, 6000);
  });
  

