// src/apiService.ts

export const getProviders = async () => {
    const response = await fetch('https://api.apis.guru/v2/providers.json');
    return response.json();
  };
  
  export const getProviderApis = async (providerName: string) => {
    const response = await fetch(`https://api.apis.guru/v2/${providerName}.json`);
    return response.json();
  };
  