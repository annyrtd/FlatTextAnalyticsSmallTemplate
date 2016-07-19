class Page_ta_detailed_analysis {
    static function Hide (context){
        return false;
    }

    static function Render (context){
        TALibrary.setReport(context.pageContext, context.log, context.report, context.confirmit, context.user);
        TALibrary.setCurrentQuestion(context.pageContext.Items["questionID"]);
        switch(context.component.SubmitSource){
            case "btnResetCategories":
                context.state.Parameters[TALibrary.currentQuestion.questionDetails.TACategoryListParameter] = null;
                TALibrary.currentQuestion.setCurrentTheme(null)
                break;
            default:
                TALibrary.currentQuestion.setCurrentTheme(context.state.Parameters.GetString(TALibrary.currentQuestion.questionDetails.TACategoryListParameter));
            	break;
        }
    }

    static function tblDetailedTable_Hide(context){
        return false;
    }

    static function tblDetailedTable_Render(context){
        TATableUtils.createDetailedTable(context.component, context.state.Parameters.GetString(TALibrary.currentQuestion.questionDetails.TADetailedChartTypeParameter), context.state.Parameters.GetString(TALibrary.currentQuestion.questionDetails.TADetailedChartShowParameter), context.state.Parameters.GetString(TALibrary.currentQuestion.questionDetails.TADetailedChartDistributionParameter))
    }


    static function htlIndividualResponse_Hide(context){
        return false;
    }

    static function htlIndividualResponse_Render(context){
        for(var i=0; i<TALibrary.currentQuestion.questionDetails.TAHitlistFields.length; i++){
            context.component.Columns.Add(TATableUtils.getTAHitlistColumn(TALibrary.currentQuestion.questionDetails.TAHitlistFields[i]));
        }
    }

    static function txtCategoryList_Hide(context){
        return false;
    }

    static function txtCategoryList_Render(context){
    var label = "Categories: ";
        context.component.Output.Append(label);
    }

    static function btnResetCategories_Hide(context){
        return false;
    }

    static function btnResetCategories_Render(context){
        context.component.Label = new Label(9,"x");
    }

    static function txtDetailedHeader_Hide(context){
        return false;
    }

    static function txtDetailedHeader_Render(context){
        var label = "Category and Sentiment Analysis";
        context.component.Output.Append(label);
    }

    static function txtChartType_Hide(context){
        return false;
    }

    static function txtChartType_Render(context){
        var label = "Chart type: ";
        context.component.Output.Append(label);
    }

    static function txtChartShow_Hide(context){
        return false;
    }

    static function txtChartShow_Render(context){
        var label = "Show N rows: ";
        context.component.Output.Append(label);
    }

    static function txtChartDistribution_Hide(context){
        return (context.state.Parameters.GetString(TALibrary.currentQuestion.questionDetails.TADetailedChartTypeParameter) == "type6");
    }

    static function txtChartDistribution_Render(context){
        var label = "Distribution: ";
        context.component.Output.Append(label);
    }

    static function lstChartDistribution_Hide(context){
        return (context.state.Parameters.GetString(TALibrary.currentQuestion.questionDetails.TADetailedChartTypeParameter) == "type6");
    }

    static function txtIndividualHeader_Hide(context){
        return false;
    }

    static function txtIndividualHeader_Render(context){
        var label = "Individual Response Analysis";
        if(TALibrary.currentQuestion.currentTheme >=0){
            label+=" for category "+TALibrary.currentQuestion.themes[TALibrary.currentQuestion.currentTheme].name
        }
        context.component.Output.Append(label);
    }
}