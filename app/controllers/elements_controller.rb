class ElementsController < ApplicationController

  def index
    @elements = Element.all
    render json: @elements
  end

  def show
    @element = Element.find(params[:id])
    render json: @element
  end
  
  def new
    @element = Element.new
  end

  def create
    @element = Element.new(element_params)

    respond_to do |format|
      if @element.save
        format.html { redirect_to @element, notice: 'Element was successfully created.' }
        format.json { render action: 'show', status: :created, location: @element }
      else
        format.html { render action: 'new' }
        format.json { render json: @element.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /elements/1
  # PATCH/PUT /elements/1.json
  def update
    respond_to do |format|
      if @element.update(element_params)
        format.html { redirect_to @element, notice: 'Element was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @element.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /elements/1
  # DELETE /elements/1.json
  def destroy
    @element.destroy
    respond_to do |format|
      format.html { redirect_to elements_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_element
      @element = Element.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def element_params
      params.require(:element).permit(:field_one, :field_two)
    end

end
