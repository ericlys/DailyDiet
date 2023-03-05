export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      register: {
        meal: string
      } | undefined;
      feedback: undefined;
      details: {
        mealId: string
      };
    }
  }
}