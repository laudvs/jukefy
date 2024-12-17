document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generate-btn");
  const resetBtn = document.getElementById("reset-btn");
  const shareBtn = document.getElementById("share-btn");
  const userText = document.getElementById("user-text");
  const playlistSection = document.getElementById("playlist-section");
  const playlistList = document.getElementById("playlist");
  const loadingIndicator = document.getElementById("loading");
  const historySection = document.getElementById("history-section");
  const historyList = document.getElementById("history");

  let playlistHistory = [];

  generateBtn.addEventListener("click", () => {
      const text = userText.value.trim();
      if (!text) {
          alert("Por favor, insira algum texto!");
          return;
      }

      loadingIndicator.classList.remove("hidden");
      playlistSection.classList.add("hidden");

      // Simula carregamento
      setTimeout(() => {
          loadingIndicator.classList.add("hidden");
          playlistSection.classList.remove("hidden");

          // Simula geração de playlist
          const fakePlaylist = [
              { name: "Happy Song", artist: "Artist 1" },
              { name: "Chill Vibes", artist: "Artist 2" },
              { name: "Sad Tune", artist: "Artist 3" }
          ];

          // Atualiza a lista de músicas
          playlistList.innerHTML = "";
          fakePlaylist.forEach(track => {
              const li = document.createElement("li");
              li.textContent = `${track.name} - ${track.artist}`;
              playlistList.appendChild(li);
          });

          // Adiciona ao histórico
          addToHistory(fakePlaylist);
      }, 2000); // Simula 2 segundos de processamento
  });

  resetBtn.addEventListener("click", () => {
      userText.value = "";
      playlistSection.classList.add("hidden");
      playlistList.innerHTML = "";
  });

  shareBtn.addEventListener("click", () => {
      const playlistText = playlistList.innerText.trim();
      if (navigator.share) {
          navigator.share({
              title: 'Minha Playlist Personalizada',
              text: `Confira a playlist que eu criei:\n${playlistText}`
          }).catch(error => console.error("Erro ao compartilhar:", error));
      } else {
          alert("Compartilhamento não suportado neste dispositivo.");
      }
  });

  function addToHistory(playlist) {
      playlistHistory.push(playlist);

      const historyItem = document.createElement("li");
      historyItem.textContent = playlist.map(track => `${track.name} - ${track.artist}`).join(", ");
      historyList.appendChild(historyItem);

      historySection.classList.remove("hidden");
  }
});
