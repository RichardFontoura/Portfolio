window.addEventListener('scroll', function() {
    var liguagensSection = document.querySelector('.liguagens');
    var sectionPosition = liguagensSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
  
    if (sectionPosition < screenPosition) {
      liguagensSection.classList.add('aparecer');
    }
  });

  document.addEventListener("DOMContentLoaded", function(event) {
    var corpo2 = document.querySelector('.corpo2');
    var corpo2OffsetTop = corpo2.offsetTop;
    
    function handleScroll() {
      var scrollPosition = window.scrollY;
      var windowHeight = window.innerHeight;
      
      if (scrollPosition > corpo2OffsetTop - windowHeight + 100) {
        corpo2.classList.add('aparecer');
      }
    }
    
    window.addEventListener('scroll', handleScroll);
  });

  window.addEventListener('scroll', function() {
    var sectionProjetos = document.querySelector('.projetos');
    var sectionProjetosOffsetTop = sectionProjetos.offsetTop;
    var windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (windowScrollTop > sectionProjetosOffsetTop - window.innerHeight + 200) {
      sectionProjetos.classList.add('aparecer');
    }
  });