import pollutionImage from "@/assets/pollution.jpg";
import ecosystemImage from "@/assets/ecosystem.jpg";
import renewableImage from "@/assets/renewable-energy.jpg";
import waterPollutionImage from "@/assets/water-pollution.jpg";
import soilPollutionImage from "@/assets/soil-pollution.jpg";
import noisePollutionImage from "@/assets/noise-pollution.jpg";
import amazonRainforestImage from "@/assets/amazon-rainforest.jpg";
import energyPyramidImage from "@/assets/energy-pyramid.jpg";
import nonRenewableImage from "@/assets/non-renewable-resources.jpg";
import sustainableManagementImage from "@/assets/sustainable-management.jpg";

interface ContentItem {
  title: string;
  description: string;
  content: string;
  tags?: string[];
  image?: string;
  links?: { label: string; url: string }[];
}

interface EnvironmentalSection {
  id: string;
  title: string;
  subtitle: string;
  items: ContentItem[];
}

export const environmentalSections: Record<string, EnvironmentalSection> = {
  introduction: {
    id: "introduction",
    title: "Introduction to Environmental Studies",
    subtitle: "Understanding the fundamental concepts of environmental science and its importance for our planet's future.",
    items: [
      {
        title: "Definition & Scope",
        description: "Environmental studies is an interdisciplinary field that integrates physical, biological, and social sciences.",
        content: "Environmental studies is the systematic study of the environment and the solution of environmental problems. It covers atmospheric, aquatic, terrestrial, and space environments including physical environment (air, water, soil), biological environment (plants, animals, microorganisms), and social environment (culture, politics, economics).",
        tags: ["Interdisciplinary", "Science", "Environment"],
      },
      {
        title: "Environmental Movements Timeline",
        description: "Key milestones in the history of environmental awareness and conservation efforts.",
        content: "1962: Rachel Carson publishes 'Silent Spring' • 1970: First Earth Day celebrated • 1972: UN Conference on Human Environment (Stockholm) • 1987: Montreal Protocol on Ozone Depletion • 1992: Earth Summit in Rio de Janeiro • 2015: Paris Climate Agreement",
        tags: ["History", "Milestones", "Conservation"],
      },
      {
        title: "Importance of Environmental Studies",
        description: "Why environmental education is crucial for sustainable development and human survival.",
        content: "Environmental studies helps us understand human impact on natural systems, sustainable resource management, climate change mitigation strategies, biodiversity conservation methods, and environmental policy development. It's essential for creating a sustainable future.",
        tags: ["Education", "Sustainability", "Future"],
      },
    ],
  },

  pollution: {
    id: "pollution",
    title: "Pollution and Its Impacts",
    subtitle: "Exploring different types of pollution, their sources, effects on ecosystems and human health, and prevention strategies.",
    items: [
      {
        title: "Air Pollution",
        description: "Contamination of the atmosphere by harmful substances from vehicles, industries, and natural sources.",
        image: pollutionImage,
        content: "Major sources include vehicle emissions (CO, NOx, PM), industrial smokestacks (SO2, heavy metals), power plants (particulate matter), and agricultural burning. Health effects include respiratory diseases, cardiovascular problems, and cancer. Prevention involves cleaner technologies, renewable energy, and stricter regulations.",
        tags: ["Air Quality", "Health", "Industrial"],
        links: [
          { label: "WHO Air Quality", url: "https://who.int/health-topics/air-pollution" }
        ],
      },
      {
        title: "Water Pollution",
        description: "Contamination of water bodies by harmful substances affecting aquatic life and human health.",
        image: waterPollutionImage,
        content: "Types include chemical pollution (pesticides, fertilizers), biological pollution (bacteria, viruses), physical pollution (plastic, debris), and thermal pollution (heated water discharge). Prevention strategies include wastewater treatment, sustainable agriculture, and plastic reduction.",
        tags: ["Water Quality", "Aquatic Life", "Chemicals"],
      },
      {
        title: "Soil Pollution", 
        description: "Degradation of soil quality due to chemical contamination affecting agriculture and ecosystems.",
        image: soilPollutionImage,
        content: "Causes include excessive use of pesticides and fertilizers, industrial waste disposal, oil spills and chemical leaks, and heavy metals from mining. Impact includes reduced crop yields, groundwater contamination, and ecosystem disruption.",
        tags: ["Soil Health", "Agriculture", "Contamination"],
      },
      {
        title: "Noise Pollution",
        description: "Excessive or harmful levels of noise in the environment causing health issues and disrupting wildlife.",
        image: noisePollutionImage,
        content: "Major sources include traffic (vehicles, aircraft), construction activities, industrial machinery, and urban development. Health effects include hearing loss, sleep disturbance, cardiovascular problems, and increased stress levels. Prevention involves sound barriers, quieter technologies, and urban planning regulations.",
        tags: ["Sound Levels", "Health Impact", "Urban"],
        links: [
          { label: "EPA Noise Pollution", url: "https://www.epa.gov/clean-air-act-overview/title-iv-noise-pollution" }
        ],
      },
    ],
  },

  ecology: {
    id: "ecology",
    title: "Ecology and Ecosystems",
    subtitle: "Understanding the intricate relationships between organisms and their environment, from food webs to energy flow.",
    items: [
      {
        title: "Ecosystem Components",
        description: "The building blocks of ecosystems: producers, consumers, decomposers, and their interactions.",
        image: ecosystemImage,
        content: "Biotic components include producers (plants, algae), primary consumers (herbivores), secondary consumers (carnivores), and decomposers (bacteria, fungi). Abiotic components include temperature, light, water, soil, and minerals. These interact to create complex food webs and energy flows.",
        tags: ["Food Chain", "Energy Flow", "Interactions"],
      },
      {
        title: "Amazon Rainforest",
        description: "The world's largest tropical rainforest, home to incredible biodiversity and crucial for global climate.",
        image: amazonRainforestImage,
        content: "The Amazon covers 6.7 million km² across 9 countries, contains 10% of known species on Earth, produces 20% of world's oxygen, and stores 90-140 billion tons of carbon. Major threats include deforestation, mining, and agriculture expansion.",
        tags: ["Rainforest", "Biodiversity", "Carbon Storage"],
        links: [
          { label: "WWF Amazon", url: "https://www.worldwildlife.org/places/amazon" }
        ],
      },
      {
        title: "Energy Flow Pyramid",
        description: "Understanding how energy moves through trophic levels in ecosystems with 10% efficiency rule.",
        image: energyPyramidImage,
        content: "Energy flows through trophic levels: Level 4 - Apex predators (10 kcal/m²), Level 3 - Secondary consumers (100 kcal/m²), Level 2 - Primary consumers (1,000 kcal/m²), Level 1 - Producers (10,000 kcal/m²). The 10% Rule states that only 10% of energy transfers between levels.",
        tags: ["Energy Transfer", "Trophic Levels", "Efficiency"],
      },
    ],
  },

  biodiversity: {
    id: "biodiversity",
    title: "Biodiversity and Conservation",
    subtitle: "Exploring the variety of life on Earth, its importance, threats, and conservation strategies to protect our natural heritage.",
    items: [
      {
        title: "Types of Biodiversity",
        description: "Understanding genetic, species, and ecosystem diversity that makes life on Earth possible.",
        content: "Three levels of biodiversity: Genetic Diversity (variation within species), Species Diversity (number of different species), and Ecosystem Diversity (variety of habitats). Globally, approximately 8.7 million species are estimated to exist, but only 1.2 million have been identified.",
        tags: ["Genetic", "Species", "Ecosystem"],
      },
      {
        title: "Conservation Strategies",
        description: "In-situ and ex-situ conservation methods to protect endangered species and habitats.",
        content: "In-situ conservation includes national parks, wildlife sanctuaries, biosphere reserves, and protected marine areas. Ex-situ conservation involves zoos, botanical gardens, seed banks, and cryopreservation. Both approaches are essential for comprehensive biodiversity protection.",
        tags: ["Protection", "Reserves", "Conservation"],
      },
      {
        title: "Biodiversity Hotspots",
        description: "Regions with exceptional biodiversity that are under severe threat from human activities.",
        content: "Hotspots are defined by having >1,500 endemic plant species and <30% original habitat remaining. Major hotspots include Madagascar & Indian Ocean Islands, Western Ghats & Sri Lanka, Atlantic Forest (Brazil), and Caribbean Islands.",
        tags: ["Hotspots", "Endemic", "Threatened"],
        links: [
          { label: "Conservation International", url: "https://www.conservation.org/priorities/biodiversity-hotspots" }
        ],
      },
    ],
  },

  resources: {
    id: "resources",
    title: "Natural Resources",
    subtitle: "Exploring renewable and non-renewable resources, sustainable usage, and the transition to clean energy for our future.",
    items: [
      {
        title: "Renewable Energy Sources",
        description: "Clean, sustainable energy sources that can help combat climate change and reduce pollution.",
        image: renewableImage,
        content: "Major renewable sources include Solar (1,000+ TW potential globally), Wind (59 TW potential globally), Hydroelectric (16% of global electricity), and Geothermal (15 GW installed worldwide). Benefits include zero emissions, infinite supply, and job creation.",
        tags: ["Solar", "Wind", "Hydroelectric", "Clean Energy"],
        links: [
          { label: "IRENA Global Energy", url: "https://www.irena.org/" }
        ],
      },
      {
        title: "Non-Renewable Resources",
        description: "Finite resources including fossil fuels and minerals that require careful management and alternatives.",
        image: nonRenewableImage,
        content: "Fossil fuel reserves include Coal (1,139 billion tons), Oil (1.73 trillion barrels), and Natural Gas (188 trillion m³). Environmental impacts include CO₂ emissions, air pollution, and habitat destruction. Transitioning to renewables is essential.",
        tags: ["Fossil Fuels", "Mining", "Finite"],
      },
      {
        title: "Sustainable Resource Management",
        description: "Principles and practices for using natural resources responsibly to ensure availability for future generations.",
        image: sustainableManagementImage,
        content: "Key principles include Reduce consumption and waste, Reuse materials when possible, Recycle to minimize extraction, and Replace with renewable alternatives. The circular economy model designs out waste, keeps products in use, and regenerates natural systems.",
        tags: ["Sustainability", "Circular Economy", "Conservation"],
      },
    ],
  },

  humanImpact: {
    id: "human-impact",
    title: "Human and Environment",
    subtitle: "Examining how human activities affect the environment and exploring individual and collective responsibilities for sustainable living.",
    items: [
      {
        title: "Population & Urbanization",
        description: "The impact of growing population and urban development on natural resources and ecosystems.",
        content: "Current global population exceeds 8 billion people, with 56% (4.4 billion) living in urban areas. By 2050, 68% of the population is projected to be urban. This creates increased environmental pressure through higher resource demand, habitat loss, and pollution.",
        tags: ["Population", "Urban Planning", "Resource Demand"],
      },
      {
        title: "Individual Environmental Actions",
        description: "Daily habits and choices that can significantly reduce your environmental footprint.",
        content: "10 Daily Green Habits: Use renewable energy at home, Reduce-reuse-recycle, Choose sustainable transportation, Eat more plant-based foods, Conserve water and energy, Support eco-friendly products, Plant trees, Educate others, Participate in cleanups, Vote for environmental policies.",
        tags: ["Personal Action", "Sustainability", "Lifestyle"],
      },
      {
        title: "Environmental Laws & Ethics",
        description: "Legal frameworks and ethical principles guiding environmental protection and sustainable development.",
        content: "Key international agreements include Paris Climate Agreement (2015), Convention on Biological Diversity, Kyoto Protocol, and Montreal Protocol. Environmental ethics emphasizes the intrinsic value of nature, intergenerational justice, and the precautionary principle.",
        tags: ["Policy", "Ethics", "International Law"],
        links: [
          { label: "UN Environment", url: "https://www.unep.org/" }
        ],
      },
    ],
  },
};