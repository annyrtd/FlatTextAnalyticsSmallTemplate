class Page_ta_overall_analysis {
    static function Hide (context) {
        return false;
    }
    static function Render (context) {
        TALibrary.setReport(context.pageContext, context.log, context.report, context.confirmit, context.user);
        TALibrary.setCurrentQuestion(context.pageContext.Items["questionID"]);
        TALibrary.currentQuestion.setCurrentTheme(context.state.Parameters.GetString(TALibrary.currentQuestion.questionDetails.TACategoryListParameter));
    }

    /*-------Tables-------*/

    static function tblTopThemes_Hide(context){
        return false;
    }
    static function tblTopThemes_Render(context){
        TATableUtils.createTopThemesTable(context.component);
    }

    static function tblTopTrending_Hide(context){
        return false;
    }
    static function tblTopTrending_Render(context){
    var period1 = context.pageContext.Items["period1"]?context.pageContext.Items["period1"]:null;
    var period2 = context.pageContext.Items["period2"]?context.pageContext.Items["period2"]:null;
        TATableUtils.createTopTrendingTable(context.component, period1, period2);
    }

    static function tblTopPositive_Hide(context){
        return false;
    }
    static function tblTopPositive_Render(context){
        TATableUtils.createTopPositiveTable(context.component);
    }

    static function tblTopNegative_Hide(context){
        return false;
    }
    static function tblTopNegative_Render(context){
        TATableUtils.createTopNegativeTable(context.component);
    }

    static function tblSentimentTrend_Hide(context){
        return false;
    }
    static function tblSentimentTrend_Render(context){
        TATableUtils.createSentimentTrendingTable(context.component);
    }

    /*--------charts-----------*/

    static function chtTopThemes_Hide(context){
        return false;
    }
    static function chtTopThemes_Render(context){
        TAChartUtils.switchSeriesInRowsOff(context.component);
        TAChartUtils.switchReversedCategoriesOff(context.component);
        TAChartUtils.switchLabelsOn(context.component);
    }

    static function chtTopTrending_Hide(context){
        return false;
    }
    static function chtTopTrending_Render(context){
        TAChartUtils.switchSeriesInRowsOff(context.component);
        TAChartUtils.switchReversedCategoriesOff(context.component);
        TAChartUtils.switchFormulasOff(context.component);
        TAChartUtils.switchLabelsOn(context.component);
    }

    static function chtTopPositive_Hide(context){
        return false;
    }
    static function chtTopPositive_Render(context){
        TAChartUtils.switchSeriesInRowsOff(context.component);
        TAChartUtils.switchReversedCategoriesOff(context.component);
        TAChartUtils.switchLabelsOn(context.component);
    }

    static function chtTopNegative_Hide(context){
        return false;
    }
    static function chtTopNegative_Render(context){
        TAChartUtils.switchSeriesInRowsOff(context.component);
        TAChartUtils.switchReversedCategoriesOff(context.component);
        TAChartUtils.switchLabelsOn(context.component);
    }

    static function chtSentimentTrend_Hide(context){
        return false;
    }
    static function chtSentimentTrend_Render(context){
        TAChartUtils.switchReversedCategoriesOff(context.component);
        TAChartUtils.switchLabelsOn(context.component);
    }

    /*-------verbatims---------*/

    static function verbPositive_Hide(context){
        return false;
    }
    static function verbPositive_Render(context){
        TATableUtils.createTAVerbatim(context.component);
    }

    static function verbNegative_Hide(context){
        return false;
    }
    static function verbNegative_Render(context){
        TATableUtils.createTAVerbatim(context.component);
    }

    /*---------texts----------*/

    static function txtOverallHeader_Hide(context){
        return false;
    }
    static function txtOverallHeader_Render(context){
        var label = "Summary";
        context.component.Output.Append(label);
    }

    static function txtVerbSentimentHeader_Hide(context){
        return false;
    }

    static function txtVerbSentimentHeader_Render(context){
        var label = "Verbatim Sentiment";
        context.component.Output.Append(label);
    }

    static function txtTopThemes_Hide(context){
        return false;
    }
    static function txtTopThemes_Render(context){
        var label = "Top Themes";
        context.component.Output.Append(label);
    }

    static function txtTopTrending_Hide(context){
        return false;
    }
    static function txtTopTrending_Render(context){
        var label = "Top Trending";
        context.component.Output.Append(label);
    }

    static function txtTopPositive_Hide(context){
        return false;
    }
    static function txtTopPositive_Render(context){
        var label = "Top Positive Mentions";
        context.component.Output.Append(label);
    }

    static function txtTopNegative_Hide(context){
        return false;
    }
    static function txtTopNegative_Render(context){
        var label = "Top Negative Mentions";
        context.component.Output.Append(label);
    }

    static function txtSentimentTrend_Hide(context){
        return false;
    }
    static function txtSentimentTrend_Render(context){
        var label = "Sentiment trending";
        context.component.Output.Append(label);
    }

    static function txtPositiveVerb_Hide(context){
        return false;
    }
    static function txtPositiveVerb_Render(context){
        var label = "Comments with Positive sentiment";
        context.component.Output.Append(label);
    }

    static function txtNegativeVerb_Hide(context){
        return false;
    }
    static function txtNegativeVerb_Render(context){
        var label = "Comments with Negative sentiment";
        context.component.Output.Append(label);
    }
}