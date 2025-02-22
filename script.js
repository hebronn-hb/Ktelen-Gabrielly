document.addEventListener('DOMContentLoaded', function() {
  // Inicializa o Swiper
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  // // Processa o formulário de agendamento
  // const form = document.getElementById('agenda-form');
  // form.addEventListener('submit', function(event) {
  //   event.preventDefault(); // Impede o envio padrão do formulário

  //   // Coleta os dados do formulário
  //   const nome = document.getElementById('nome').value;
  //   const email = document.getElementById('email').value;
  //   const telefone = document.getElementById('atsapptelefone').value;
  //   const data = document.getElementById('data').value;
  //   const horario = document.getElementById('horario').value;
  //   const servico = document.getElementById('servico').value;

  //   // Simula o envio dos dados (você pode substituir isso por uma chamada AJAX real)
  //   console.log('Dados do agendamento:');
  //   console.log('Nome:', nome);
  //   console.log('Email:', email);
  //   console.log('Telefone:', telefone);
  //   console.log('Data:', data);
  //   console.log('Horário:', horario);
  //   console.log('Serviço:', servico);

  //   // Exibe uma mensagem de sucesso (você pode personalizar isso)
  //   alert('Agendamento realizado com sucesso!');

  //   // Limpa o formulário
  //   form.reset();
  // });
});