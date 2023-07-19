def custom_formatter(source, language, css_class, options, md, classes=None, id_value='', attrs=None, **kwargs):
    """Permet au code de rester non formaté pour Quizdown"""
    return '```'+css_class+'\n'+source+'\n```'