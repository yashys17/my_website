const cpus = [
  {
    name: "Intel Core i3-13100F",
    cores: 4,
    threads: 8,
    baseClock: "3.4GHz",
    price: "₹9,000",
    image: "i3.jpg",
    link: "https://www.intel.com/content/www/us/en/products/sku/230576/intel-core-i313100f-processor-12m-cache-up-to-4-50-ghz/specifications.html"
  },
  {
    name: "Intel Core i5-13600K",
    cores: 14,
    threads: 20,
    baseClock: "3.5GHz",
    price: "₹26,000",
    image: "i5.jpg",
    link: "https://www.intel.com/content/www/us/en/products/sku/230493/intel-core-i513600k-processor-24m-cache-up-to-5-10-ghz/specifications.html"
  },
  {
    name: "Intel Core ultra5-245K",
    cores: 14,
    threads: 14,
    baseClock: "3.6GHz",
    price: "₹29,600",
    image: "ultra5.jpg",
    link: "https://www.intel.com/content/www/us/en/products/sku/241067/intel-core-ultra-5-processor-245k-24m-cache-up-to-5-20-ghz/specifications.html"
  },
  {
    name: "Intel Core i7-13700K",
    cores: 16,
    threads: 24,
    baseClock: "3.4GHz",
    price: "₹34,000",
    image: "i7.jpg",
    link: "https://www.intel.com/content/www/us/en/products/sku/230500/intel-core-i713700k-processor-30m-cache-up-to-5-40-ghz/specifications.html"
  },
  {
    name: "Intel Core ultra7-265K",
    cores: 20,
    threads: 20,
    baseClock: "3.3GHz",
    price: "₹39,900",
    image: "ultra7.jpg",
    link: "https://www.intel.com/content/www/us/en/products/sku/241063/intel-core-ultra-7-processor-265k-30m-cache-up-to-5-50-ghz/specifications.html"
  },
  {
    name: "Intel Core i9-13900K",
    cores: 24,
    threads: 32,
    baseClock: "3.0GHz",
    price: "₹49,000",
    image: "i9.jpg",
    link: "https://www.intel.com/content/www/us/en/products/sku/230496/intel-core-i913900k-processor-36m-cache-up-to-5-80-ghz/specifications.html"
  },
  {
    name: "Intel Core ultra9-285K",
    cores: 24,
    threads: 24,
    baseClock: "3.2GHz",
    price: "₹55,150",
    image: "ultra9.jpg",
    link: "https://www.intel.com/content/www/us/en/products/sku/241060/intel-core-ultra-9-processor-285k-36m-cache-up-to-5-70-ghz/specifications.html"
  },
  {
    name: "AMD Ryzen 3 4100",
    cores: 4,
    threads: 8,
    baseClock: "3.8GHz",
    price: "₹7,500",
    image: "ryzen3.jpg",
    link: "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-4000-series/amd-ryzen-3-4100.html"
  },
  {
    name: "AMD Ryzen 5 7600X",
    cores: 6,
    threads: 12,
    baseClock: "4.7GHz",
    price: "₹19,000",
    image: "ryzen5.jpg",
    link: "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-5-7600x.html"
  },
  {
    name: "AMD Ryzen 7 7700X",
    cores: 8,
    threads: 16,
    baseClock: "4.5GHz",
    price: "₹27,000",
    image: "ryzen7.jpg",
    link: "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-7-7700x.html"
  },
  {
    name: "AMD Ryzen 9 7950X",
    cores: 16,
    threads: 32,
    baseClock: "4.5GHz",
    price: "₹54,000",
    image: "ryzen9.jpg",
    link: "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-9-7950x.html"
  },
  {
    name: "AMD Threadripper PRO 5995WX",
    cores: 64,
    threads: 128,
    baseClock: "2.7GHz",
    price: "₹5,30,000",
    image: "threadripper.jpg",
    link: "https://www.amd.com/en/products/processors/workstations/ryzen-threadripper.html#performance"
  }
];

