class Parameters{
    static function pCategoryList_Domain(context){
        TAParameterUtils.createThemesListParameter(context.component, context.pageContext.Items["questionID"]);
    }

    static function pCategoryList_Mask(context){}

    static function pCategoryList_FilterSummary(context){}

    static function pDetailedChartShow_Domain(context){
        TAParameterUtils.createDetailedChartShowParameter(context.component);
    }

    static function pDetailedChartShow_Mask(context){}

    static function pDetailedChartShow_FilterSummary(context){}

    static function pDetailedChartType_Domain(context){
        TAParameterUtils.createDetailedChartTypeParameter(context.component);
    }

    static function pDetailedChartDistribution_Mask(context){}

    static function pDetailedChartDistribution_FilterSummary(context){}

    static function pDetailedChartDistribution_Domain(context){
        TAParameterUtils.createDetailedChartDistributionParameter(context.component);
    }

    static function pDetailedChartType_Mask(context){}

    static function pDetailedChartType_FilterSummary(context) {}
}