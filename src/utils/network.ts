// Network utility functions to handle connectivity issues

export const isOnline = (): boolean => {
  return navigator.onLine;
};

export const checkServerConnection = async (url: string = window.location.origin): Promise<boolean> => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
    
    const response = await fetch(`${url}/`, {
      method: 'HEAD',
      mode: 'no-cors',
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    return true;
  } catch (error) {
    console.warn('Server connection check failed:', error);
    return false;
  }
};

export const waitForConnection = (callback: () => void, maxRetries: number = 10): void => {
  let retries = 0;
  
  const checkConnection = async () => {
    if (isOnline() && await checkServerConnection()) {
      callback();
      return;
    }
    
    retries++;
    if (retries < maxRetries) {
      setTimeout(checkConnection, 2000); // Retry every 2 seconds
    } else {
      console.error('Max connection retries reached');
    }
  };
  
  checkConnection();
};

// Add global error handler for fetch failures
if (typeof window !== 'undefined') {
  const originalFetch = window.fetch;
  window.fetch = async (...args) => {
    try {
      const response = await originalFetch(...args);
      return response;
    } catch (error) {
      console.warn('Fetch error caught:', error);
      
      // If it's a network error and we're offline, throw a more descriptive error
      if (!isOnline()) {
        throw new Error('Network error: You appear to be offline');
      }
      
      // Re-throw the original error
      throw error;
    }
  };
}