const gpus = [
  {
    name: "NVIDIA GeForce GTX 1650",
    memory: "4GB GDDR5",
    boostClock: "1.66GHz",
    price: "₹11,000",
    image: "gtx1650.jpg",
    link: "https://www.nvidia.com/en-ph/geforce/graphics-cards/16-series/"
  },
  {
    name: "NVIDIA GeForce RTX 3060",
    memory: "12GB GDDR6",
    boostClock: "1.78GHz",
    price: "₹26,000",
    image: "rtx3060.jpg",
    link: "https://www.nvidia.com/en-in/geforce/graphics-cards/30-series/rtx-3060-3060ti/"
  },
  {
    name: "NVIDIA GeForce RTX 4070",
    memory: "12GB GDDR6X",
    boostClock: "2.48GHz",
    price: "₹55,000",
    image: "rtx4070.jpg",
    link: "https://www.nvidia.com/en-in/geforce/graphics-cards/40-series/rtx-4070-family/"
  },
  {
    name: "NVIDIA GeForce RTX 4090",
    memory: "24GB GDDR6X",
    boostClock: "2.52GHz",
    price: "₹1,50,000",
    image: "rtx4090.jpg",
    link: "https://www.nvidia.com/en-in/geforce/graphics-cards/40-series/rtx-4090/"
  },
  {
    name: "NVIDIA GeForce RTX 5070Ti",
    memory: "12GB GDDR7",
    boostClock: "2.50GHz",
    price: "₹64,660",
    image: "rtx5070ti.jpg",
    link: "https://www.nvidia.com/en-in/geforce/graphics-cards/50-series/rtx-5070-family/"
  },
  {
    name: "NVIDIA GeForce RTX 5090",
    memory: "32GB GDDR7",
    boostClock: "2.60GHz",
    price: "₹3,80,000",
    image: "rtx5090.jpg",
    link: "https://www.nvidia.com/en-in/geforce/graphics-cards/50-series/rtx-5090/"
  },
  {
    name: "AMD Radeon RX 6600",
    memory: "8GB GDDR6",
    boostClock: "2.49GHz",
    price: "₹17,000",
    image: "rx6600.jpg",
    link: "https://www.amd.com/en/products/graphics/desktops/radeon/6000-series/amd-radeon-rx-6600.html"
  },
  {
    name: "AMD Radeon RX 6700 XT",
    memory: "12GB GDDR6",
    boostClock: "2.58GHz",
    price: "₹32,000",
    image: "rx6700xt.jpg",
    link: "https://www.amd.com/en/products/graphics/desktops/radeon/6000-series/amd-radeon-rx-6700-xt.html"
  },
  {
    name: "AMD Radeon RX 7900 XT",
    memory: "20GB GDDR6",
    boostClock: "2.4GHz",
    price: "₹72,000",
    image: "rx7900xt.jpg",
    link: "https://www.amd.com/en/products/graphics/desktops/radeon/7000-series/amd-radeon-rx-7900xt.html"
  },
  {
    name: "AMD Radeon RX 7900 XTX",
    memory: "24GB GDDR6",
    boostClock: "2.5GHz",
    price: "₹85,000",
    image: "rx7900xtx.jpg",
    link: "https://www.amd.com/en/products/graphics/desktops/radeon/7000-series/amd-radeon-rx-7900xtx.html"
  }
];

function displayHardware(data, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    const detailsHTML = Object.entries(item).map(([key, value]) => {
      if (key !== "name" && key !== "image" && key !== "link") {
        return `<p><strong>${key}:</strong> ${value}</p>`;
      }
      return "";
    }).join("");

    card.innerHTML = `
      <h3>${item.name}</h3>
      <div class="details">
        ${detailsHTML}
        <div class="image-box">
          ${item.link ? `<a href="${item.link}" target="_blank"><img src="${item.image}" alt="${item.name}" /></a>` : `<img src="${item.image}" alt="${item.name}" />`}
        </div>
      </div>
    `;

    card.addEventListener("click", (e) => {
      if (e.target.tagName.toLowerCase() !== "img") {
        card.classList.toggle("active");
      }
    });

    container.appendChild(card);
  });
}

displayHardware(cpus, "cpu-list");
displayHardware(gpus, "gpu-list");
